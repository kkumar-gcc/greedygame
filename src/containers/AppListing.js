import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setColumns } from "../redux/actions/tableActions";
import ProductComponent from "./ProductComponent";

const AppListing = () => {
  const products = useSelector((state) => state.allColumns.columns);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("http://go-dev.greedygame.com/v3/dummy/report?startDate=2021-05-01&endDate=2021-05-03")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setColumns(response.data.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div>
        <h2>Analytics</h2>
      </div>
      <div className="ui ">
        <ProductComponent />
      </div>
    </>
  );
};

export default AppListing;
