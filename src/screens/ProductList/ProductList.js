import { Card, Flex, WhiteSpace, WingBlank } from "antd-mobile";
import React from "react";
import "./style.css";

class ContentProduct extends React.Component {
  render() {
    return (
      <Flex wrap="wrap">
        <Card className="card-content">
          <Card.Header
            thumbStyle={{ width: "100%" }}
            thumb={this.props.image}
          />
          <Card.Body className="card-body">
            <span className="title-content">{this.props.title}</span>
          </Card.Body>
          <Card.Footer className="card-footer" content={this.props.price} />
        </Card>
      </Flex>
    );
  }
}

class ProductList extends React.Component {
  productList() {
    let productList = [];
    for (let i = 0; i < 10; i++) {
      productList.push(
        <ContentProduct
          key={i}
          title="Pizza"
          price="Rp. 15,000"
          image="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/11/6/0/KC0403_Cauliflower-Pizza-Crust_s4x3.jpg.rend.hgtvcom.826.620.suffix/1562006004844.jpeg"
        />
      );
    }
    return productList;
  }

  render() {
    return (
      <WingBlank className="product-container" size="lg">
        <WhiteSpace size="lg"></WhiteSpace>
        <h4>Recommended For U</h4>
        <WhiteSpace size="md"></WhiteSpace>
        {this.productList()}
        <WhiteSpace size="md"></WhiteSpace>
      </WingBlank>
    );
  }
}

export default ProductList;
