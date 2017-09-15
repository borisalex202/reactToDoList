import React from 'react';

export class ToDoListSettings extends React.Component {
    constructor(props) {
        super(props);
        this.changeDefaultColor = this.changeDefaultColor.bind(this);
        this.changePrimaryColor = this.changePrimaryColor.bind(this);
        this.state = {
            defaultColorText: this.props.colors.defaultColor,
            primaryColorText: this.props.colors.primaryColor
        };
    }

    changeDefaultColor(e) {
        this.setState({
            defaultColorText: e.target.value
        });

        this.props.changeColor(e.target.name, e.target.value);
    }
     changePrimaryColor(e) {
        this.setState({
            primaryColorText: e.target.value
        });

        this.props.changeColor(e.target.name, e.target.value);
    }

    render() {
        return (
            <div className={this.props.settingsForm ? "todolist__header-settings active" : "todolist__header-settings "}>
                <div className="todolist__header-settings_row">
                    <div className="todolist__header-settings_label">
                        Основной цвет
                    </div>
                    <div className="todolist__header-settings_input">
                        <input type="text" value={this.state.defaultColorText} onChange={this.changeDefaultColor} name="defaultColor" />
                    </div>
                </div>
                <div className="todolist__header-settings_row">
                    <div className="todolist__header-settings_label">
                        Второстепенный цвет
                    </div>
                    <div className="todolist__header-settings_input">
                        <input type="text" value={this.state.primaryColorText} onChange={this.changePrimaryColor} name="primaryColor" />
                    </div>
                </div>
            </div>
        );
    }
}