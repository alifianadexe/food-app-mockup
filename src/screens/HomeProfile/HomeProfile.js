import React from "react";
import { WingBlank, Flex, Card, WhiteSpace, Grid } from "antd-mobile";
import "./style.scss";

export default class HomeProfile extends React.Component {
  render() {
    const data = Array(
      {
        icon: "https://img.icons8.com/2266EE/search",
        text: "Search",
      },
      {
        icon: "https://img.icons8.com/2266EE/purchase-order",
        text: "Order List",
      },
      {
        icon: "https://img.icons8.com/2266EE/guest-male",
        text: "Account",
      },
      {
        icon: "https://img.icons8.com/2266EE/shopping-cart",
        text: "Account",
      }
    );

    return (
      <WingBlank size="lg">
        <WhiteSpace size="lg"></WhiteSpace>
        <WingBlank size="md">
          <p>
            Good Afternoon, <b>Fuck!</b>
          </p>
        </WingBlank>
        <Flex>
          <Flex.Item>
            <Card>
              <Card.Header
                title="Balance"
                extra={
                  <div className="text-price">
                    <span className="currency">Rp.</span>
                    <span className="price">15.000</span>
                  </div>
                }
              ></Card.Header>
              <Card.Body>
                <Grid
                  data={data}
                  hasLine={false}
                  onClick={(_el) => console.log(_el)}
                />
              </Card.Body>
            </Card>
          </Flex.Item>
        </Flex>
      </WingBlank>
    );
  }
}
