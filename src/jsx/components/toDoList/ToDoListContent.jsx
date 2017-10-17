import React from 'react';
import { ToDoListItem } from './ToDoListItem';

export class ToDoListContent extends React.Component {
    constructor(props) {
        super(props);
        this.handleEditForm = this.handleEditForm.bind(this);
        this.handleRemoveItem = this.handleRemoveItem.bind(this);
        this.handleCompleteItem = this.handleCompleteItem.bind(this);
        this.handleEditTitle = this.handleEditTitle.bind(this);
    }

    handleEditForm(i) {
        var currentItems = this.props.items;

        // Reset the display of the edit not active form to false;
        if(currentItems.length > 0 && currentItems[i].editForm == false) {
            currentItems.map((item) =>
                item.editForm = false
            );
            this.setState({
                items: currentItems
            });
        }

        // Display form
        currentItems[i].editForm = !currentItems[i].editForm;
        this.setState({
            items: currentItems
        });
    }
    handleEditTitle(i, text) {
        var currentItems = this.props.items;

        currentItems[i].editForm = true;
        currentItems[i].title = text;

        this.setState({
            items: currentItems
        });
    }

    handleRemoveItem(i) {
        var newItems = this.props.items;

        newItems.splice(i, 1);
        this.setState({
            items: newItems
        });

        this.props.clearContent(this.props.items.length == 0 ? true : false);
    }
    handleCompleteItem(i) {
        var currentItems = this.props.items;

        currentItems[i].complete = !currentItems[i].complete;
        this.setState({
            items: currentItems
        });
    }

    render() {
        var dateInput = '.react-datepicker__input-container input { border-color: ' + this.props.colors.defaultColor + '; color: ' + this.props.colors.defaultColor + ';} .react-datepicker__input-container input::-webkit-input-placeholder, .react-datepicker__input-container input:-moz-placeholder, .react-datepicker__input-container input::-moz-placeholder, .react-datepicker__input-container input:-ms-input-placeholder { color: ' + this.props.colors.defaultColor + '; }',
            datepickerStyles ='.react-datepicker__header { background-color: ' + this.props.colors.defaultColor + '; color: ' + this.props.colors.textColor + '; } .react-datepicker__day--keyboard-selected { background-color: ' + this.props.colors.defaultColor + '; }';
        return (
            <main className={this.props.emptyForm ? "todolist__content empty" : "todolist__content"}>
                <style>
                    {dateInput}
                    {datepickerStyles}
                </style>
                {
                    this.props.items.map((item, i) =>
                        <ToDoListItem
                            key={i}
                            index={i}
                            title={item.title}
                            editForm={item.editForm}
                            complete={item.complete}
                            colors={this.props.colors}
                            showCompletes={this.props.showCompletes}
                            reminder={this.props.reminder}
                            toggleEditForm={this.handleEditForm}
                            removeItem={this.handleRemoveItem}
                            completeItem={this.handleCompleteItem}
                            editTitle = {this.handleEditTitle} />
                    )
                }
            </main>
        );
    }
}