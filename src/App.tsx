import React, { useState } from "react";
import { Button, Nav, Dialog, Form, Input, NumberPicker, Radio, Rating, Checkbox, Select, DatePicker2 } from '@alifd/next';
import './App.css';
import TableCom from "./components/TableCom/index.tsx";

const { Item } = Nav;
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;

const App = () => {
  const [selectedNav, setSelectedNav] = useState('home');

  const [dialogShow, setDialogShow] = useState(false);

  const [newPersonInfo, setNewPersonInfo] = useState({})

  const header = <span className="fusion">FUSION</span>

  const content = {
    'home': (
      // 表格
      <div className='tableContainer'>
        <div className='buttonContainer'>
          <Button type="primary" style={{ marginRight: '80px', marginBottom: 16 }} onClick={() => { setDialogShow(true) }}>新建</Button>
        </div>
        <div>
          <TableCom />
        </div>
      </div>
    ),
    'info': (
      <div>info</div>
    ),
    'Other': (
      <div>Other</div>
    )
  };

  const FormComponent = (
    <Form>
      <FormItem label="姓名:">
        <Input value={newPersonInfo.name} onChange={(value) => { setNewPersonInfo((_newPersonInfo) => { return { ..._newPersonInfo, name: value} }) }} />
      </FormItem>
      <FormItem label="年龄:">
        <NumberPicker step={1} min={18} max={60} value={newPersonInfo.age} onChange={(value) => { setNewPersonInfo((_newPersonInfo) => { return { ..._newPersonInfo, age: value} }) }} />
      </FormItem>
      <FormItem label="婚姻状况:">
        <RadioGroup value={newPersonInfo.married} onChange={(value) => { setNewPersonInfo((_newPersonInfo) => { return { ..._newPersonInfo, married: value === 'married'} }) }}>
          <Radio id="married" value="married">
            已婚
          </Radio>
          <Radio id="single" value="single">
            未婚
          </Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="代码能力:">
        <Rating
          value={newPersonInfo.codeAbility}
          onChange={val => setNewPersonInfo((_newPersonInfo) => { return { ..._newPersonInfo, codeAbility: val} })}
        />
      </FormItem>
      <FormItem label="编程语言:">
        <Checkbox.Group value={newPersonInfo.codeLanguage} onChange={(value) => setNewPersonInfo((_newPersonInfo) => { return { ..._newPersonInfo, codeLanguage: value} })}>
          <Checkbox id="c" value="c">
            c
          </Checkbox>
          <Checkbox id="go" value="go">
            go
          </Checkbox>
          <Checkbox id="java" value="java">
            java
          </Checkbox>
          <Checkbox id="typescript" value="typescript">
            typescript
          </Checkbox>
        </Checkbox.Group>
      </FormItem>
      <FormItem label="学历:">
        <Select hasClear value={newPersonInfo.education} onChange={(value) => { setNewPersonInfo((_newPersonInfo) => { return { ..._newPersonInfo, education: value} }) }}>
          <Option value="daxue">大学</Option>
          <Option value="shuoshi">硕士</Option>
          <Option value="boshi">博士</Option>
          <Option value="dazhuan">大专</Option>
        </Select>
      </FormItem>
      <FormItem label="毕业时间:">
        <DatePicker2 value={newPersonInfo.graduationTime} onChange={(value) => { setNewPersonInfo((_newPersonInfo) => { return { ..._newPersonInfo, graduationTime: value} }) }} />
      </FormItem>
      <FormItem label="个人简介:">
        <Input.TextArea value={newPersonInfo.introduction} onChange={(value) => { setNewPersonInfo((_newPersonInfo) => { return { ..._newPersonInfo, introduction: value} }) }} />
      </FormItem>
    </Form>
  )

  return (
    <>
      <Nav
        className="basic-nav"
        mode="popup"
        direction="hoz"
        type="primary"
        header={header}
        selectedKeys={selectedNav}
        triggerType="hover"
        onSelect={(key) => { setSelectedNav(key) }}
      >
        <Item key="home">Home</Item>
        <Item key="info">Info</Item>
        <Item key="Other">Other</Item>
      </Nav>
      {content[selectedNav]}

      <Dialog
        v2
        title="新增人员信息"
        visible={dialogShow}
        okProps={{ children: '新增' }}
        cancelProps={{ children: '放弃' }}
        onOk={() => { setDialogShow(false) }}
        onClose={() => { setDialogShow(false) }}
        onCancel={() => { setDialogShow(false) }}
      >
        {FormComponent}
      </Dialog>
    </>
  );
}

export default App;