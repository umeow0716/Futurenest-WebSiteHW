import React, { Component } from "react";
import styled from "styled-components";
import Embed from "../Embed";
import Page from "../Page";

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
  width: 70vw;
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

export const ContentBoxData = (title, data) => {
  return (
    <ContentBox>
      {title ? <ContentTitle>{title}</ContentTitle> : ""}
      {data.map((x) => (
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

const test = (
  <ContentBoxList>
    {ContentBoxData("", [
      {
        size: "16px",
        text: "Net Revenue",
        color: "background: rgba(0, 0, 0, 1)",
      },
      {
        icon: "$",
        size: "24px",
        text: "862,453",
        color: "rgba(42, 125, 131, 1)",
      },
      {
        size: "20px",
        text: "100%",
        color: "rgba(42, 125, 131, 1)",
      },
    ])}

    {ContentBoxData("", [
      {
        size: "16px",
        text: "Operating Cost",
        color: "rgba(0, 0, 0, 1)",
      },
      {
        icon: "$",
        size: "24px",
        text: "-517,471",
        color: "rgba(239, 93, 40, 1)",
      },
      {
        size: "20px",
        text: "-60%",
        color: "rgba(239, 93, 40, 1)",
      },
    ])}

    {ContentBoxData("", [
      {
        size: "16px",
        text: "Operating Profit",
        color: "rgba(0, 0, 0, 1)",
      },
      {
        icon: "$",
        size: "24px",
        text: "344,981",
        color: "rgba(42, 125, 131, 0.8)",
      },
      {
        size: "20px",
        text: "40%",
        color: "rgba(42, 125, 131, 0.8)",
      },
    ])}

    {ContentBoxData("", [
      {
        size: "16px",
        text: "Operating Expenses",
        color: "rgba(0, 0, 0, 1)",
      },
      {
        icon: "$",
        size: "24px",
        text: "-215,613",
        color: "rgba(239, 93, 40, 0.8)",
      },
      {
        size: "20px",
        text: "-25%",
        color: "rgba(239, 93, 40, 0.8)",
      },
    ])}

    {ContentBoxData("", [
      {
        size: "16px",
        text: "Operating profit",
        color: "rgba(0, 0, 0, 1)",
      },
      {
        icon: "$",
        size: "24px",
        text: "129,367",
        color: "rgba(25, 132, 177, 1)",
      },
      {
        size: "20px",
        text: "15%",
        color: "rgba(25, 132, 177, 1)",
      },
    ])}
  </ContentBoxList>
);

function App() {
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
          alt="Analysis"
          CustomContent={test}
        />
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