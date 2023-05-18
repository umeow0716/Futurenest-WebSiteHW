import styled from "styled-components"
import Embed from '../Embed'
import Page from '../Page'

function App() {
    const SalesRank = Embed.CustomContainer(
        [
            {
                text: "Sales Amount", 
                color: `rgba(18, 147, 154, 1)`
            }
        ],
        styled.img`
            max-width: 23vw;
            padding-right: 0.65vw;
            padding-left: 0.65vw;
        `
    )

    const CommodityPerformance = Embed.CustomContainer(
        [
            {
                text: "Product Sales", 
                color: `rgba(18, 147, 154, 1)`
            }
        ],
        styled.img`
            max-width: 23vw;
            padding-right: 0.65vw;
            padding-left: 0.65vw;
        `
    )

    return (
        <span>
            <Page.CustomPageTitle title="Sales Analysis" description="(All data accumulated to yyyy/mm/dd)" />
            
            <Page.CustomPortTitle text="Overview" />
            <Embed.EmbedList>
                <SalesRank Title="Product Sales Ranking" src="https://i.imgur.com/e2RI6gb.png" alt="Analysis" />
                <SalesRank Title="Customer Sales Ranking" src="https://i.imgur.com/8HlqVxP.png" alt="Analysis" />
                <SalesRank Title="Salesman Sales Ranking" src="https://i.imgur.com/7kbb9JE.png" alt="Analysis" />
            </Embed.EmbedList>

            <Page.CustomPortTitle text="Detail View" />

            <Embed.EmbedList>
                <CommodityPerformance Title="Commodity Channel Performance" src="https://i.imgur.com/e2RI6gb.png" alt="Analysis" />
                <CommodityPerformance Title="Commodity Regional Performance" src="https://i.imgur.com/8HlqVxP.png" alt="Analysis" />
                <CommodityPerformance Title="Commodity Platform Performance" src="https://i.imgur.com/7kbb9JE.png" alt="Analysis" />
            </Embed.EmbedList>

            <Page.Footer_completed />
        </span>
    )
}

export default App;