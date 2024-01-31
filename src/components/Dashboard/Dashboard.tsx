//@ts-nocheck
"use client";
import { items, siderStyle } from "@/constants/constants";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import CountriesTable from "./CountriesTable";
import Link from "next/link";

const { Header, Sider, Content } = Layout;

const Dashboard: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const siderWidth = collapsed ? 80 : 200; // Width of the Sider

  const headerStyle = {
    padding: 0,
    background: colorBgContainer,
    position: "fixed",
    zIndex: 1,
    left: siderWidth,
    width: `calc(100% - ${siderWidth}px)`,
  };

  const contentStyle = {
    marginTop: 64, // Height of the Header
    padding: 24,
    minHeight: "100vh",
    background: colorBgContainer,
    borderRadius: borderRadiusLG,
  };

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={siderStyle}
      >
        <div className="demo-logo-vertical" />
        <div className="flex justify-center items-center">
          <Image className="w-30 h-30 rounded-full my-3" src="https://www.crownintltravels.com/wp-content/uploads/2023/03/circle-flag-of-malaysia-free-png-980x980.webp" alt="Rounded avatar" width={50} height={50}></Image>
        </div>
        <div className="text-white">
            <Link href="/DashboardPage" className="w-ful">
              <h2 className="p-3 mx-1 mb-2 bg-[#fe720f] rounded-md"><span className="ml-4 mr-3"><PieChartOutlined size={25} /></span>{!collapsed && <span>Visas</span>}</h2>
            </Link>
            <Link href="/FileProcessingFormPage/FileProcessingTable" className="w-ful">
              <h2 className="p-3 mx-1 mb-2 rounded-md"><span className="ml-4 mr-3"><PieChartOutlined size={25} /></span>{!collapsed && <span>File Processing</span>}</h2>
            </Link>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items}
        />
      </Sider>
      <Layout style={{ marginLeft: siderWidth }}>
        <Header style={headerStyle}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content style={contentStyle}>
          <CountriesTable />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
