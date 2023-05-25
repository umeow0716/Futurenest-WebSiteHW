import styled from "styled-components";

export const Table_container = styled.div`
  div {
    border-radius: 12px;
    width: 1058px;
    height: 494px;
    background-color: #cb1616;
  }
  h3 {
    font-weight: 400;
    font-size: 20px;
    line-height: 18px;
  }
  hr {
    color: #0000001a;
  }
`;

export const Table = styled.table`
  td {
    border-bottom: 1px solid #0000001a;
    padding: 16px;
    height: 112px;
    width: 52px;
  }

  thead td {
    font-size: 16px;
    font-weight: 700;
    background-color: rgba(0, 0, 0, 0.05);
  }

  tbody td {
    font-size: 14px;
    font-weight: 400;
    background-color: rgba(217, 217, 217, 0.1);
  }
`;
