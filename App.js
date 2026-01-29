import React from 'react';
import ReactDOM from 'react-dom/client';

// Creating a heading using JSX
// JSX - JavaScript XML => React.createElement => React Element (JS Object) => HTML Element (render)
// THe above operation is done by Parcel using Babel compiler
const jsxHeading = (<h1 id="heading" className="header-red">Hello World from React using JSX!!</h1>);
console.log(jsxHeading); // Renderes the object
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(jsxHeading); // render method converts the object to h1 tag and fetches the output