import React, { Component } from "react";
import { Row, Col, Card } from "antd";

export default class Content2 extends Component {
  render() {
    return (
      <div style={{ padding: "50px" }}>
        <Row gutter={80}>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
              commodi veniam magni repellat, qui beatae recusandae fugiat.
              Cupiditate, reiciendis, blanditiis dolore, voluptates beatae
              facilis assumenda voluptatibus vel eius aliquid quaerat.
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
              commodi veniam magni repellat, qui beatae recusandae fugiat.
              Cupiditate, reiciendis, blanditiis dolore, voluptates beatae
              facilis assumenda voluptatibus vel eius aliquid quaerat.
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
              commodi veniam magni repellat, qui beatae recusandae fugiat.
              Cupiditate, reiciendis, blanditiis dolore, voluptates beatae
              facilis assumenda voluptatibus vel eius aliquid quaerat.
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
