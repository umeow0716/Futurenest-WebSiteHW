import styled from "styled-components"

import Page from "../Page"
import Embed from "../Embed"

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
], "68vw", "yyyy/mm - yyyy/mm")

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

            <SecondEmbed Title="Petty Cash In And Out Status" />
        </span>
    )
} 