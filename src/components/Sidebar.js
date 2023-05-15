import React, { Component } from 'react';

import styled from 'styled-components'
import icon from './icon.svg'
import IconList from './IconList.js'

import right from './right.js'
import down from './down.js'

import Buttons from './Buttons.js'

const Base = styled.div`
    background: #FFFFFF;
    min-height: auto;
    min-width: 15vw;
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

class Item extends Component{
    constructor(props) {
        super(props);
        this.props = props;

        this.state = {
            data: "right",
            jsx: <Buttons.right />
        }
    }

    Object = styled.div`
        display: flex;
        
        border-radius: 10px;
        margin: 1vmin;
        height: 4vmin;
        width: 83%;
        
        flex-direction: row;
        align-items: center;
        padding: 1vmin;
        margin: 2vmin;
        
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
                jsx: <Buttons.down />
            });
        }
        else {
            this.setState({
                data: "right",
                jsx: <Buttons.right />
            });
        }
    }

    render() {
        return (
            <this.Object onClick={this.change}>
                <this.props.icon alt="icon"/>
                <this.TextBox>{this.props.text}</this.TextBox>
                {this.props.LastIcon ? (<this.LastIcon>{this.state.jsx}</this.LastIcon>) : ""}
            </this.Object>
        )
    }
}



function Sidebar() {
    return (
        <Base>
            <img src={icon} alt="logo" />
            <ItemList>
                <Item icon={IconList.Overview} text="Overview"/>
                <Item icon={IconList.Finance} LastIcon="1" text="Finance" alt="right"></Item>
                <Item icon={IconList.Sales} LastIcon="1" text="Sales"></Item>
                <Item icon={IconList.HR} LastIcon="1" text="HR"></Item>
                <Item icon={IconList.Invoicing} LastIcon="1" text="Invoicing"></Item>
                <Item icon={IconList.Genuine_AI} LastIcon="1" text="Genuie AI"></Item>
            </ItemList>
        </Base>
    )
}

export default Sidebar;