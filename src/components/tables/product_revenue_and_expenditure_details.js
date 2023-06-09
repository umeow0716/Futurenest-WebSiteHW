import React from "react";
import { Table, Table_container } from "./styled_table";
function Product_revenue_and_expenditure_details(props) {
  return (
    <Table_container>
      <Table>
        <thead>
          <tr>
            <td>Revenue category</td>
            <td>Income and expenditure items</td>
            <td>product</td>
            <td>Product number</td>
            <td>Amount of money</td>
            <td>Time of receipt and expenditure</td>
            <td>Remark</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>$779.58</td>
            <td>020418191671</td>
            <td>wall top cabinet frame</td>
            <td>ALVE</td>
            <td>$630.44</td><td>April 28, 2016</td>
            <td>
              Update: Team still unwilling to commit to a 12 month term. Update:
              Brendan asked about COVID relief, willing to pay for 6 months up
              front. Team decided not to move forward with an agreement.
              Following up to understand why. Offered an additional 5% off (16%
              contract/26% prepay) if they decide by EOW.
            </td>
          </tr>
          <tr>
            <td>$589.99</td>
            <td>020418064913</td>
            <td>storage bench</td>
            <td>ALVINE</td>
            <td>$328.85</td>
            <td>March 6, 2018</td>
            <td>Whitney had previously pitched a contract</td>
          </tr>
          <tr>
            <td>$293.01</td>
            <td>020418066702</td>
            <td>alkaline battery</td>
            <td>ANNO TUPPLUR</td>
            <td>$739.65</td>
            <td>December 2, 2018</td>
            <td>
              Update: Team still unwilling to commit to a 12 month term. Update:
              Brendan asked about COVID relief, willing to pay for 6 months up
              front. Team decided not to move forward with an agreement.
              Following up to understand why. Offered an additional 5% off (16%
              contract/26% prepay) if they decide by EOW.
            </td>
          </tr>
          <tr>
            <td>$475.22</td>
            <td>020418201097</td>
            <td>leathercare set</td>
            <td>2AINA</td>
            <td>$767.50</td>
            <td>March 23, 2013</td>
            <td>
              New proposal: 12 Professional Seats, 12-month Contract: 10%
              discount evaluating for UK team UPDATE - now at 16 users
            </td>
          </tr>
          <tr>
            <td>$490.51</td>
            <td>S020418066238</td>
            <td>wall basket</td>
            <td>ANDY</td>
            <td>$943.65</td>
            <td>August 2, 2013</td>
            <td>
              7 Business Seats, 12 mo. paid monthly, 14% discount Offered a 5%
              limited time discount increase if he'd sign this week. Wants to
              commit to 7 instead of 9 but plans to grow.
            </td>
          </tr>
          <tr>
            <td>$601.13</td>
            <td>020418145742</td>
            <td>5-piece cookware set</td>
            <td>ANORDNA MEST</td>
            <td>$105.55</td>
            <td>February 9, 2015</td>
            <td>
              Whitney: 7 business seats, 10% discount GROWTH POTENTIAL: 10 -15
              more sales team members by end of 2019
            </td>
          </tr>
        </tbody>
      </Table>
    </Table_container>
  );
}
export default Product_revenue_and_expenditure_details;
