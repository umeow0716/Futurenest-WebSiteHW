import { useEffect, useState } from "react";
import styled from "styled-components";
import Embed from "../Embed"
import Page from "../Page";

import { ContentBoxData, ContentBoxList } from "./ProfitAndLoss";

import { Table } from 'antd';
import { Bar } from '@ant-design/plots';

const base = "http://ec2-35-77-78-80.ap-northeast-1.compute.amazonaws.com:8000";

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

const BarConfig = (data) => ({
  data,
  xField: 'amount',
  yField: 'name',
  seriesField: 'name',
  legend: {
    position: 'top-left',
  },
});

const BarConfigB = (data) => ({
  data,
  xField: 'cost_amount',
  yField: 'name',
  seriesField: 'name',
  legend: {
    position: 'top-left',
  },
});

const columns = [
  {
    title: "發票編號",
    dataIndex: "receive_no",
    key: "receive_no",
    sorter: (a, b) => new Date(a["time"]).getTime() - new Date(b["time"]).getTime()
  },
  {
    title: '對象',
    dataIndex: 'buyer',
    key: 'buyer',
    render: item => item["customer_name"]
  },
  {
    title: "產品/專案",
    dataIndex: "project",
    key: "project",
    render: item => item["project_name"]
  },
  {
    title: "預計付款日",
    dataIndex: "estimated_date",
    key: "estimated_date",
  },
  {
      title: "帳齡",
      dataIndex: "aging",
      key: "aging",
  },
  {
      title: "金額",
      dataIndex: "salesAmount",
      key: "salesAmount",
      render: item => `$ ${item}`
  }
];

function App() {
  const [ReceiveList, setReceiveList] = useState({});
  const [PayList, setPayList] = useState({});

  const [ReceiveCompare, setReceiveCompare] = useState([]);
  const [PayCompare, setPayCompare] = useState([]);

  const [Detail, setDetail] = useState([]);

  useEffect(() => {
    fetch(`${base}/api/accPayReceive/receiveList`)
      .then(d => d.json())
      .then(d => setReceiveList(d["data"]));
    
    fetch(`${base}/api/accPayReceive/payList`)
      .then(d => d.json())
      .then(d => setPayList(d["data"]))
    
    fetch(`${base}/api/accPayReceive/receiveCompare?startYear=2023&endYear=2023&startMonth=1&endMonth=12`)
      .then(d => d.json())
      .then(d => setReceiveCompare(d["data"]));
    
    fetch(`${base}/api/accPayReceive/payCompare?startYear=2023&endYear=2023&startMonth=1&endMonth=12`)
      .then(d => d.json())
      .then(d => setPayCompare(d["data"]));

    fetch(`${base}/api/accPayReceive/receiveDetail?startYear=2023&endYear=2023&startMonth=1&endmonth=5`)
      .then(d => d.json())
      .then(d => setDetail(d["data"]["projectIncome"]))
  }, []);

  return (
    <span>
    <Page.CustomPageTitle
        title="Accounts Receivable and Payable"
        description="(all data accumulated to yyyy/mm/dd)"
      />
    
    <Page.CustomPortTitle text="Overview" />

    <Embed.EmbedList>
      <EmbedBase Title="目前應收帳款">
        <ContentBoxList>
          <ContentBoxData data={[
            {
              size: "16px",
              text: "本月應收",
              color: "background: rgba(0, 0, 0, 1)",
            },
            {
              icon: "$",
              size: "24px",
              text: ReceiveList["currMonthReceive"],
              color: "rgba(25, 132, 177, 1)",
            }
          ]} />

          <ContentBoxData data={[
            {
              size: "16px",
              text: "下月應收",
              color: "rgba(0, 0, 0, 1)",
            },
            {
              icon: "$",
              size: "24px",
              text: ReceiveList["nextMonthReceive"],
              color: "rgba(25, 132, 177, 1)",
            }
          ]} />

          <ContentBoxData data={[
            {
              size: "16px",
              text: "本季應收",
              color: "rgba(0, 0, 0, 1)",
            },
            {
              icon: "$",
              size: "24px",
              text: ReceiveList["currSeasonReceive"],
              color: "rgba(25, 132, 177, 1)",
            }
          ]} />

          <ContentBoxData data={[
            {
              size: "16px",
              text: "今年應收",
              color: "rgba(0, 0, 0, 1)",
            },
            {
              icon: "$",
              size: "24px",
              text: ReceiveList["currYearReceive"],
              color: "rgba(25, 132, 177, 1)",
            }
          ]} />
        </ContentBoxList>
      </EmbedBase>

      <EmbedBase Title="目前應付帳款">
        <ContentBoxList>
          <ContentBoxData data={[
            {
              size: "16px",
              text: "本月應收",
              color: "background: rgba(0, 0, 0, 1)",
            },
            {
              icon: "$",
              size: "24px",
              text: PayList["currMonth"],
              color: "rgba(25, 132, 177, 1)",
            }
          ]} />

          <ContentBoxData data={[
            {
              size: "16px",
              text: "下月應收",
              color: "rgba(0, 0, 0, 1)",
            },
            {
              icon: "$",
              size: "24px",
              text: PayList["nextMonth"],
              color: "rgba(25, 132, 177, 1)",
            }
          ]} />

          <ContentBoxData data={[
            {
              size: "16px",
              text: "本季應收",
              color: "rgba(0, 0, 0, 1)",
            },
            {
              icon: "$",
              size: "24px",
              text: PayList["currSeason"],
              color: "rgba(25, 132, 177, 1)",
            }
          ]} />

          <ContentBoxData data={[
            {
              size: "16px",
              text: "今年應收",
              color: "rgba(0, 0, 0, 1)",
            },
            {
              icon: "$",
              size: "24px",
              text: PayList["currYear"],
              color: "rgba(25, 132, 177, 1)",
            }
          ]} />
        </ContentBoxList>
      </EmbedBase>

      <CardBase Title="應收項目比較">
        <BoxFill>
          <Bar {...BarConfig(ReceiveCompare)} />
        </BoxFill>
      </CardBase>

      <CardBase Title="應付項目比較">
        <BoxFill>
          <Bar {...BarConfigB(PayCompare)} />
        </BoxFill>
      </CardBase>

      <EmbedBase Title="應收項目詳細資訊">
        <BoxFill>
          <Table dataSource={Detail} columns={columns} />
        </BoxFill>
      </EmbedBase>
    </Embed.EmbedList>

    <Page.FooterCompleted />
    </span>
  )
}

export default App;