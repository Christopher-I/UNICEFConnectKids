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
import CreateNewISP from "../../ethereum/deployedContractCalls/countryManager/createNewISP";
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
    ISPOwnerAddress: "",
    promisedDownloadSpeed: "",
    promisedUploadSpeed: "",
    promisedDataSize: "",
    ISPName: ""
  };

  //creates a new ISP provider
  createNewISP = async e => {
    e.preventDefault();
    let result = await GetListOfCountryManagers(mainContractAddress);

    const feedback = await CreateNewISP(
      result[0],
      this.state.ISPName,
      this.state.promisedUploadSpeed,
      this.state.promisedDownloadSpeed,
      this.state.promisedDataSize,
      owner
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
        <Form onSubmit={this.createNewISP} style={{ padding: "50px 100px" }}>
          <Form.Item label="ISP Name">
            <Input
              value={this.state.ISPName}
              onChange={event => this.setState({ ISPName: event.target.value })}
            />
          </Form.Item>

          <Form.Item label="Promised Data Size">
            <Input
              value={this.state.promisedDataSize}
              onChange={event =>
                this.setState({ promisedDataSize: event.target.value })
              }
            />
          </Form.Item>

          <Form.Item label="Promised Upload Speed">
            <Input
              value={this.state.promisedUploadSpeed}
              onChange={event =>
                this.setState({ promisedUploadSpeed: event.target.value })
              }
            />
          </Form.Item>

          <Form.Item label="Promised Download Speed">
            <Input
              value={this.state.promisedDownloadSpeed}
              onChange={event =>
                this.setState({ promisedDownloadSpeed: event.target.value })
              }
            />
          </Form.Item>

          <Form.Item label="ISP Owner Address">
            <Input
              value={this.state.ISPOwnerAddress}
              onChange={event =>
                this.setState({ ISPOwnerAddress: event.target.value })
              }
            />
          </Form.Item>

          <Form.Item label="Contact Information">
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
