import React from 'react';
import './Resume.css';
import Navigation from "../Navigation/Navigation";
import TitlesSection from "../TitlesSection/TitlesSection";
import AboutSection from "../AboutSection/AboutSection";
import SkillSection from "../SkillSection/SkillSection";
import data from "../../data";
import SnowStorm from "react-snowstorm";

export default class Resume extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            themeId: 0
        };

        this.changeTheme = this.changeTheme.bind(this);
    }

    changeTheme() {
        const {themeId} = this.state;
        if (themeId < data.themeOptions.length - 1) {
            this.setState({themeId: themeId + 1})
        } else {
            this.setState({themeId: 0})
        }
    }

    render() {
        let snowEffect = null;
        if (this.state.themeId === 2) {
             snowEffect = <SnowStorm />;
        } else {
             snowEffect = null;
        }

        return (
            <div className={"resume"}>
                {snowEffect}
                <Navigation handleChangeThemeClick={this.changeTheme}/>
                <TitlesSection themeId={this.state.themeId}/>
                <AboutSection themeId={this.state.themeId}/>
                <SkillSection themeId={this.state.themeId}/>
            </div>
        );
    }
}