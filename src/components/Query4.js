import { useEffect, useState } from "react";
import React from "react";
import QueryTable from "./QueryTable";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

const Query4 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  function getQuery1Data() {
    axios({
      method: "GET",
      url: "/user/luxuryCarAndNoDigitInEmail",
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
                "Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit."
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

export default Query4;
