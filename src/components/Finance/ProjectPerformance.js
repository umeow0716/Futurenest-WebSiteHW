import React, { Component } from "react";
import styled from "styled-components";
import Embed from "../Embed";
import Page from "../Page";

import ProjectRevenue from "../tables/project_revnue_details"
import ProjectExpenditure from "../tables/project_expenditure_details"

const MonthlyIncome = Embed.CustomContainer(
  [
    { text: "Project net", color: "rgba(18, 147, 154, 1)" },
    { text: "Project gross profit", color: "rgba(18, 147, 154, 0.4)" },
    { text: "Project net profit", color: "rgba(25, 132, 177, 1)"}
  ],
  "73.6vw"
);

const MonthlyLoss = Embed.CustomContainer(
    [
      { text: "project cost", color: "rgba(239, 93, 40, 1)" },
      { text: "Project cost", color: "rgba(239, 93, 40, 0.4)" }
    ],
    "73.6vw"
  );

const SalesRank = Embed.CustomContainer(
  [],
  "73.6vw",
  "/yyyy"
);

const Card = Embed.CustomContainer([], "17.71vw");

const CardList = styled.span`
  display: flex;
  flex-direction: row;
`;

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

const Padding = styled.span`
  margin-left: auto;
  padding: 2vmin;
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

class CardSpan extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <Card Title={this.props.title}>
        <Row>
          <Padding>
            <RowValue
              color={this.props.color}
              size={this.props.size}
              text={this.props.text}
            />
          </Padding>
        </Row>
      </Card>
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
        text: "Project Net Turnover",
        color: "background: rgba(0, 0, 0, 1)",
      },
      {
        icon: "$",
        size: "24px",
        text: "474,349",
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
        text: "Project Cost",
        color: "rgba(0, 0, 0, 1)",
      },
      {
        icon: "$",
        size: "24px",
        text: "-284,609",
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
        text: "Project Gross Profit",
        color: "rgba(0, 0, 0, 1)",
      },
      {
        icon: "$",
        size: "24px",
        text: "139,739",
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
        text: "Project Cost",
        color: "rgba(0, 0, 0, 1)",
      },
      {
        icon: "$",
        size: "24px",
        text: "-118,587",
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
        text: "Project Business Net Profit",
        color: "rgba(0, 0, 0, 1)",
      },
      {
        icon: "$",
        size: "24px",
        text: "71,151",
        color: "rgba(42, 125, 131, 0.8)",
      },
      {
        size: "20px",
        text: "15%",
        color: "rgba(42, 125, 131, 0.8)",
      },
    ])}
  </ContentBoxList>
);

const FourthEmbed = Embed.CustomContainer([], "calc(71vw + 6vmin)")

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
      
      <FourthEmbed Title="Project Revenue Details">
        <ProjectRevenue />
      </FourthEmbed>

      <FourthEmbed Title="Project Expenditure Details">
        <ProjectExpenditure />
      </FourthEmbed>
      
      <Page.CustomPortTitle text="Detail View" />
      <Page.FooterCompleted />
    </span>
  );
}

export default App;