import React from 'react';
import ReactDOM from 'react-dom';

export const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                Hello World
            </header>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('index'));