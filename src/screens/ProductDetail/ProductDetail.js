import { Card, Flex, WhiteSpace, WingBlank } from "antd-mobile";
import React from "react";
import "./style.css";

export default function ProductList() {
  return (
    <WingBlank size="lg">
      <WhiteSpace size="lg"></WhiteSpace>
      <Flex>
        <Flex.Item>
          <Card>
            <Card.Header
              title="This is title"
              thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
            />
            <Card.Body>
              <div>This is content of `Card`</div>
            </Card.Body>
            <Card.Footer content="footer content" />
          </Card>
        </Flex.Item>
        <Flex.Item>
          <Card>
            <Card.Header
              title="This is title"
              thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
            />
            <Card.Body>
              <div>This is content of `Card`</div>
            </Card.Body>
            <Card.Footer content="footer content" />
          </Card>
        </Flex.Item>
      </Flex>
    </WingBlank>
  );
}
