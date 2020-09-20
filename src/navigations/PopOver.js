import React from "react";
import { Popover } from "antd-mobile";
import {
  EllipsisOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

export default class PopOver extends React.Component {
  state = {
    visible: true,
    selected: "",
  };

  onSelect = (opt) => {
    // console.log(opt.props.value);
    this.setState({
      visible: false,
      selected: opt.props.value,
    });
  };

  handleVisibleChange = (visible) => {
    this.setState({
      visible,
    });
  };

  render() {
    return (
      <Popover
        mask
        overlayClassName="fortest"
        overlayStyle={{ color: "currentColor" }}
        visible={this.state.visible}
        overlay={[
          <Popover.Item
            key="4"
            value="scan"
            className="popover-navbar"
            icon={<QuestionCircleOutlined />}
            data-seed="logId"
          >
            Help
          </Popover.Item>,
          <Popover.Item
            key="5"
            value="special"
            className="popover-navbar"
            icon={<SettingOutlined />}
            style={{ whiteSpace: "nowrap" }}
          >
            Setting
          </Popover.Item>,
          <Popover.Item
            key="6"
            className="popover-navbar"
            value="button ct"
            icon={<LogoutOutlined />}
          >
            <span style={{ marginRight: 5 }}>Logout</span>
          </Popover.Item>,
        ]}
        align={{
          overflow: { adjustY: 0, adjustX: 0 },
          offset: [-10, 0],
        }}
        onVisibleChange={this.handleVisibleChange}
        onSelect={this.onSelect}
      >
        <div
          style={{
            height: "100%",
            padding: "0 15px",
            marginRight: "-15px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <EllipsisOutlined />
        </div>
      </Popover>
    );
  }
}
