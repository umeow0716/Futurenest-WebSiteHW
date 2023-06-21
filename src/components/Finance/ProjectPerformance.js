import React, { Component, useEffect, useState } from "react";
import styled from "styled-components";
import Embed from "../Embed";
import Page from "../Page";

import ProjectExpenditure from "../tables/project_expenditure_details"

import { Table } from 'antd';
import { Bar } from '@ant-design/plots';

const base = "http://ec2-35-77-78-80.ap-northeast-1.compute.amazonaws.com:8000";

const DataParser = (arg) => {
  let data = arg["data"];
  let result = []

  let keys = Object.keys(data);
  let values = Object.values(data);

  for(let i = 0 ; i < values?.length ; i++) {
    let value = values[i]
    let value_keys = Object.keys(value);
    for(let key of value_keys) {
      result.push({
        name: key,
        time: keys?.[i],
        value: value?.[key]
      });
    }
  }
  return result;
}

const BarConfig = (data) => ({
  data,
  xField: 'value',
  yField: 'time',
  seriesField: 'time',
  legend: {
    position: 'top-left',
  },
});

const BoxFill = styled.div`
  width: 98%;
  margin: 1%;
`;

const columns = [
  {
    title: "專案名稱",
    dataIndex: "project",
    key: "project",
    render: item => item["project_name"]
  },
  {
    title: '受買人',
    dataIndex: 'buyer',
    key: 'buyer',
    render: item => item["customer_name"]
  },
  {
    title: "買方統編",
    dataIndex: "buyer",
    key: "buyer",
    render: item => item["compilation"]
  },
  {
    title: "發票開立日期",
    dataIndex: "issue_time",
    key: "issue_time",
  },
  {
      title: "財務作業進行狀況",
      dataIndex: "enter_status",
      key: "enter_status"
  },
  {
      title: "預計出款日",
      dataIndex: "estimated_date",
      key: "estimated_date"
  },
  {
      title: "實際出款日",
      dataIndex: "posting_date",
      key: "posting_date"
  },
  {
      title: "銷售額",
      dataIndex: "sales_amount",
      key: "sales_amount"
  },
  {
      title: "營業稅額",
      dataIndex: "sales_amount",
      key: "sales_amount",
      render: item => item / 20
  }
];

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

const FourthEmbed = Embed.CustomContainer([], "calc(71vw + 6vmin)")

function App() {
  const [MonthlyCosts, setMonthlyCosts] = useState([]);
  const [Detail, setDetail] = useState([]);

  useEffect(() => {
    fetch(`${base}/api/projectPerformance/monthlyProjectExpensesCosts?startYear=2023&endYear=2023&startMonth=1&endMonth=12&startDay=1&endDay=31`)
      .then(d => d.json())
      .then(d => setMonthlyCosts(DataParser(d)));
    
    fetch(`${base}/api/projectPerformance/projectIncomeDetail`)
      .then(d => d.json())
      .then(d => setDetail(d["data"]));
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
          alt="Analysis"
          CustomContent={test}
        />
        <MonthlyIncome
          Title="Monthly Project Income"
          src="https://i.imgur.com/Om0Wswv.png"
        />

        <MonthlyLoss Title="Monthly Project Fee Loss">
          <BoxFill>
            <Bar {...BarConfig(MonthlyCosts)} />
          </BoxFill>
        </MonthlyLoss>
      </Embed.EmbedList>

      <Page.CustomPortTitle text="Detail View" />
      
      <FourthEmbed Title="Project Revenue Details">
        <BoxFill>
          <Table dataSource={Detail} columns={columns} />
        </BoxFill>
      </FourthEmbed>

      <FourthEmbed Title="Project Expenditure Details">
        <ProjectExpenditure />
      </FourthEmbed>

      <Page.FooterCompleted />
    </span>
  );
}

export default App;