import React from 'react';
import { ToDoListSettings } from './ToDoListSettings';

export class ToDoListHeader extends React.Component {
    constructor(props) {
        super(props);
        this.toggleSettings = this.toggleSettings.bind(this);
    }

    toggleSettings(e) {
        e.preventDefault();
        this.props.toggleSettings(!this.props.settingsForm)
    }

    render() {
        var default_color = {
                color: this.props.colors.defaultColor
            },
            primaryColor = {
                borderColor: this.props.colors.primaryColor
            };
        return (
            <header className='todolist__header' style={primaryColor}>
                <h1 className="todolist__title" style={default_color}>{this.props.settingsForm ? this.props.heading + ' (настройки)' : this.props.heading}</h1>
                <a href="#" className="todolist__header-settings_btn" onClick={this.toggleSettings}>
                    <svg className="icon icon-settings" style={default_color}><use xlinkHref="#icon-settings"></use></svg>
                </a>
                <ToDoListSettings
                    colors={this.props.colors}
                    settingsForm={this.props.settingsForm}
                    changeColor={this.props.changeColor} />
            </header>
        );
    }
}