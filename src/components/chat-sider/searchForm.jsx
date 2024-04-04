import { Button, Col, Input, Row } from "antd";
import { CiSearch } from "react-icons/ci";
import { AiOutlineUserAdd, AiOutlineUsergroupAdd } from "react-icons/ai";

function SearchForm() {
  const avatarStyle = {
    margin: "10px 0px 0px 5px",
    border: "0px",
  };

  return (
    <Row>
      <Col span={15}>
        <Input
          size="middle"
          style={{ margin: "10px 10px 0px 10px" }}
          placeholder="search..."
          prefix={<CiSearch />}
        />
      </Col>
      <Col span={1}></Col>
      <Col span={4}>
        <Button type="text" style={avatarStyle}>
          <AiOutlineUserAdd size={20} />
        </Button>
      </Col>

      <Col span={4}>
        <Button type="text" style={avatarStyle}>
          <AiOutlineUsergroupAdd size={20} />
        </Button>
      </Col>
    </Row>
  );
}

export default SearchForm;
