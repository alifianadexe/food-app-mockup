import { Tabs, WingBlank, NavBar, Badge } from "antd-mobile";
import React from "react";
import { Link } from "react-router-dom";
import { LeftOutlined, HeartTwoTone } from "@ant-design/icons";

import PopOver from "./PopOver";
import ProductList from "../screens/ProductList/ProductList";

import "./style.scss";

class TabProduct extends React.Component {
  render() {
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
}

class Navigations extends React.Component {
  render() {
    return (
      <div>
        <NavBar
          className="navbar-main"
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
            <PopOver />,
          ]}
        >
          <Link to="/">ADDoL</Link>
        </NavBar>
        <WingBlank size="md"></WingBlank>
      </div>
    );
  }
}

export { Navigations };
export { TabProduct };
