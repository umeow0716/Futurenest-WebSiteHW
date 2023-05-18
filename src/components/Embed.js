import React, { Component } from 'react';
import Info from './SalesAnalysis/Info.svg';
import styled from "styled-components"

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
`;

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

const Title = styled.p`
    width: 100%;
    font-size: 18px;
    display: flex;
    justify-content: space-between;
`

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

const Dot = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 100%; 
`

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

function CustomContainer(DotList = [], CustomImg = <img alt="" />) {
    return class Object extends Component {
        constructor(props) {
            super(props);
            this.props = props;
        }
    
        render() {
            return (
                <Container>
                    <Box>
                        <Title>
                            {this.props.Title}
                            <img src={Info} alt="Info" />
                        </Title>
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