import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement(
    'div',
    { id: 'parent' },
    [
        React.createElement(
            'div',
            { id: 'child' },
            [
                React.createElement(
                    'h1',
                    { id: 'heading' },
                    'I am an h1 tag'
                ),
                React.createElement(
                    'h2',
                    { id: 'heading2' },
                    'I am an h2 tag'
                ),
            ]
        ),
        React.createElement(
            'div',
            { id: 'child2' },
            [
                React.createElement(
                    'h1',
                    { id: 'heading' },
                    'I am an h1 tag'
                ),
                React.createElement(
                    'h2',
                    { id: 'heading2' },
                    'I am an h2 tag'
                ),
            ]
        )
    ]
)
const heading = React.createElement('h1', { id: 'heading', dataStyle: 'italics' }, "Hello World from React!!");
console.log(parent); // Renderes the object 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent); // render method converts the object to h1 tag and fetches the output