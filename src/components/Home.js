import React from "react";
import QueryTable from "./QueryTable";
// import homePageGif from "../../assets/homePageGif";

const Home = () => {
  return (
    <>
      {/* <div style={{ margin: "10%" }}> */}
      {/* <QueryTable /> */}

      {/* <img src="../../assets/homePageGif.gif" alt="React Image" /> */}
      {/* </div> */}

      <div
        style={{
          backgroundImage: `url('https://i0.wp.com/www.nextlevelanimation.com/wp-content/uploads/2022/07/web.gif?resize=400%2C400&ssl=1')`,
          // backgroundImage: `url('https://tenor.com/en-GB/view/phone-notification-animation-illustration-gif-17506197')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          marginTop: "5%",
          marginLeft: "25%",
          height: "70vh",
          width: "50%",
        }}
      ></div>
      <h1>Welcome to Oru Phones Dashboard</h1>
    </>
  );
};

export default Home;
