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

        console.log(currentItems)
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
        return (
            <main className={this.props.emptyForm ? "todolist__content empty" : "todolist__content"}>
                {
                    this.props.items.map((item, i) =>
                        <ToDoListItem
                            key={i}
                            index={i}
                            title={item.title}
                            editForm={item.editForm}
                            complete={item.complete}
                            colors={this.props.colors}
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