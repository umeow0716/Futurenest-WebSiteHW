import styled from "styled-components"

import Page from "../Page"
import Embed from "../Embed"

const First_Embed = Embed.CustomContainer([], <img alt="icon"/>)
const Second_Embed = Embed.CustomContainer([
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
], <img alt="icon"/>, "68vw", "yyyy/mm - yyyy/mm")

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
            <First_Embed Title="Total Petty Cash Outgoing">
                <Row>
                    $
                    <RowRight>
                        <Text size="32px">-31876</Text>
                    </RowRight>
                </Row>
            </First_Embed>

            <First_Embed Title="Ratio Of Operating Expenses">
                <Row>
                    <RowRight>
                        <Text size="48px">5.8%</Text>
                    </RowRight>
                </Row>
            </First_Embed>
            </EmbedList>

            <Second_Embed Title="Petty Cash In And Out Status" />
        </span>
    )
} 