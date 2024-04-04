import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import LeftSider from "../sider/left-sider";
import ChatSider from "../chat-sider/chat-sider";

const { Content } = Layout;

function MainLayout() {
  const layoutStyle = {
    minHeight: "100vh",
  };
  return (
    <Layout style={layoutStyle}>
      <LeftSider />
      <ChatSider />
      <Content>Content</Content>
    </Layout>
  );
}

export default MainLayout;
