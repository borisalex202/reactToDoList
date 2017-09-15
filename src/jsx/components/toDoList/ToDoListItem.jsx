import React from 'react';

export class ToDoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleEditItem= this.handleEditItem.bind(this);
        this.handleRemoveItem= this.handleRemoveItem.bind(this);
        this.handleCompleteItem= this.handleCompleteItem.bind(this);
        this.handleEditItemTitle= this.handleEditItemTitle.bind(this);
        this.state = {
            valueText: this.props.title
        };
    }
    handleEditItem(e) {
        this.props.toggleEditForm(this.props.index);
    }
    handleEditItemTitle(e) {
        this.setState({
            valueText: e.target.value
        });

        this.props.editTitle(this.props.index, e.target.value);
    }
    handleRemoveItem() {
        this.props.removeItem(this.props.index);
    }
    handleCompleteItem(e) {
        this.props.completeItem(this.props.index);
    }
    render() {
        var defaultInput = {
            'borderColor': this.props.colors.defaultColor,
            'color': this.props.colors.defaultColor
        };
        return (
            <div className={'todolist__item' + (this.props.complete ? ' complete' : '') + (this.props.editForm ? ' active' : '')}>
                <label className="checkbox">
                    <input type="checkbox" name="todolist" onChange={this.handleCompleteItem} />
                    <span className="checkbox__icon"></span>
                    <span className="checkbox__text">
                        {this.props.title}
                    </span>
                </label>
                <div className={this.props.editForm ? "todolist__tools active" : "todolist__tools"}>
                    {this.props.editForm ? <button className="todolist__tools-item save" onClick={this.handleEditItem}></button> : <button className="todolist__tools-item info" onClick={this.handleEditItem}></button>}
                    <button className="todolist__tools-item remove" onClick={this.handleRemoveItem}></button>
                </div>
                <div className={this.props.editForm ? "todolist__edit active" : "todolist__edit"}>
                    <input style={defaultInput} type="text" className="todolist__edit-text" name="text" value={this.state.valueText} onChange={this.handleEditItemTitle} />
                    {/*<input type="text" className="todolist__edit-time" name="time" />*/}
                </div>
            </div>
        );
    }
}