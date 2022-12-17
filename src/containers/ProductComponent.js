import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
const ProductComponent = () => {
  const products = useSelector((state) => state.allColumns.columns);

  return (
    <>
      <div>
        <table className="ui celled table">
          <thead>
            <tr>
              <th>Date</th>
              <th>App Name</th>
              <th>AD Request</th>
              <th>AD Response</th>
              <th>Impression</th>
              <th>Clicks</th>
              <th>Revenue</th>
              <th>Fill Rate</th>
              <th>CTR</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              const {
                date,
                app_id,
                requests,
                responses,
                impressions,
                clicks,
                revenue,
              } = product;
              return (
                <tr key={date+app_id}>
                  <td data-label="Date">
                    {moment(date).format("DD MMMM YYYY")}
                  </td>
                  <td data-label="Name">{app_id}</td>
                  <td data-label="Requests">{requests}</td>
                  <td data-label="Responses">{responses}</td>
                  <td data-label="Impression">{impressions}</td>
                  <td data-label="Clicks">{clicks}</td>
                  <td data-label="Revenue">{revenue}</td>
                  <td data-label="fill_rate">
                    {((requests / responses) * 100).toFixed(2)}%
                  </td>
                  <td data-label="CTR">
                    {((clicks / impressions) * 100).toFixed(2)}%
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductComponent;
