import { useEffect, useState } from "react";
import React from "react";
import QueryTable2 from "./QueryTable2";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

const Query5 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  function getQuery1Data() {
    axios({
      method: "GET",
      url: "/user/topTenCities",
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
            <QueryTable2
              data={data}
              title={
                "Top 10 cities which have the highest number of users and their average income"
              }
            />
          ) : (
            <CircularProgress />
            // <QueryTable2 data={[]} title={""} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Query5;
