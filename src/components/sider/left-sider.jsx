import React, { useState } from "react";
import { Avatar, Layout, Dropdown, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { PiChatCircleTextThin, PiAddressBookThin } from "react-icons/pi";
import { LuListTodo } from "react-icons/lu";
import { CiCloudOn, CiSettings } from "react-icons/ci";
import { PiBagSimpleBold } from "react-icons/pi";
import InfoAccountModal from "../modal/info_account";

import { useAuth } from "../../provider/authContext";

const { Sider } = Layout;

const LeftSider = () => {
  let { isAuthenticated, logout, user } = useAuth();
  const [isAvatarMenuVisible, setIsAvatarMenuVisible] = useState(false);
  const [isSettingMenuVisible, setIsSettingMenuVisible] = useState(false);
  const [visibleDrawer, setVisibleDrawer] = useState(false);
  const [imageUrl, setImageUrl] = useState(null); // Khai báo và khởi tạo imageUrl

  const handleMenuClick = (e) => {
    switch (e.key) {
      case "4":
      case "10":
        logout();
        break;
      case "2":
      case "5":
        setVisibleDrawer(true);
        break;
      default:
        break;
    }
  };

  user = typeof user == Object ? user : JSON.parse(user);

  const avatarMenu = (
    <Menu onClick={handleMenuClick}>
      {[
        {
          label: "Nâng cấp tài khoản",
          key: "1",
        },
        {
          label: "Hồ sơ của bạn",
          key: "2",
        },
        {
          label: "Cài đặt",
          key: "3",
        },
        {
          type: "divider",
        },
        {
          label: "Đăng xuất",
          key: "4",
        },
      ].map((item) => (
        <Menu.Item key={item.key}>{item.label}</Menu.Item>
      ))}
    </Menu>
  );

  const settingMenu = (
    <Menu onClick={handleMenuClick}>
      {[
        {
          label: "Thông tin tài khoản",
          key: "5",
        },
        {
          label: "Cài đặt",
          key: "6",
        },
        {
          type: "divider",
        },
        {
          label: "Dữ liệu",
          key: "7",
        },
        {
          label: "Công cụ",
          key: "8",
        },
        {
          label: "Ngôn ngữ",
          key: "9",
        },
        {
          type: "divider",
        },
        {
          label: "Đăng xuất",
          key: "10",
        },
      ].map((item) => (
        <Menu.Item key={item.key}>{item.label}</Menu.Item>
      ))}
    </Menu>
  );

  const iconStyle = {
    textAlign: "center",
    height: "4rem",
    fontSize: "25px",
    border: "white",
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (!beforeUpload(file)) {
        return;
      }
      getBase64(file, (url) => {
        setImageUrl(url);
      });
    }
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  return (
    // axiosInstance.get("/auth/updateProfile", updateProfile).then((response) => {});
    <>
      <Sider
        width={"70"}
        style={{
          color: "white",
          backgroundColor: "#0091ff",
        }}
      >
        <div style={{ height: "65%" }}>
          <div style={{ textAlign: "center", margin: "30px 0" }}>
            <Dropdown
              trigger={["click"]}
              overlay={avatarMenu}
              placement="bottomLeft"
              visible={isAvatarMenuVisible}
              onVisibleChange={setIsAvatarMenuVisible}
            >
              <Avatar
                size={55}
                icon={
                  user && user.photoUrl ? (
                    <Avatar src={user.photoUrl} alt="avatar" />
                  ) : (
                    <UserOutlined />
                  )
                }
                onClick={() => setIsAvatarMenuVisible(!isAvatarMenuVisible)}
              />
            </Dropdown>
          </div>
          <div className="leftSiderIcon" style={iconStyle}>
            <PiChatCircleTextThin style={{ marginTop: "30%" }} />
          </div>
          <div className="leftSiderIcon" style={iconStyle}>
            <PiAddressBookThin style={{ marginTop: "30%" }} />
          </div>
          <div className="leftSiderIcon" style={iconStyle}>
            <LuListTodo style={{ marginTop: "30%" }} />
          </div>
        </div>

        <div className="leftSiderIcon" style={iconStyle}>
          <CiCloudOn style={{ marginTop: "30%" }} />
        </div>
        <div className="leftSiderIcon" style={iconStyle}>
          <PiBagSimpleBold style={{ marginTop: "30%" }} />
        </div>
        <div className="leftSiderIcon" style={iconStyle}>
          <Dropdown
            trigger={["click"]}
            overlay={settingMenu}
            placement="bottomLeft"
            visible={isSettingMenuVisible}
            onVisibleChange={setIsSettingMenuVisible}
          >
            <CiSettings
              style={{ marginTop: "30%" }}
              onClick={() => setIsSettingMenuVisible(!isSettingMenuVisible)}
            />
          </Dropdown>
        </div>
      </Sider>

      <InfoAccountModal
        visible={visibleDrawer}
        onCancel={() => setVisibleDrawer(false)}
      />
    </>
  );
};

export default LeftSider;
