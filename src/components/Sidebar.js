import React, { Component } from 'react';

import styled from 'styled-components'
import icon from './icon.svg'
import IconList from './IconList.js'

import Buttons from './Buttons.js'

const Base = styled.div`
    background: #FFFFFF;
    min-height: auto;
    min-width: 20vw;
    box-shadow: 3px 3px 5px #E9E9E9;
    align-items: start;
    justify-items: center;
    padding-top: 2vh;
    flex-direction: column;
`;

const ItemList = styled.div`
    height: 92%;
    width: auto;
    flex-direction: column;

    &:before {
        height: 500px;
        content:"";
    }
`;

class ItemTitle extends Component {
    constructor(props) {
        super(props);
        this.props = props;

        this.state = {
            data: "right",
            icon: <Buttons.right />
        }
    }

    Object = styled.button`
        display: flex;
        
        border:none;
        background-color:transparent;
        border-radius: 10px;
        height: 6vmin;
        width: 90%;
        
        flex-direction: row;
        align-items: center;
        padding: 1vmin;
        margin: 3vmin 2vmin 0vmin 2vmin;
        
        color: #999999;
        transition: background-color 200ms, color 200ms, fill 500ms ease-out 30ms;
        
        & path {
            fill: #999999
        }

        &:hover {
            background-color: #93F0F0;
            color: black;
        }

        &:hover path {
            fill: black;
        }
    `;

    TextBox = styled.b`
        font-family: Inter;
        font-size: 19px;
        padding: 1vmin;
    `;

    LastIcon = styled.div`
        display: flex;
        margin-left: auto;
    `;
    change = () => {
        if (this.state.data === "right") {
            this.setState({
                data: "down",
                icon: <Buttons.down />
            });
        }
        else {
            this.setState({
                data: "right",
                icon: <Buttons.right />
            });
        }
    }

    render() {
        return (
            <this.Object onClick={this.change}>
                <this.props.icon alt="icon" />
                <this.TextBox>{this.props.text}</this.TextBox>
                {this.props.LastIcon && this.props.LastIcon !== "0" ? (<this.LastIcon>{this.state.icon}</this.LastIcon>) : ""}
            </this.Object>
        )
    }
}

class Element extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    Object = styled.a`
        width: auto;
        font-family: 'Noto Sans TC';
        display: flex;
        font-size: 13px;
        color: rgba(0, 0, 0, 0.4);

        padding-left: 7.5vmin;
        padding-top: 1.4vmin;
        text-transform: capitalize;
    `;

    render() {
        return (
            <this.Object>
                {this.props.text}
            </this.Object>
        )
    }
}

class Item extends Component {
    constructor(props) {
        super(props);
        this.props = props;

        this.state = {
            open: false,
            jsx: this.none
        }
    }

    display = styled.span`
        & a {
            display: block;
        }
    `;

    none = styled.span`
        & a {
            display: none;
        }
    `;

    change = () => {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        return (
            <span>
                <span onClick={this.change}><ItemTitle icon={this.props.icon} text={this.props.text} LastIcon={this.props.LastIcon} /></span>
                {this.state.open ? this.props.children : ""}
            </span>
        )
    }
}

function Sidebar() {
    return (
        <Base>
            <img src={icon} alt="logo" />
            <ItemList>
                <Item icon={IconList.Overview} text="Overview" LastIcon="0"></Item>
                <Item icon={IconList.Finance} text="Finance" LastIcon="1">
                    <Element text="Profit And Loss" />
                    <Element text="Cash Flow Analysis" />
                </Item>
                <Item icon={IconList.Sales} text="Sales" LastIcon="1">
                </Item>
                <Item icon={IconList.HR} text="HR" LastIcon="1"></Item>
                <Item icon={IconList.Invoicing} text="Invoicing" LastIcon="1"></Item>
                <Item icon={IconList.Genuine_AI} text="Genuie AI" LastIcon="1"></Item>
            </ItemList>
        </Base>
    )
}

export default Sidebar;