import React from "react";
import MathJax from "mathjax3-react";

export function m(props) {
    let str;
    if (props.l) {
        str = "$"+props.l +"$"
    } else if (props.d){
        str = "$$" + props.d + "$$"
    } else {
        str = ""
    }
  return (
    <div>
      <MathJax.Provider options={{
          tex: {
            inlineMath: [['$', '$'], ['\\(', '\\)']]
          }
        }}>
        <MathJax.Formula formula={str} />
      </MathJax.Provider>
    </div>
  );
}