import React from "react";
// import

class NewWish extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sub:"please subscribe",btn:"Subscribe" };
  }
   WishButton=()=>{
    this.setState({
        sub:"Thank you",
        btn:"Subscribed"
    })
}

render(){
    return <div>
        <p >{this.state.sub}</p>
        <button onClick={this.WishButton}>{this.state.btn}</button>
        <h1>Hii my name is {this.state.name}</h1>
        <p>My age is {this.state.age}</p>
        {/* <h1>hello </h1> */}
    </div>;
  }
}
export default NewWish;

