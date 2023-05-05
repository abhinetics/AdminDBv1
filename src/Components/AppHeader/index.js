import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Badge, Drawer, Image, List, Space, Typography } from "antd";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";



function AppHeader() {

  return (
    <div className="AppHeader">
      <Image
        width={40}
        src="https://i.pinimg.com/564x/d0/53/f2/d053f2394d420d8d3712046f4e8f80cc.jpg"
      ></Image>
<Typography.Title>Admin Panel 🔑</Typography.Title>

      <Space>
        <Badge >
          {/* <MailOutlined
            style={{ fontSize: 24 }}
            onClick={() => {
              setCommentsOpen(true);
            }}
          /> */}
        </Badge>
        {/* <Badge count={orders.length}>
          <BellFilled
            style={{ fontSize: 24 }}
            onClick={() => {
              setNotificationsOpen(true);
            }}
          />
        </Badge> */}
      </Space>
     
    </div>
  );
}
export default AppHeader;
