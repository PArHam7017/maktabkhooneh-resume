import React from 'react';
import "./SkillSection.css";
import {Element} from 'react-scroll';
import data from '../../data';
import FullPage from "../FullPage/FullPage";
import SkillCard from "../SkillCard/SkillCard";

export default class SkillSection extends React.Component {
    render() {
        return (
            <div>
                <Element name={"SKILLS"} />
                <FullPage className="third">
                    <h3>{data.sections[1].title}</h3>
                    <div className="cards-wrapper">
                        {data.sections[1].items.map(eachSkill => {
                            return (
                                <SkillCard skill={eachSkill}/>
                            );
                        })}
                    </div>
                </FullPage>
            </div>
        )
    }
}