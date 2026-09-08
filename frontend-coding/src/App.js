import './App.css';




function App() {
  return (
    <div className="App">
      <h1>Start</h1>
    </div>
  );
}

export default App;
// import { useEffect, useState } from "react";

// function MyComponent({ prop1, prop2 }) {

//     useEffect(() => {
//         console.log("effect 1");
        
//     });

//     useEffect(() => {
//         console.log("effect 2");
//     }, []);

//     useEffect(() => {
//         console.log("effect 3");
//     }, [prop1]);

//     useEffect(() => {
//         console.log("effect 4");
//     }, [prop2]);

//     useEffect(() => {
//         console.log("effect 5");
//     }, [prop1, prop2]);

//     console.log("effect 6");

//     return (
//         <table>
//             <thead>
//                 <tr>
//                     <th>Prop 1</th>
//                     <th>Prop 2</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td>{prop1 ? 'true' : 'false'}</td>
//                     <td>{prop2 ? 'true' : 'false'}</td>
//                 </tr>
//             </tbody>
//         </table>
//     );
// }

// function Button ({ onClick, label }) {
//     return <button onClick={onClick}>{label}</button>
// }

// function Heading({ label }) {
//     return <h1>{ label }</h1>;
// }
// // unit integration e2e
// unit /integration /end to end
// export default function App() {
//     const [state1, setState1] = useState(false);
//     const [state2, setState2] = useState(false);


//     return (
//         <div>
//             <Heading label="hello" />
//             <MyComponent prop1={state1} prop2={state2} />
//             <Button onClick={() => setState1(!state1)} label="Toggle prop 1" />
//             <Button onClick={() => setState2(!state2)} label="Toggle prop 2" />
//         </div>
//     );
// }
