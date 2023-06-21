import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Embed from "../Embed";
import Page from "../Page";

import { Table } from 'antd';
import { Line, Bar } from '@ant-design/plots';

const base = "http://ec2-35-77-78-80.ap-northeast-1.compute.amazonaws.com:8000";

const FlowParser = (arg) => {
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

const EmbedBase = Embed.CustomContainer(
  [],
  "73.6vw"
);

const CardBase = Embed.CustomContainer(
  [],
  "36.3vw"
);

const BoxFill = styled.div`
  width: 98%;
  margin: 1%;
`

const LineConfig = (data) => ({
  data,
  xField: 'time',
  yField: 'value',
  seriesField: 'name'
});

const BarConfig = (data) => ({
  data,
  xField: 'value',
  yField: 'time',
  seriesField: 'time',
  legend: {
    position: 'top-left',
  },
});

const columns = [
  {
    title: "帳目時間",
    dataIndex: "time",
    key: "time",
    sorter: (a, b) => new Date(a["time"]).getTime() - new Date(b["time"]).getTime()
  },
  {
    title: '銀行代碼',
    dataIndex: 'bank_code',
    key: 'bank_code',
  },
  {
    title: "銀行帳戶",
    dataIndex: "bank_acc",
    key: "bank_acc",
  },
  {
    title: "帳目類別",
    dataIndex: "category",
    key: "category",
  },
  {
      title: "出帳金額",
      dataIndex: "exit_amount",
      key: "exit_amount",
      render: item => `$ ${item}`
  },
  {
      title: "入帳金額",
      dataIndex: "entry_amount",
      key: "entry_amount",
      render: item => `$ ${item}`
  },
  {
      title: "帳目事由",
      dataIndex: "entry_and_exit",
      key: "entry_and_exit"
  },
  {
      title: "帳戶餘額",
      dataIndex: "balance",
      key: "balance",
      render: item => `$ ${item}`
  }
];

function App() {

  const [FlowTrend, setFlowTrend] = useState([]);
  const [LevelTrend, setLevelTrend] = useState([]);

  const [ProjectComparison, setProjectComparison] = useState([]);
  const [ItemComparison, setItemComparison] = useState([]);

  const [FutureInflow, setFutureInflow] = useState([]);
  const [FutureOutflow, setFutureOutflow] = useState([]);

  const [InflowDetail, setInflowDetail] = useState([]);

  useEffect(() => {
    fetch(`${base}/api/cashflow/trendAnalystic?startYear=2023&endYear=2023&startMonth=1&endMonth=12&startDay=1&endDay=31`)
      .then(d => d.json())
      .then(d => setFlowTrend(FlowParser(d)));

    fetch(`${base}/api/cashflow/levelTrend?startYear=2023&endYear=2023&startMonth=1&endMonth=12&startDay=1&endDay=31`)
      .then(d => d.json())
      .then(d => setLevelTrend(FlowParser(d)));
    
    fetch(`${base}/api/cashflow/inflowAnalystic?startYear=2023&endYear=2023&startMonth=1&endMonth=12&startDay=1&endDay=31`)
      .then(d => d.json())
      .then(d => setProjectComparison(FlowParser(d)));
    
    fetch(`${base}/api/cashflow/outflowAnalystic?startYear=2023&endYear=2023&startMonth=1&endMonth=12&startDay=1&endDay=31`)
      .then(d => d.json())
      .then(d => setItemComparison(FlowParser(d)));
    
    fetch(`${base}/api/cashflow/futureInflow?startYear=2023&endYear=2023&startMonth=1&endMonth=12&startDay=1&endDay=31`)
      .then(d => d.json())
      .then(d => setFutureInflow(FlowParser(d)));

    fetch(`${base}/api/cashflow/futureOutflow?startYear=2023&endYear=2023&startMonth=1&endMonth=12&startDay=1&endDay=31`)
      .then(d => d.json())
      .then(d => setFutureOutflow(FlowParser(d)));
    
    fetch(`${base}/api/cashflow/inflowDetail`)
      .then(d => d.json())
      .then(d => setInflowDetail(d["data"]));
  }, []);

  return (
    <span>
      <Page.CustomPageTitle
        title="Cash Flow Analysis"
        description="(all data accumulated to yyyy/mm/dd)"
      />

      <Page.CustomPortTitle text="Overview" />
      <br />
      <Page.CustomPortTitle text="Traffic Analysis" />

      <Embed.EmbedList>
        <EmbedBase Title="Monthly Cash Flow Trend">
          <BoxFill>
            <Line {...LineConfig(FlowTrend)} />
          </BoxFill>
        </EmbedBase>

        <EmbedBase Title="Net Cash And Cash Level Trends">
          <BoxFill>
            <Line {...LineConfig(LevelTrend)} />
          </BoxFill>
        </EmbedBase>

        <CardBase Title="Cash Inflow Project Comparison">
          <BoxFill>
            <Bar {...BarConfig(ProjectComparison)} />
          </BoxFill>
        </CardBase>
        
        <CardBase Title="Cash Outflow Item Comparison">
          <BoxFill>
            <Bar {...BarConfig(ItemComparison)} />
          </BoxFill>
        </CardBase>

        <CardBase Title="Future Projected Cash Inflows">
          <BoxFill>
            <Line {...LineConfig(FutureInflow)} />
          </BoxFill>
        </CardBase>

        <CardBase Title="Future Projected Cash Outflows">
          <BoxFill>
            <Line {...LineConfig(FutureOutflow)} />
          </BoxFill>
        </CardBase>
      </Embed.EmbedList>

      <Page.CustomPortTitle text="Detail" />

      <EmbedBase Title="Cash Flow Details">
        <BoxFill>
          <Table dataSource={InflowDetail} columns={columns} />
        </BoxFill>
      </EmbedBase>

      <Page.FooterCompleted />
    </span>
  );
}

export default App;