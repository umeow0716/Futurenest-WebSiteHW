import React, { Component, useEffect, useState } from "react";
import styled from "styled-components";
import Embed from "../Embed";
import Page from "../Page";

import { Column } from '@ant-design/plots';

const base = "http://ec2-35-77-78-80.ap-northeast-1.compute.amazonaws.com:8000";

const FormatNumber = (num) => new Intl.NumberFormat().format(num);
const FormatPer = (num) => new Intl.NumberFormat("en-US", {style: "percent" }).format(num);

const IncomeParser = (arg) => {
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
        year: keys[i],
        value: value[key]
      });
    }
  }

  return result;
}

const EmbedBase = Embed.CustomContainer(
  [],
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

export const ContentBoxList = styled.span`
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

const config = (data) => ({
  data,
  isGroup: true,
  xField: 'year',
  yField: 'value',
  seriesField: 'name',
  // 分组柱状图 组内柱子间的间距 (像素级别)
  dodgePadding: 6,
  label: {
    // 可手动配置 label 数据标签位置
    position: 'middle',
    // 'top', 'middle', 'bottom'
    // 可配置附加的布局方法
    layout: [
      // 柱形图数据标签位置自动调整
      {
        type: 'interval-adjust-position',
      }, // 数据标签防遮挡
      {
        type: 'interval-hide-overlap',
      }, // 数据标签文颜色自动调整
      {
        type: 'adjust-color',
      },
    ],
  },
});

function App() {
  const [accumulatedEarnings, setAccumulatedEarnings] = useState({});
  const [MonthlyIncomeData, setMonthlyIncomeData] = useState([]);
  const [MonthlyLossData, setMonthlyLossData] = useState([]);

  useEffect(() => {
    fetch(`${base}/api/comprehensiveIncomeAnalysis/accumulatedEarnings`)
      .then(d => d.json())
      .then(d => setAccumulatedEarnings(d));

    fetch(`${base}/api/comprehensiveIncomeAnalysis/monthlyIncome`)
      .then(d => d.json())
      .then(d => setMonthlyIncomeData(IncomeParser(d)));

    fetch(`${base}/api/comprehensiveIncomeAnalysis/monthlyExpensesCosts`)
      .then(d => d.json())
      .then(d => setMonthlyLossData(IncomeParser(d)));
  }, []);

  const Fill = styled.div`
    width: 98%;
    margin: 1%;
  `

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
                text: FormatNumber(accumulatedEarnings.netOperatingRevenue),
                color: "rgba(42, 125, 131, 1)",
              },
              {
                size: "20px",
                text: FormatPer(accumulatedEarnings.netOperatingRevenuePer),
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
                text: FormatNumber(accumulatedEarnings.totalOperatingCost),
                color: "rgba(239, 93, 40, 1)",
              },
              {
                size: "20px",
                text: FormatPer(accumulatedEarnings.operatingCostPer),
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
                text: FormatNumber(accumulatedEarnings.operatingProfit),
                color: "rgba(42, 125, 131, 0.8)",
              },
              {
                size: "20px",
                text: FormatPer(accumulatedEarnings.operatingProfitPer),
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
                text: FormatNumber(accumulatedEarnings.operatingExpense),
                color: "rgba(239, 93, 40, 0.8)",
              },
              {
                size: "20px",
                text: FormatPer(accumulatedEarnings.operatingExpensePer),
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
                text: FormatNumber(accumulatedEarnings.operatingNetProfit),
                color: "rgba(25, 132, 177, 1)",
              },
              {
                size: "20px",
                text: FormatPer(accumulatedEarnings.operatingNetProfitPer),
                color: "rgba(25, 132, 177, 1)",
              },
            ]} />
          </ContentBoxList>
        </SalesRank>

        <EmbedBase Title="Monthly Project Income">
          <Fill>
            <Column {...config(MonthlyIncomeData)} />
          </Fill>
        </EmbedBase>

        <EmbedBase Title="Monthly Project Fee Loss">
          <Fill>
            <Column {...config(MonthlyLossData)} />
          </Fill>
        </EmbedBase>
      </Embed.EmbedList>

      <Page.FooterCompleted />
    </span>
  );
}

export default App;