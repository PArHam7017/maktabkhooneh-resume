import React from 'react';
import "./AboutSection.css";
import data from '../../data';
import FullPage from "../FullPage/FullPage";
import {Element, Link} from "react-scroll";
import {IconContext} from "react-icons";
import {FaAngleDown} from 'react-icons/fa'

export default class AboutSection extends React.Component {

    constructor() {
        super();
        this.state = {
            themeColor: data.themeOptions[0][1]
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const {themeId} = nextProps;

        return {
            themeColor: data.themeOptions[themeId][1],
        };
    }

    render() {
        return (
            <div>
                <Element name={"ABOUT"} />
                <FullPage className={"second"} backgroundColor={this.state.themeColor}>
                    <h3>{data.sections[0].title}</h3>
                    <div>
                        {data.sections[0].items.map(p => {
                            return <p>{p.content}</p>;
                        })}
                    </div>
                    <div className="bottom-page">
                        <Link
                            activeClass="active"
                            to="SKILLS"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            delay={0}>
                            <IconContext.Provider value={{ className : "down-icon" }}>
                                <FaAngleDown />
                            </IconContext.Provider>
                        </Link>
                    </div>
                </FullPage>
            </div>
        )
    }
}