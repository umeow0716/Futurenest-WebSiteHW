import React from "react";
import { Table, TableContainer } from "./styled_table";
function Project_expenditure() {
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <td>project name</td>
            <td>Project category</td>
            <td>expenditure item</td>
            <td>payment object</td>
            <td>Amount of money</td>
            <td>Financial work progress</td>
            <td>Estimated payment date</td>
            <td>Actual payment date</td>
            <td>Remark</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tech Talent Financing Program Design Workshops</td>
            <td>Wade Warren</td>
            <td>December 29, 2012</td>
            <td>August 7, 2017</td>
            <td>$767.50</td>
            <td>credited</td>
            <td>4517 Washington Ave. Manchester, Kentucky 39495</td>
            <td>May 9, 2014</td>
            <td>Completed</td>
          </tr>
          <tr>
            <td>Data Catalog</td>
            <td>Kristin Watson</td>
            <td>August 2, 2013</td>
            <td>October 30, 2017</td>
            <td>$106.58</td>
            <td>Already paid</td>
            <td>8502 Preston Rd. Inglewood, Maine 98380</td>
            <td>May 31, 2015</td>
            <td>In Query</td>
          </tr>
          <tr>
            <td>Shelter Enhancements</td>
            <td>Jane Cooper</td>
            <td>December 19, 2013</td>
            <td>October 31, 2017</td>
            <td>$406.27</td>
            <td>Already paid</td>
            <td>2118 Thornridge Cir. Syracuse, Connecticut 35624</td>
            <td>September 9, 2013</td>
            <td>Received</td>
          </tr>
          <tr>
            <td>nyc.gov/COVID</td>
            <td>Marvin McKinney</td>
            <td>November 16, 2014</td>
            <td>May 6, 2012</td>
            <td>$601.13</td>
            <td>credited</td>
            <td>3517 W. Gray St. Utica, Pennsylvania 57867</td>
            <td>September 24, 2017</td>
            <td>Rejected</td>
          </tr>
          <tr>
            <td>Social Service Innovation Center</td>
            <td>Cody Fisher</td>
            <td>February 9, 2015</td>
            <td>March 6, 2018</td>
            <td>$576.28</td>
            <td>Already paid</td>
            <td>2972 Westheimer Rd. Santa Ana, Illinois 85486</td>
            <td>October 31, 2017</td>
            <td>Rejected</td>
          </tr>
          <tr>
            <td>PACT public housing conversions</td>
            <td>Jerome Bell</td>
            <td>July 14, 2015</td>
            <td>February 29, 2012</td>
            <td>$275.43</td>
            <td>credited</td>
            <td>6391 Elgin St. Celina, Delaware 10299</td>
            <td>November 28, 2015</td>
            <td>Received</td>
          </tr>
        </tbody>
      </Table>
    </TableContainer>
  );
}
export default Project_expenditure;
