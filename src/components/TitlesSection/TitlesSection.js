import React from 'react';
import "./TitlesSection.css";
import data from '../../data';
import FullPage from "../FullPage/FullPage";
import {SocialIcon} from "react-social-icons";
import { IconContext } from "react-icons";
import {FaAngleDown} from 'react-icons/fa';
import { Link, Element } from "react-scroll";

export default class TitlesSection extends React.Component {

    constructor() {
        super();
        this.state = {
            color: "white"
        };
        this.changeColor = this.changeColor.bind(this);
    }

    changeColor() {
        this.setState({
            color: this.state.color === "white" ? "yellow" : "white"
        });
    }

    render() {
        return (
            <div>
                <Element name="HOME"/>
                <FullPage className="first">
                    <h1 className="title"
                        style={{color: this.state.color}}
                        onMouseOver={this.changeColor}
                        onMouseLeave={() => {this.changeColor();}}>
                        {data.title}
                    </h1>
                    <div><h2>{data.subtitle}</h2></div>
                    <div className="icons-wrapper">
                        {Object.keys(data.links).map(key => {
                            return (
                                <div className="icon">
                                    <SocialIcon url={data.links[key]}/>
                                </div>
                            );
                        })}
                    </div>
                    <div className="bottom-page">
                        <Link
                            activeClass="active"
                            to="ABOUT"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            delay={0}>
                            <IconContext.Provider value={{ size: "5rem" }}>
                                <div><FaAngleDown /></div>
                            </IconContext.Provider>
                        </Link>
                    </div>
                </FullPage>
            </div>
        )
    }
}