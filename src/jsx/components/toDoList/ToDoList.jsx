import React from 'react';
import { ToDoListHeader } from './ToDoListHeader';
import { ToDoListContent } from './ToDoListContent';
import { ToDoListFooter } from './ToDoListFooter';

export class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearEmptyForm = this.clearEmptyForm.bind(this);
        this.changeColor = this.changeColor.bind(this);
        this.toggleSettings = this.toggleSettings.bind(this);
        this.state = {
            heading: 'Список заметок',
            items: [],
            colors: {
                defaultColor: '#126dc2',
                primaryColor: '#57a8f3'
            },
            text: '',
            validForm: false,
            emptyForm: true,
            settingsForm: false
        };
    }

    handleChange(e) {
        this.setState({
            text: e.target.value
        });
        if(e.target.value.length > 0) {
            this.setState({
                validForm: true
            });
        } else {
            this.setState({
                validForm: false
            });
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        // Reset the display of the edit form to false
        var currentItems = this.state.items;
        if(currentItems.length > 0) {
            currentItems.map((item) =>
                item.editForm = false
            );
            this.setState({
                items: currentItems
            });
        }

        // Adding new item
        if(e.target.getElementsByClassName('todolist__add-input')[0].value.length > 0) {
            var newItem = {
                title: this.state.text,
                editForm: false,
                complete: false
            };

            this.setState({
                items: this.state.items.concat(newItem),
                text: '',
                validForm: false,
                emptyForm: false,
                settingsForm: false
            });
        }
    }

    clearEmptyForm(e) {
        if(e) {
            this.setState({
                emptyForm: true
            });
        }
    }

    changeColor(name, val) {
        var colorsArray = this.state.colors;

        if(name && val) {
            Object.keys(colorsArray).map(() => (
                colorsArray[name] = val
            ));

            this.setState({
                colors: colorsArray
            });
        }
    }

    toggleSettings(e) {
        this.setState({
            settingsForm: e
        });
    }

    render() {
        return (
            <div className='todolist'>
                <ToDoListHeader
                    heading={this.state.heading}
                    colors={this.state.colors}
                    settingsForm={this.state.settingsForm}
                    changeColor={this.changeColor}
                    toggleSettings={this.toggleSettings} />
                <ToDoListContent
                    items={this.state.items}
                    emptyForm={this.state.emptyForm}
                    colors={this.state.colors}
                    clearContent={this.clearEmptyForm} />
                <ToDoListFooter
                    text={this.state.text}
                    validForm={this.state.validForm}
                    colors={this.state.colors}
                    change={this.handleChange}
                    submit={this.handleSubmit} />
            </div>
        );
    }
}