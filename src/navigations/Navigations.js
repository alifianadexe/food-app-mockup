import {
  LeftOutlined,
  EllipsisOutlined,
  HeartTwoTone,
} from "@ant-design/icons";
import { Tabs, WingBlank, NavBar, Badge } from "antd-mobile";
import React from "react";
import "./style.css";
import ProductList from "../screens/ProductList/ProductList";

class Navigations extends React.Component {
  tabsList() {
    const tabs = [
      { title: <Badge dot>Recommend</Badge> },
      { title: <Badge>Dinner</Badge> },
      { title: <Badge>Drink</Badge> },
    ];

    return (
      <Tabs
        className="tabs-title"
        tabs={tabs}
        initialPage={1}
        onChange={(tab, index) => {
          console.log("onChange", index, tab);
        }}
        onTabClick={(tab, index) => {
          console.log("onTabClick", index, tab);
        }}
      >
        <div className="tabs-content">
          <ProductList />
        </div>
        <div className="tabs-content">
          <ProductList />
        </div>
        <div className="tabs-content">
          <ProductList />
        </div>
      </Tabs>
    );
  }

  render() {
    return (
      <div>
        <NavBar
          mode="dark"
          leftContent={<LeftOutlined />}
          rightContent={[
            <HeartTwoTone
              twoToneColor="#eb2f96"
              key="0"
              style={{
                marginRight: "14px",
                fontSize: "20px",
              }}
            />,
            <EllipsisOutlined key="1" style={{ fontSize: "20px" }} />,
          ]}
        >
          ADDoL
        </NavBar>
        <WingBlank size="md"></WingBlank>
        {this.tabsList()}
      </div>
    );
  }
}

export default Navigations;
