import Embed from '../Embed'
import Page from '../Page'

import Details from "../tables/this_month_sales_details";
import Lists from "../tables/commodity_channel_performance_list"

const FourthEmbed = Embed.CustomContainer([], "calc(72vw + 6vmin)")

function App() {
    const SalesRank = Embed.CustomContainer(
        [
            {
                text: "Sales Amount", 
                color: `rgba(18, 147, 154, 1)`
            }
        ],
        "24.5vw"
    )

    const CommodityPerformance = Embed.CustomContainer(
        [
            {
                text: "Product Sales", 
                color: `rgba(18, 147, 154, 1)`
            }
        ],
        "24.5vw"
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

            <FourthEmbed Title="This Month's Sales Details">
                <Details />
            </FourthEmbed>

            <Embed.EmbedList>
                <CommodityPerformance Title="Commodity Channel Performance" src="https://i.imgur.com/e2RI6gb.png" alt="Analysis" />
                <CommodityPerformance Title="Commodity Regional Performance" src="https://i.imgur.com/8HlqVxP.png" alt="Analysis" />
                <CommodityPerformance Title="Commodity Platform Performance" src="https://i.imgur.com/7kbb9JE.png" alt="Analysis" />
            </Embed.EmbedList>

            <FourthEmbed Title="Commodity Channel Performance List">
                <Lists />
            </FourthEmbed>

            <Page.FooterCompleted />
        </span>
    )
}

export default App;