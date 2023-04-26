import { useEffect, useState } from "react";
import React from "react";
import QueryTable from "./QueryTable";
import axios from "axios";
import { CircularProgress } from "@mui/material";

const Query1 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  function getQuery1Data() {
    axios({
      method: "GET",
      url: "/user/lowerIncomeAndLuxryCar",
    })
      .then((response) => {
        const res = response.data;
        setData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }

  useEffect(() => {
    getQuery1Data();
  }, []);

  return (
    <div>
      <br />
      <div>
        <div style={{ margin: "10% 12% 10% 12%" }}>
          {data.length > 0 ? (
            <QueryTable
              data={data}
              title={
                "Users which have income lower than $5 USD and have a car of brand 'BMW' or 'Mercedes'"
              }
            />
          ) : (
            <CircularProgress />
          )}
        </div>
      </div>
    </div>
  );
};

export default Query1;
