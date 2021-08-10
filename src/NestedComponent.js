import React from "react";

function NestedComponent(){

    return(
           
            <div>
                <h2>This is my Parent component</h2>
                <Child />
            </div>
     
    )
}

const Child = () => {
    return(
        <div>
            <h2>I am the kid</h2>
        </div>
    )
}

export default NestedComponent