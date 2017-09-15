import React from 'react';
import ReactDOM from 'react-dom';
import { ToDoList } from './components/toDoList/ToDoList';

const appId = document.getElementById('app');

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <ToDoList />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    appId
);