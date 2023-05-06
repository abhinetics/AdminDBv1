import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  MessageOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SideMenu() {
  
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

useEffect(() => {
  const token = localStorage.getItem("token");
  console.log("here in sidebar");
  if( token && token !== "undefined") {
    setIsAuthenticated(true);
  }
}, []);
  const navigate = useNavigate();
  return (<>
    {isAuthenticated ? (
      <div className="SideMenu">
      <Menu
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
          //item.key
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={[
          {
            label: "Home Page",
            icon: <AppstoreOutlined />,
            key: "/dashboard",
          },
          {
            label: "Featured",
            key: "/featured",
            icon: <ShopOutlined />,
          },
          {
            label: "Social",
            key: "/social",
            icon: <MessageOutlined />,


          },
          {
            label: "Customers",
            key: "/customers",
            icon: <UserOutlined />,
          },
        ]}
      ></Menu>
    </div>
    ):null }
   </>
  );
}
export default SideMenu;
