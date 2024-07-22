import React from "react";
// import ReactDOM from "react-dom";
import { useState } from "react";

const Button = (props) => {
  const [a, setA] = useState("Please Subscribe");
  const [b, setB] = useState();
  const [c, setc] = useState();

  
  function change() {
    setA("Thank you for Subscribe");
    setB(<i className="bi bi-bell-fill"></i>);
    setc("d");
    let constain = document.getElementById("alert");
    constain.classList.remove("alert");
    constain.classList.add("d-none");
    setTimeout(() => {
      constain.classList.remove("d-none");
      constain.classList.add("alert");
    }, 3000);
  }
  return (
    <div className="conatiner">
      <h4 id="alert" className="alert">
        {a}
      </h4>
      <button onClick={change}>Subscribe{c}</button>{" "}
      <i>{b}</i>
    </div>
  );
};
export default Button;
