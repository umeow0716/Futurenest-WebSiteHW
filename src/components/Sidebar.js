import React, { Component, useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import styled from 'styled-components'
import icon from './icon.svg'
import IconList from './IconList.js'

import Buttons from './Buttons.js'

const Base = styled.div`
    display: flex;
    background: #FFFFFF;
    height: 100vh;
    width: 16vw;
    max-width: 16vw;
    box-shadow: 3px 3px 5px #E9E9E9;
    align-items: center;
    justify-items: center;
    flex-direction: column;
    z-index: 100;
`;

const Image = styled.img`
    padding-top: 2vh;
    padding-bottom: 2vh;
`;

class ItemTitle extends Component {
    constructor(props) {
        super(props);
        this.props = props;

        this.state = {
            data: this.props.data,
            icon: this.props.data === "right" ? <Buttons.right /> : <Buttons.down />
        }
    }

    Object = styled.button`
        display: flex;
        
        border: none;
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
            background-color: #F2F2F2;
            color: rgba(0, 0, 0, 0.8);
        }

        &:hover path {
            fill: rgba(0, 0, 0, 0.8);
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

const ItemList = (props) => {
    let ItemListObject = styled.div`
        overflow: auto;
        overflow-x: overlay;
        overflow-y: overlay;

        height: 100%;
        width: 100%;
        flex-direction: column;

        &:before {
            height: 500px;
            content:"";
        }

        &::-webkit-scrollbar {
            display: flex;
            width: 7px;
            height: 10px;
        }

        &::-webkit-scrollbar-button {
            background: transparent;
            border-radius: 4px;
        }

        &::-webkit-scrollbar-track-piece {
            background: transparent;
        }

        &::-webkit-scrollbar-thumb {
            border-radius: 4px;
            background-color: rgba(0, 0, 0, 0.4);
            border: none;
        }

        &::-webkit-scrollbar-track {
            box-shadow: transparent;
        }
    `

    return (
        <ItemListObject>
            { props.children }
        </ItemListObject>
    )
}

const Element = (props) => {
    const [TextColor, SetTextColor] = useState(document.location.pathname === props?.to ? `rgba(255, 255, 255, 1)` : `rgba(0, 0, 0, 0.4)`);
    const [BGColor, SetBGColor] = useState(document.location.pathname === props?.to ? `rgba(0, 0, 0, 0.8)` : `rgba(255, 255, 255, 1)`);

    const [HoverColor, SetHoverColor] = useState(document.location.pathname === props?.to ? `rgba(255, 255, 255, 1)` : `rgba(28, 28, 28, 1)`);
    const [HoverBGColor, SetHoverBGColor] = useState(document.location.pathname === props?.to ? `rgba(0, 0, 0, 0.8)` : `rgba(0, 0, 0, 0.05)`);

    let Base = (props) => {
        let Style = styled.a`
            font-family: 'Noto Sans TC';
            display: flex;
            font-size: 13px;
            color: rgba(0, 0, 0, 0.4);

            width: 90%;
            margin: 1vh 0vmin 2vmin 2vmin;

            padding-top: 0.5vh;
            padding-bottom: 0.5vh;
            border-radius: 12px;
        
            transition: background-color 200ms, color 150ms ease-out 30ms;
            text-align: start;

            color: ${props.TextColor};
            background-color: ${props.BGColor};

            &:hover {
                background-color: ${props.HoverBGColor};
                color: ${props.HoverColor};
            }
        `;

        return (
            <Style>
                {props.children}
            </Style>
        )
    }

    let refresh = (detail) => {
        if(!detail) return;
        SetTextColor(detail === props?.to ? `rgba(255, 255, 255, 1)` : `rgba(0, 0, 0, 0.4)`);
        SetBGColor(detail === props?.to ? `rgba(0, 0, 0, 0.8)` : `rgba(255, 255, 255, 1)`);

        SetHoverColor(detail === props?.to ? `rgba(255, 255, 255, 1)` : `rgba(28, 28, 28, 1)`);
        SetHoverBGColor(detail === props?.to ? `rgba(0, 0, 0, 0.8)` : `rgba(0, 0, 0, 0.05)`);
    }
    
    let TextBase = styled.div`
        width: auto;
        height: auto;

        padding-left: 5vmin;
        white-space: nowrap;

        text-decoration: none;
    `

    let StateUpdate = () => {
        let event = new CustomEvent("StateUpdate", { detail: props?.to });
        document.dispatchEvent(event);
    }

    useEffect(() => {
        document.addEventListener("StateUpdate", (event) => {
            refresh(event?.detail);
        });
    });

    return (
        <Link to={props.to} style={{ textDecoration: 'none' }} onClick={StateUpdate}>
            <Base TextColor={TextColor} BGColor={BGColor} HoverColor={HoverColor} HoverBGColor={HoverBGColor}>
                <TextBase>
                    {props.text}
                </TextBase>
            </Base>
        </Link>
    )
}

const Item = (props) => {
    let children_path = props?.children?.map(element => element?.props?.to)?.filter(x => x);
    
    let none = styled.span`
        & a {
            display: none;
        }
    `;

    let display = styled.span`
        & a {
            display: block;
        }
    `;

    const [ open, SetOpen ] = useState(children_path?.includes(document.location.pathname));
    const [ child, setChild ] = useState(props.children);

    let change = () => SetOpen(!open);
    
    useEffect(() => {
        document.addEventListener("StateUpdate", () => {
            setChild(null);
            setChild(props.children)
        });
    })

    return (
        <Link to={props.to} style={{ textDecoration: 'none' }}>
            <span onClick={change}><ItemTitle icon={props.icon} text={props.text} LastIcon={props.LastIcon} data={ open ? "down" : "right" } /></span>
            {open ? child : ""}
        </Link>
    )
}

function Sidebar() {
    return (
        <Base>
            <Image src={icon} alt="logo" />
            <ItemList>
                <Item icon={IconList.Overview} text="Overview" LastIcon="0" to="/Overview" />
                <Item icon={IconList.Finance} text="Finance" LastIcon="1">
                    <Element text="Profit And Loss" />
                    <Element text="Cash Flow Analysis" />
                    <Element text="Receivable & Payable" />
                    <Element text="Product Performance" />
                    <Element text="Project Performance" />
                    <Element text="Petty Cash In & Out" />
                </Item>
                <Item icon={IconList.Sales} text="Sales" LastIcon="1">
                    <Element text="Product Sales" to="/ProductSales" />
                    <Element text="Business Analysis" to="/BusinessAnalysis" />
                </Item>
                <Item icon={IconList.HR} text="HR" LastIcon="1">
                    <Element text="Salary List" />
                    <Element text="Health Insurance" />
                    <Element text="Welfare Work" />
                    <Element text="Hour Management" />
                </Item>
                <Item icon={IconList.Invoicing} text="Invoicing" LastIcon="1">
                    <Element text="Purchase Source" />
                    <Element text="Inventory" />
                    <Element text="Shipping" />
                </Item>
                <Item icon={IconList.Genuine_AI} text="Genuie AI" LastIcon="1">
                    <Element text="Income & Expenditure" />
                    <Element text="Sales Forecast" />
                    <Element text="Transactions" />
                </Item>
            </ItemList>
        </Base>
    )
}

export default Sidebar;