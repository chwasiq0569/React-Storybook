import React from 'react';
import { connect } from 'react-redux';
import { buy_cakes } from '../Redux/cake/cakeTypes';
const CakeContainer = (props) => {
    return ( 
    <div>
        <h1>Number of Cakes: {props.numberofCakes} </h1>
        <button onClick={props.buyCakes}>BUY CAKES</button>
    </div> 
           );
}

const mapStateToProps = (state) => {
  return {
      numberofCakes: state.numberofCakes
  }
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        buyCakes: () => dispatch(buy_cakes())
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer);
