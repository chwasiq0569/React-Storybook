import React, { Component } from "react";
import Line from "react-chartjs2";

// const ReactChartJS = (props) => {
//   const data = {
//     labels: ["JAV", "FEB", "MAR", "APR", "MAY", "JUN"],
//     datasets: {
//       label: "Sales for 2020 (M)",
//       data: [3, 2, 2, 1, 5, 8],
//     },
//   };
//   return (
//     <div>
//       <Line data={data} />
//       Hello
//     </div>
//   );
// };

// export default ReactChartJS;

class ReactChartJS extends Component {
  constructor(props) {
    super(props);
    let data = {
      labels: ["JAV", "FEB", "MAR", "APR", "MAY", "JUN"],
      datasets: {
        label: "Sales for 2020 (M)",
        data: [3, 2, 2, 1, 5, 8],
      },
    };
    this.state = {
      data: data,
    };
  }

  render() {
    return (
      <>
        <Line data={this.state.data} />
      </>
    );
  }
}

export default ReactChartJS;
