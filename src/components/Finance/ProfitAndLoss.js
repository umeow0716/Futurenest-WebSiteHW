import React, { Component, useEffect, useState } from "react";
import styled from "styled-components";
import Embed from "../Embed";
import Page from "../Page";

const base = "http://ec2-35-77-78-80.ap-northeast-1.compute.amazonaws.com:8000";

const FormatNumber = (num) => new Intl.NumberFormat().format(num);
const FormatPer = (num) => new Intl.NumberFormat("en-US", {style: "percent" }).format(num)

const MonthlyIncome = Embed.CustomContainer(
  [
    { text: "net revenue", color: "rgba(18, 147, 154, 1)" },
    { text: "operating profit", color: "rgba(18, 147, 154, 0.4)" },
    { text: "Operating profit", color: "rgba(25, 132, 177, 1)"}
  ],
  "73.6vw"
);

const MonthlyLoss = Embed.CustomContainer(
    [
      { text: "Operating cost", color: "rgba(239, 93, 40, 1)" },
      { text: "Operating expenses", color: "rgba(239, 93, 40, 0.4)" }
    ],
    "73.6vw"
  );

const SalesRank = Embed.CustomContainer(
  [],
  "73.6vw",
  "/yyyy"
);

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  border-left: solid #e5e5e5;
  margin-left: 3vmin;
  margin-top: 3vmin;
  padding: 2vmin;
  align-items: start;
  width: 50%;
`;

const ContentTitle = styled.div`
  align-self: end;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  margin-bottom: 2vmin;
`;

const ContentBoxList = styled.span`
  display: flex;
  flex-direction: row;
  margin-right: 3vmin;
  margin-bottom: 3vmin;
  width: 72.6vw;
`;

const Row = styled.span`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 1vmin;
  margin-buttom: 1vmin;
`;

const RowTitle = styled.span`
  display: flex;
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-size: 14px;

  align-self: center;
`;
const RowIcon = styled.span`
  display: flex;
  margin-left: 0.5vmin;
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;

  align-self: center;
`;

class RowValue extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  Font = styled.span`
    color: ${this.props.color || "rgba(239, 93, 40, 0.8)"};
    font-size: ${this.props.size || "32px"};
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    margin-left: auto;
  `;

  render() {
    return <this.Font>{this.props.text}</this.Font>;
  }
}

class RowData extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <Row>
        <RowTitle>{this.props.title}</RowTitle>
        {this.props.icon ? <RowIcon>{this.props.icon}</RowIcon> : ""}
        <RowValue
          color={this.props.color}
          size={this.props.size}
          text={this.props.text}
        />
      </Row>
    );
  }
}

export const ContentBoxData = (props) => {
  return (
    <ContentBox>
      {props.title ? <ContentTitle>{props.title}</ContentTitle> : ""}
      {props.data.map((x) => (
        <RowData
          title={x.title}
          icon={x?.icon || ""}
          size={x.size}
          text={x.text}
          color={x.color}
        />
      ))}
    </ContentBox>
  );
};

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    console.log("test")
    fetch(`${base}/api/comprehensiveIncomeAnalysis/accumulatedEarnings`)
      .then(d => d.json())
      .then(d => setData(d));
  }, []);

  return (
    <span>
      <Page.CustomPageTitle
        title="Project Business Performance"
        description="(all data accumulated to yyyy/mm/dd)"
      />

      <Page.CustomPortTitle text="Overview" />

      <Embed.EmbedList>
        <SalesRank
          Title="Cumulative Project Profit And Loss"
          alt="Analysis">
          <ContentBoxList>
            <ContentBoxData data={[
              {
                size: "16px",
                text: "Net Revenue",
                color: "background: rgba(0, 0, 0, 1)",
              },
              {
                icon: "$",
                size: "24px",
                text: FormatNumber(data.netOperatingRevenue),
                color: "rgba(42, 125, 131, 1)",
              },
              {
                size: "20px",
                text: `${data.netOperatingRevenuePer}%`,
                color: "rgba(42, 125, 131, 1)",
              },
            ]} />

            <ContentBoxData data={[
              {
                size: "16px",
                text: "Operating Cost",
                color: "rgba(0, 0, 0, 1)",
              },
              {
                icon: "$",
                size: "24px",
                text: FormatNumber(data.totalOperatingCost),
                color: "rgba(239, 93, 40, 1)",
              },
              {
                size: "20px",
                text: FormatPer(data.operatingCostPer),
                color: "rgba(239, 93, 40, 1)",
              },
            ]} />

            <ContentBoxData data={[
              {
                size: "16px",
                text: "Operating Profit",
                color: "rgba(0, 0, 0, 1)",
              },
              {
                icon: "$",
                size: "24px",
                text: FormatNumber(data.operatingProfit),
                color: "rgba(42, 125, 131, 0.8)",
              },
              {
                size: "20px",
                text: FormatPer(data.operatingProfitPer),
                color: "rgba(42, 125, 131, 0.8)",
              },
            ]} />

            <ContentBoxData data={[
              {
                size: "16px",
                text: "Operating Expenses",
                color: "rgba(0, 0, 0, 1)",
              },
              {
                icon: "$",
                size: "24px",
                text: FormatNumber(data.operatingExpense),
                color: "rgba(239, 93, 40, 0.8)",
              },
              {
                size: "20px",
                text: FormatPer(data.operatingExpensePer),
                color: "rgba(239, 93, 40, 0.8)",
              },
            ]} />

            <ContentBoxData data={[
              {
                size: "16px",
                text: "Operating profit",
                color: "rgba(0, 0, 0, 1)",
              },
              {
                icon: "$",
                size: "24px",
                text: FormatNumber(data.operatingNetProfit),
                color: "rgba(25, 132, 177, 1)",
              },
              {
                size: "20px",
                text: FormatPer(data.operatingNetProfitPer),
                color: "rgba(25, 132, 177, 1)",
              },
            ]} />
          </ContentBoxList>
        </SalesRank>

        <MonthlyIncome
          Title="Monthly Project Income"
          src="https://i.imgur.com/Om0Wswv.png"
        />

        <MonthlyLoss
            Title="Monthly Project Fee Loss"
            src="https://i.imgur.com/oLO3YR2.png"
        />
      </Embed.EmbedList>

      <Page.FooterCompleted />
    </span>
  );
}

export default App;