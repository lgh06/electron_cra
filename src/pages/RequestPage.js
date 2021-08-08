import React from "react";

import { Select, Input } from 'antd';
import { Row, Col } from 'antd';


// import { fetch }  from "../helpers";


// TODO , more methods
const methodArray = ['GET', 'POST', 'PUT', 'DELETE'];


export default function RequestPage () {


  const { Option } = Select;
  
  function handleChange(field, e) {
    if (field === 'select'){
      console.log(`选择了 ${field} ${e}`);
    }else if (field === 'input'){
      console.log(`选择了 ${field} ${e.target.value}`)
    }else{
      console.log(`选择了 ${field} ${e}`);
    }
  }
  return (
    <>
      <Row align="middle" justify="center">
        <Col flex="100px">
          <Select defaultValue="GET" style={{ width: 120 }} onSelect={(e) => handleChange('select', e)}>
            {methodArray.map((v) => {
              return <Option key={v} value={v}>{v}</Option>
            })}
          </Select>
        </Col>
        <Col flex="auto">
          <Input.Search
            placeholder="请输入URL"
            allowClear
            enterButton="请求"
            onSearch={(e) => handleChange('search', e)}
          />
        </Col>
      </Row>
      <Row>
        <Col>
        req headers (JSON object)
          <Input.TextArea
            rows="8"
          />
        </Col>
        <Col>
        req body (JSON object)
          <Input.TextArea
              rows="8"
            />
        </Col>
      </Row>
      <div>test</div>
    </>
  )
}