import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete
} from "antd";
import CreateNewSchool from "../../ethereum/deployedContractCalls/countryManager/createNewSchool";
import GetListOfCountryManagers from "../../ethereum/deployedContractCalls/main/getListOfCountryManagers";
import {
  mainContractAddress,
  owner
} from "../../ethereum/ListofSmartContractAddresses";

const { Option } = Select;
const { TextArea } = Input;
const AutoCompleteOption = AutoComplete.Option;

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    schoolName: "",
    schoolPopulation: "",
    schoolLocation: "",
    schoolOwnersETHAddress: ""
  };

  createNewSchool = async e => {
    e.preventDefault();

    let result = await GetListOfCountryManagers(mainContractAddress);
    const feedback = await CreateNewSchool(
      result[0],
      this.state.schoolName,
      this.state.schoolPopulation,
      this.state.schoolLocation,
      this.state.schoolOwnersETHAddress
    );
    console.log(feedback);
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: "234"
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );

    return (
      <div>
        <br />
        <br />
        <Form onSubmit={this.createNewSchool} style={{ padding: "50px 100px" }}>
          <Form.Item label="School Name">
            <Input
              value={this.state.schoolName}
              onChange={event =>
                this.setState({ schoolName: event.target.value })
              }
            />
          </Form.Item>

          <Form.Item label="Population">
            <Input
              value={this.state.schoolPopulation}
              onChange={event =>
                this.setState({ schoolPopulation: event.target.value })
              }
            />
          </Form.Item>

          <Form.Item label="Location">
            <Input
              value={this.state.schoolLocation}
              onChange={event =>
                this.setState({ schoolLocation: event.target.value })
              }
            />
          </Form.Item>

          <Form.Item label="Owners Address">
            <Input
              value={this.state.schoolOwnersETHAddress}
              onChange={event =>
                this.setState({ schoolOwnersETHAddress: event.target.value })
              }
            />
          </Form.Item>

          <Form.Item label="Contact Info">
            <Input />
          </Form.Item>

          <Form.Item label="Additional Details">
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: "register" })(
  RegistrationForm
);

export default WrappedRegistrationForm;
