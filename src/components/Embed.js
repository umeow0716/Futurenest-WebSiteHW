import React, { Component } from 'react';
import Info from './Sales/Info.svg';
import styled from "styled-components"

//灰色容器
const Container = styled.div`
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
    margin-bottom: 5vmin;
    margin-top: 3vmin;
`;

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
    word-wrap: break-word;
    justify-content: space-between;
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
`

function CustomContainer(DotList = [], CustomImg = <img alt="" />, maxWidth = "auto") {
    return class Object extends Component {
        constructor(props) {
            super(props);
            this.props = props;
        }
        
        Title = styled.p`
            max-width: ${maxWidth};
            width: 100%;
            font-size: 18px;
            display: flex;
            word-wrap: break-word;
            justify-content: space-between;
        `

        render() {
            return (
                <Container>
                    <Box>
                        <this.Title>
                            {this.props.Title}
                            <img src={Info} alt="Info" />
                        </this.Title>
                        <DotRow>
                            {
                                DotList.map(x => 
                                    <Inline><DotObject color={x.color}/>{x.text}</Inline>
                                )
                            }
                        </DotRow>
                    </Box>
                    <CustomImg src={this.props.src} alt={this.props.alt || "Image"} />
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