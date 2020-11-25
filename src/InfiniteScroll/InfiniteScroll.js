import React, { useEffect, useState } from "react";
import "./infinitescroll.css";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
const InfiniteScroll = () => {
  const [pageNumber, setPageNumber] = useState(12);
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  /////////////////////////////////////////////
  const [scrollHeight, setScrollHeight] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = (e) => {
    // console.log("scrollHeight: ", e.currentTarget.scrollHeight);
    // console.log("scrollTop: ", e.currentTarget.scrollTop);
    // console.log("clientHeight: ", e.currentTarget.clientHeight);
    console.log(
      parseInt(e.currentTarget.scrollTop + 1),
      "==",
      parseInt(e.currentTarget.scrollHeight) -
        parseInt(e.currentTarget.offsetHeight)
    );
    let sub =
      parseInt(e.currentTarget.scrollTop) -
      (parseInt(e.currentTarget.scrollHeight) -
        parseInt(e.currentTarget.offsetHeight));
    console.log("Sub: ", sub);
    if (
      parseInt(e.currentTarget.scrollTop) ==
      parseInt(e.currentTarget.scrollHeight) -
        parseInt(e.currentTarget.offsetHeight)
    ) {
      console.log("Hello");
      setPageNumber((prevPage) => prevPage + 1);
    }
    // obj.scrollTop === (obj.scrollHeight - obj.offsetHeight
    // if (
    //   parseInt(e.currentTarget.scrollHeight) -
    //     parseInt(e.currentTarget.scrollTop) ==
    //     parseInt(e.currentTarget.clientHeight) ||
    //   parseInt(e.currentTarget.clientHeight + 1) ||
    //   parseInt(e.currentTarget.clientHeight - 1)
    // ) {
    //   console.log("Good");
    //   setPageNumber((prevPage) => prevPage + 1);
    //   return;
    // }
  };
  console.log("pageNumber: ", pageNumber);

  useEffect(() => {
    setBooks([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: "GET",
      url: `http://openlibrary.org/search.json`,
      params: { q: query, page: pageNumber },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setBooks((prevBooks) => [
          ...new Set([...prevBooks, ...res.data.docs.map((b) => b.title)]),
        ]);
        setHasMore(res.data.docs.length > 0);
        setLoading(false);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        setError(true);
      });
    return () => cancel();
  }, [query, pageNumber]);

  return (
    <div className="outerContainer">
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setPageNumber(1);
        }}
      />
      <div id="scrollContainer" className="container" onScroll={handleScroll}>
        {books.map((book) => (
          <div key={book}>{book}</div>
        ))}
        <div>{loading && "...Loading"}</div>
        <div>{error && "...Error"}</div>
      </div>
    </div>
  );
};

export default InfiniteScroll;
