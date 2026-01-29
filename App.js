import React from 'react';
import ReactDOM from 'react-dom/client';

// Creating a heading using JSX
// JSX - JavaScript XML => React.createElement => React Element (JS Object) => HTML Element (render)
// THe above operation is done by Parcel using Babel compiler
const jsxHeading = (<h1 id="heading" className="header-red">Hello World from React using JSX!!</h1>);
// React Component - A function that returns JSX
const Title = () => {
    return (
        <h1 id="title" className="title-red">Welcome!!</h1>
    );
};
const Heading = () => {
    return (
        <div id="container" className="container-blue">
            <Title />
            {/* Another method to call title component since its a function */}
            {Title()}
            {/* To call react element inside a component */}
            {jsxHeading}
            {/* Using Javascript inside JSX */}
            {100 + 200}
            <h1 id="heading" className="header-red">Hello World from React Functional Component using JSX!!</h1>
        </div>
    );
};

console.log(jsxHeading); // Renderes the object
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Heading />); // render method converts the object to h1 tag and fetches the output