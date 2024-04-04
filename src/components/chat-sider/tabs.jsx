import React from "react";
import { Tabs } from "antd";
import DropdownInTabs from "./dd-intabs";

const operations = <DropdownInTabs />;

const items = [
  {
    label: "All",
    key: "all",
    children: "Chats",
  },
  {
    label: "Not read",
    key: "notRead",
    children: "Chats",
  },
];

const ChatSiderTabs = () => {
  return (
    <>
      <Tabs tabBarExtraContent={operations} tabBarGutter={12}>
        {items.map((item) => (
          <Tabs.TabPane
            tab={
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                }}
              >
                {item.label}
              </span>
            }
            key={item.key}
            style={{ marginLeft: "10px" }}
          >
            {item.children}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </>
  );
};

export default ChatSiderTabs;
