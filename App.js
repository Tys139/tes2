import React from 'react';
import { Typography } from 'antd';
import './App.css';
import { Layout, Menu, Breadcrumb, Button,Select ,Space} from 'antd';
import 'antd/dist/antd.css';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
  SettingOutlined,
  UserOutlined,
  FileOutlined,
  TeamOutlined,
  SearchOutlined ,
  
} from '@ant-design/icons';

import { MenuItem } from 'rc-menu';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Title } = Typography;
const { Option } = Select;


const children = [];


for (let i = 0; i < 1000; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

class App extends React.Component {
  state = {
    collapsed: false,

  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    return (
      
      <Layout >
        <Header className="site-layout-background" style={{ padding: 0 }} />

        <Layout style={{ minHeight: '95vh' }}>
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1">
                <PieChartOutlined />
                <span>Stats </span>
              </Menu.Item>
              <Menu.Item key="2">
                <DesktopOutlined />
                <span>Reports</span>
              </Menu.Item>
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <UserOutlined />
                    <span>Accounts</span>
                  </span>
                }
              >
                <Menu.Item key="3">ABC</Menu.Item>
                <Menu.Item key="4">YZE</Menu.Item>
                <Menu.Item key="5">TY</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <TeamOutlined />
                    <span>Groups</span>
                  </span>
                }
              >
                <Menu.Item key="6">ttt</Menu.Item>
                <Menu.Item key="8">ca</Menu.Item>
              </SubMenu>
              <Menu.Item key="9" >
                <FileOutlined />
                <span>Download</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
      
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'left' }}>
        <div>
       
    <Title style={{ padding: 24, textAlign: 'left' }}> Items</Title>
    <Select size="medium"
      mode="multiple"
      style={{ width: "50%" }}
      placeholder="Please select"
      defaultValue={["a10", "c12"]}
      onChange={handleChange}
    >
      {children}
    </Select>   
    <Button type="primary" icon={<SearchOutlined /> }   >
      Search
    </Button>
  </div>,
          <br />
          <div>
          
  </div>,
          <br />
          {children}
          <br />
          ...
          <br />
          ...
          <br />
          long
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          gfdfa
          <br />
          content
        </div>
       
      </Content>

            <Footer style={{ textAlign: 'center', background: 'dbe0eb' }}>Created by tathagatyash @</Footer>
          </Layout>
        </Layout>

      </Layout>

      

    );
  }
}

export default App;
