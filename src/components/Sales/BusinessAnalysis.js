import React, { Component } from "react";
import styled from "styled-components";
import Embed from "../Embed";
import Page from "../Page";

const Estimated = Embed.CustomContainer(
  [{ text: "Estimated transaction amount", color: "#12939A" }],
  "36.35vw"
);

const AchievementRate = Embed.CustomContainer(
  [
    { text: "Project Revenue", color: "#12939A" },
    { text: "Project Cost", color: "rgba(239, 93, 40, 0.4)" },
  ],
  "73.6vw"
);

const SalesRank = Embed.CustomContainer(
  [],
  "73.6vw",
  "yyyy/mm/dd"
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
    {ContentBoxData("MTD", [
      {
        title: "Target Amount",
        icon: "$",
        size: "24px",
        text: "200,000",
        color: "#1984B1",
      },
      {
        title: "Actual Amount",
        icon: "$",
        size: "32px",
        text: "167,753",
        color: "rgba(239, 93, 40, 0.8)",
      },
      {
        title: "Achievement Rate",
        size: "20px",
        text: "83.3%",
        color: "rgba(239, 93, 40, 0.8)",
      },
    ])}

    {ContentBoxData("QTD", [
      {
        title: "Target Amount",
        icon: "$",
        size: "24px",
        text: "600,000",
        color: "#1984B1",
      },
      {
        title: "Actual Amount",
        icon: "$",
        size: "32px",
        text: "298,180",
        color: "rgba(239, 93, 40, 0.8)",
      },
      {
        title: "Achievement Rate",
        size: "20px",
        text: "49.6%",
        color: "rgba(239, 93, 40, 0.8)",
      },
    ])}

    {ContentBoxData("YTD", [
      {
        title: "Target Amount",
        icon: "$",
        size: "24px",
        text: "2,400,000",
        color: "#1984B1",
      },
      {
        title: "Actual Amount",
        icon: "$",
        size: "32px",
        text: "863,043",
        color: "rgba(239, 93, 40, 0.8)",
      },
      {
        title: "Achievement Rate",
        size: "20px",
        text: "35.9%",
        color: "rgba(239, 93, 40, 0.8)",
      },
    ])}
  </ContentBoxList>
);

function App() {
  return (
    <span>
      <Page.CustomPageTitle
        title="Sales Overview"
        description="(all data accumulated to yyyy/mm/dd)"
      />

      <Embed.EmbedList>
        <SalesRank
          Title="Product Sales Ranking"
          alt="Analysis"
          CustomContent={test}
        />
        <AchievementRate
          Title="Achievement rate of business body"
          src="https://i.imgur.com/xrzeAH5.png"
        />
      </Embed.EmbedList>
      <CardList>
        <CardSpan
          title="Estimated transaction amount for this year"
          color="rgba(25, 132, 177, 1)"
          size="36px"
          text="653,821"
        />
        <CardSpan
          title="Transaction amount this year"
          color="rgba(239, 93, 40, 0.8)"
          size="36px"
          text="298,180"
        />
        <CardSpan
          title="Estimated gross profit for this year"
          color="rgba(239, 93, 40, 0.8)"
          size="36px"
          text="298,180"
        />
        <CardSpan
          title="Estimated gross profit margin for this year"
          color="rgba(239, 93, 40, 0.8)"
          size="36px"
          text="45.6%"
        />
      </CardList>

      <CardList>
        <Estimated
          Title="Look at the estimated transaction amount based on the stage of attack"
          src="https://i.imgur.com/QnaDI2j.png"
        />
        <Estimated
          Title="Look at the number of special cases by the stage of attack"
          src="https://i.imgur.com/V8WYNKP.png"
        />
      </CardList>
      <Page.FooterCompleted />
    </span>
  );
}

export default App;
