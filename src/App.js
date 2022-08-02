import React from 'react';
import { Layout, Col, Row, Typography, Button, Collapse } from 'antd';
import useUsers from './hooks/useUsers';
import 'antd/dist/antd.css';
import './style.css';

const { Header, Footer, Content } = Layout;
const { Title } = Typography;

export default function App() {
  // add useReducer in hook for handle distinct behaviours
  const [loading, users, loadUsers, setUsers] = useUsers();

  const onClickGetData = () => loadUsers();
  const onClickReset = () => setUsers([]);

  return (
    <Layout>
      <Header>
        <Title theme="dark" style={{ color: 'white' }}>
          Ant Test
        </Title>
      </Header>
      <Content>
        <Row>
          <Col span={24}>
            <Button type="primary" onClick={onClickGetData}>
              Get data
            </Button>
            <Button onClick={onClickReset}>Reset</Button>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            {!users.length && !loading && 'Make a get!'}
            {loading && 'Loading...'}
            <Collapse defaultActiveKey={['1']} accordion>
              {users.map((user) => (
                <Collapse.Panel
                  header={`${user.name.first} ${user.name.last}`}
                  key={user.email}
                >
                  <p>{user.email}</p>
                </Collapse.Panel>
              ))}
            </Collapse>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}
