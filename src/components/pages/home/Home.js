import React from "react";
import Chart from "../../charts/Chart";
import Featuredinfo from "../../featuredinfo/Featuredinfo";
import "./home.css";
import { userData } from "../../../dummyData";
import WidgetLarge from "../../widgetLarge/WidgetLarge";
import WidgetSmall from "../../widgetSmall/WidgetSmall";

function Home() {
  return (
    <div className="home">
      <Featuredinfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
}

export default Home;
