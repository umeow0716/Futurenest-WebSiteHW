import React from "react";
import { Table, Table_container } from "./styled_table";
function Petty_cash() {
  return (
    <Table_container>
      <Table>
        <thead>
          <tr class="table_header">
            <td>Gold inflow and outflow time</td>
            <td>category</td>
            <td>Amount of money</td>
            <td>Remark</td>
          </tr>
        </thead>
        <tbody class="table_body">
          <tr>
            <td>020418183331</td>
            <td>panel curtain</td>
            <td>$943.65</td>
            <td>Received</td>
          </tr>
          <tr>
            <td>020418066269</td>
            <td>panel curtain</td>
            <td>$854.08</td>
            <td>Rejected</td>
          </tr>
          <tr>
            <td>020418188176</td>
            <td>4-drawer chest</td>
            <td>$169.43</td>
            <td>Completed</td>
          </tr>
          <tr>
            <td>020418072307</td>
            <td>5-piece cookware set</td>
            <td>$446.61</td>
            <td>In Query</td>
          </tr>
          <tr>
            <td>020418145674</td>
            <td>foldable drying rack</td>
            <td>$275.43</td>
            <td>In Query</td>
          </tr>
          <tr>
            <td>020418066238</td>
            <td>storage unit</td>
            <td>$106.58</td>
            <td>Draft</td>
          </tr>
          <tr>
            <td>020418201417</td>
            <td>wall mount changing table</td>
            <td>$928.41</td>
            <td>In Query</td>
          </tr>
        </tbody>
      </Table>
    </Table_container>
  );
}
export default Petty_cash;
