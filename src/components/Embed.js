import React, { Component } from 'react'
import Info from './Sales/Info.svg'
import styled from "styled-components"

//灰色容器
const Container = (props) => {
    const ContainerStyle = styled.div`
        box-sizing: border-box;
        background-color: rgba(255, 255, 255, 1);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        border: 1px solid rgba(0, 0, 0, 0.1);
        box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.06);
        border-radius: 12px;
        margin: 1vmin;
        width: max-content;
        max-width: ${props.maxWidth || "auto"};
        height: max-content;
        margin-bottom: 5vmin;
        margin-top: 3vmin;

        transform: scale(1,1);
        transition: all 200ms ease-out;

        &:hover {
            transform:scale(1.06, 1.06);
            z-index: 97;
        }
    `;

    return (
        <ContainerStyle>{props.children}</ContainerStyle>
    )
}

//將容器上下隔開(灰色底線)
const Box = styled.div`
    padding-left: 3vmin;
    padding-right: 3vmin;
    text-align: start;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    font-family: 'Inter';
    font-weight: 400;
    font-size: 18px;
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    
    flex-wrap: wrap;
`

//容器標題及Info按鈕CSS (放Box裡面)
const Title = styled.p`
    width: 100%;
    font-size: 18px;
    display: flex;
    flex-direction: row;
    word-wrap: break-word;
`
const Description = styled.h6`
    font-size: 16px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.4);
    padding-left: 0.5vmin;

    margin-block-start: 0em;
    margin-block-end: 0em;
`

//表格中的項目列表CSS (放Box裡面)
const DotRow = styled.div`
    width: 100%;
    display: inline-flex;
    flex-wrap: nowrap;
    justify-content: end;
    align-items: center;
    color: rgba(0, 0, 0, 0.4);
    font-size: 14px;
    margin-bottom: 2vmin;
`

//項目點點CSS (放DotRow裡面)
const Dot = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 100%; 
`

//將內容強制設定不換行
const Inline = styled.span`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    margin-left: 1.5vmin;
`

const InfoButton = styled.a`
    display: flex;
    border: none;
    background-color: transparent;
    padding-left: 1vmin;
`

class DotObject extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    Dot = styled.div`
        width: 8px;
        height: 8px;
        border-radius: 100%;
        margin-right: 1vmin;
        background-color: ${this.props.color};
    `

    render() {
        return (
            <this.Dot />
        )
    }
}

const EmbedList = styled.span`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

function CustomContainer(DotList = [], CustomImg = <img alt="" />, maxWidth = "auto", description="", CustomContent="") {
    return class Object extends Component {
        constructor(props) {
            super(props);
            this.props = props;
        }
        
        Title = styled.p`
            width: 100%;
            font-size: 18px;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            word-wrap: break-word;
            text-overflow: ellipsis;
            justify-content: flex-start;

            & a {
                margin-left: auto;
            }
        `

        render() {
            return (
                <Container maxWidth={ this.props.maxWidth }>
                    <Box>
                        <this.Title>
                            {this.props.Title}
                            {description ? <Description>{description}</Description> : ""}
                            <InfoButton href='#'><img src={Info} alt="Info" /></InfoButton>
                        </this.Title>
                        {
                            DotList.length ?
                            <DotRow>
                                {
                                    DotList.map(x => 
                                        <Inline><DotObject color={x.color}/>{x.text}</Inline>
                                    )
                                }
                            </DotRow> :
                            ""
                        }
                    </Box>
                    {this.props.children}
                    {this.props.CustomContent || ""}
                    {this.props.src ? <CustomImg src={this.props.src} alt={this.props.alt || "Image"} /> : "" }
                </Container>
            )
        }
    } 
}

const ObjectList = {
    EmbedList,
    Container,
    Box,
    Title,
    DotRow,
    Dot,
    CustomContainer
}

export default ObjectList