import React from "react";

const Props=(Props)=>{
    return <div>
        <h2>hello {Props.name}</h2>
    </div>
}

// const dataOne="dinga" 
// const dataTwo="dingi" 
// const dataThree="sundra" 
// const dataFour="sundri" 


const Wish=()=>{
    return <div>
        <Props name={'dingaaa'}/>
        <Props name={"dingi"}/>
        <Props name={'sundra'}/>
        <Props name={'sundri'}/>
    </div>
}
export default Wish;