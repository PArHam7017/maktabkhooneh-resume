import React from 'react';
import './Resume.css';
import Navigation from "../Navigation/Navigation";
import TitlesSection from "../TitlesSection/TitlesSection";
import AboutSection from "../AboutSection/AboutSection";
import SkillSection from "../SkillSection/SkillSection";

export default class Resume extends React.Component {
    render() {
        return (
            <div className={"resume"}>
                <Navigation />
                <TitlesSection />
                <AboutSection />
                <SkillSection />
            </div>
        );
    }
}