import React from "react";
import { Table, TableContainer } from "./styled_table";
function Accounts_recievable() {
  return (
    <TableContainer>
      <h3>Payable Item Details</h3>
      <hr />
      <Table>
        <thead>
          <tr>
            <td>invoice number</td>
            <td>object</td>
            <td>Product/Project</td>
            <td>Estimated payment date</td>
            <td>aging</td>
            <td>Amount of money</td>
            <td>Remark</td>
            <td>principal</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0000564854784</td>
            <td>Acme Corporation</td>
            <td>0000476548588</td>
            <td>2023/10/24</td>
            <td>&lt;30days</td>
            <td>$45,416</td>
            <td>DA32 Notes payable due</td>
            <td>Dianne Russell</td>
          </tr>
          <tr>
            <td>0000545649887</td>
            <td>Soylent Corp</td>
            <td>0000547564757</td>
            <td>2023/11/27</td>
            <td>30-60 days</td>
            <td>$35,531</td>
            <td>GT66 Accounts payable due</td>
            <td>Esther Howard</td>
          </tr>
          <tr>
            <td>0000543648765</td>
            <td>Rundofase</td>
            <td>0000432643765</td>
            <td>2023/12/3</td>
            <td>60-90 days</td>
            <td>$44,698</td>
            <td>SP89 Accounts Payable Due</td>
            <td>Cameron Williamson</td>
          </tr>
          <tr>
            <td>0000342648090</td>
            <td>Hooli</td>
            <td>00000543264643</td>
            <td>2023/12/13</td>
            <td>30-60 days</td>
            <td>$68,162</td>
            <td>LH7 Notes payable due</td>
            <td>Marvin McKinney</td>
          </tr>
          <tr>
            <td>0000453758865</td>
            <td>Initech</td>
            <td>0000987987642</td>
            <td>2023/12/23</td>
            <td>90-120 days</td>
            <td>$98,769</td>
            <td>OK71 Accounts payable due</td>
            <td>Brooklyn Simmons</td>
          </tr>
          <tr>
            <td>0000987097697</td>
            <td>Massive Dynamic</td>
            <td>0000987008697</td>
            <td>2023/12/30</td>
            <td>&gt;120 days</td>
            <td>$54,756</td>
            <td>RJ45 notes payable due</td>
            <td>Kristin Watson</td>
          </tr>
        </tbody>
      </Table>
    </TableContainer>
  );
}
export default Accounts_recievable;
