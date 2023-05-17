import React, { Component } from 'react';
import styled from "styled-components"
import Info from './Info.svg';

function App() {
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
        display: flex;
        flex-wrap: wrap;
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
        background-color: rgba(18, 147, 154, 1);
    `

    const PageTitle = styled.div`
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        margin-left: 3vmin;

        & h3 {
            margin-block-start: 0.5em;
            margin-block-end: 0.5em;
        }

        &::after {
            content: '';
            width: 100%;
            height: 1vmin;
        }
    `

    const Description = styled.h6`
        font-size: 16px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.4);
        padding-left: 1.5vmin;

        margin-block-start: 1.8em;
        margin-block-end: 1.8em;
    `

    const PortTitle = styled.h5`
        padding-left: 3vmin;
        text-align: start;

        margin-block-start: 0em;
        margin-block-end: 0em;
    `

    const Rank = styled.img`
        max-width: 23vw;
        padding-right: 0.65vw;
        padding-left: 0.65vw;
    `

    const List = styled.span`
        display: flex;
        flex-direction: row;
    `

    class RankContain extends Component {
        constructor(props) {
            super(props);
            this.props = props;
        }
    
        render() {
            return (
                <Container>
                    <Box>
                        <Title>
                            {this.props.text}
                            <img src={Info} alt="Info" />
                        </Title>
                        <DotRow>
                            <Dot />{this.props.item}
                        </DotRow>
                    </Box>
                    <Rank src={this.props.src} alt="Rank" />
                </Container>
            )
        }
    }

    return (
        <span>
            <PageTitle>
                <h3>Sales Analysis</h3>
                <Description>(All data accumulated to yyyy/mm/dd)</Description>
            </PageTitle>
            <PortTitle>Overview</PortTitle>
            <List>
                <RankContain text="Product Sales Ranking" item="Sales Amount" src="https://i.imgur.com/e2RI6gb.png"/>
                <RankContain text="Customer Sales Ranking" item="Sales Amount" src="https://i.imgur.com/8HlqVxP.png"/>
                <RankContain text="Salesman Sales Ranking" item="Sales Amount" src="https://i.imgur.com/7kbb9JE.png"/>
            </List>
        </span>
    )
}

export default App;