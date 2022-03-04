// import React from "react";
// if (typeof window !== `undefined`) {
//   const MathJax = require("mathjax3-react")
// }

// export function m(props) {
//     let str;
//     if (props.l) {
//         str = "$"+props.l +"$"
//     } else if (props.d){
//         str = "$$" + props.d + "$$"
//     } else {
//         str = ""
//     }
//   return (
//     <div>
//       <MathJax.Provider options={{
//           tex: {
//             inlineMath: [['$', '$'], ['\\(', '\\)']]
//           }
//         }}>
//         <MathJax.Formula formula={str} />
//       </MathJax.Provider>
//     </div>
//   );
// }