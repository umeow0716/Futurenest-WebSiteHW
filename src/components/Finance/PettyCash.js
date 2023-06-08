import styled from "styled-components"

import Page from "../Page"
import Embed from "../Embed"

const FilterButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 4px 12px 4px 40px;
    gap: 12px;

    width: 21vmin;
    height: 3vmin;

    background: rgba(0, 0, 0, 0.1);
    border-radius: 12px;
`;

const FirstEmbed = Embed.CustomContainer([])
const SecondEmbed = Embed.CustomContainer([
    {
        color: `rgba(18, 147, 154, 1)`,
        text: "Income"
    },
    {
        color: `rgba(239, 93, 40, 0.8)`,
        text: "pay out"
    },
    {
        color: `rgba(25, 132, 177, 0.8)`,
        text: "account balance"
    }
], "calc(72vw + 6vmin)", "", "yyyy/mm - yyyy/mm")

const ThirdEmbed = Embed.CustomContainer([], "34vw", "", "yyyy/mm", <FilterButton>test</FilterButton>)

const EmbedList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
`;

const Row = styled.span`
    display: flex;
    flex-direction: row;
    width: 34vw;
    margin: 3vmin;
`;

const RowRight = styled.span`
    margin-left: auto;
`

const Text = (props) => {
    let TextBase = styled.div`
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: ${props.size};
        line-height: 34px;

        color: rgba(239, 93, 40, 0.8);
    `;

    return (
        <TextBase>{props.children}</TextBase>
    )
}

export default function PettyCash(props) {
    return (
        <span>
            <Page.CustomPageTitle
                title="Petty Cash In And Out Account"
                description="(All data accumulated to yyyy/mm/dd)"
            />

            <Page.CustomPortTitle
                text="Overview"
            />
            <EmbedList>
            <FirstEmbed Title="Total Petty Cash Outgoing">
                <Row>
                    $
                    <RowRight>
                        <Text size="32px">-31876</Text>
                    </RowRight>
                </Row>
            </FirstEmbed>

            <FirstEmbed Title="Ratio Of Operating Expenses">
                <Row>
                    <RowRight>
                        <Text size="48px">5.8%</Text>
                    </RowRight>
                </Row>
            </FirstEmbed>
            </EmbedList>

            <SecondEmbed Title="Petty Cash In And Out Status" src="https://i.imgur.com/ocBmH7d.png" />

            <Page.CustomPortTitle
                text="Detail View"
            />

            <ThirdEmbed Title="Spend Category Comparison"/>
            
        </span>
    )
} 