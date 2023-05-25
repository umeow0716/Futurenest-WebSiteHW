import React from "react";
import { Table, Table_container } from "./styled_table";
function Cash_flow() {
  return (
    <Table_container>
      <h3>Cash Flow Details</h3>
      <hr />
      <Table>
        <thead>
          <tr>
            <td>account time</td>
            <td>Bank Code</td>
            <td>Bank account</td>
            <td>account type</td>
            <td>Payment amount</td>
            <td>Amount credited</td>
            <td>#Reason</td>
            <td>Account balance</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2023/10/24</td>
            <td>0000564854784</td>
            <td>0000476548588</td>
            <td>operate</td>
            <td>_</td>
            <td>+45416</td>
            <td>DA32 Notes payable due</td>
            <td>765959</td>
          </tr>
          <tr>
            <td>2023/11/27</td>
            <td>0000545649887</td>
            <td>0000547564757</td>
            <td>invest</td>
            <td>-35531</td>
            <td>_</td>
            <td>GT66 Accounts payable due</td>
            <td>5487</td>
          </tr>
          <tr>
            <td>2023/12/3</td>
            <td>0000543648765</td>
            <td>0000432643765</td>
            <td>financing</td>
            <td>_</td>
            <td>+44698</td>
            <td>SP89 Accounts Payable Due</td>
            <td>65876</td>
          </tr>
          <tr>
            <td>2023/12/13</td>
            <td>0000342648090</td>
            <td>0000543264643</td>
            <td>operate</td>
            <td>-68162</td>
            <td>_</td>
            <td>LH7 Notes payable due</td>
            <td>87659</td>
          </tr>
          <tr>
            <td>2023/12/23</td>
            <td>0000453758865</td>
            <td>0000987987642</td>
            <td>invest</td>
            <td>-98769</td>
            <td>_</td>
            <td>OK71 Accounts payable due</td>
            <td>754878</td>
          </tr>
          <tr>
            <td>2023/12/30</td>
            <td>0000987097697</td>
            <td>0000987008697</td>
            <td>financing</td>
            <td>_</td>
            <td>+54756</td>
            <td>RJ45 notes payable due</td>
            <td>548765</td>
          </tr>
        </tbody>
      </Table>
    </Table_container>
  );
}
export default Cash_flow;
