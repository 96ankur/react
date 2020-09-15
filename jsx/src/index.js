// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonClick(){
    return 'Click on Me!'
}
// Create a react component
        // const App = () => {
        // return <div>Hi there!</div>
        // };
    // babel convert above code to
        // const App = () => {
        //     return React.createElement("div", null, "Hi there!");
        // };

    const App = () =>{
        return (
            <div>
                <label className="label" htmlFor="name">
                    Enter name:
                </label>
                <input id="name" type="text"></input>
                <button style={{backgroundColor: 'blue', color: 'white'}}>{getButtonClick()}</button>
                {/* <button style="backgroundColor: blue; color: white;">Submit</button>     this is how inline styling is done in HTML */}
            </div>
        )
    }

// Take the react component and show it on the screen

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);