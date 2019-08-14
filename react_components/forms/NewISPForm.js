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
    ISPName: "",
    response: "",
    loading: ""
  };

  //creates a new ISP provider
  createNewISP = async e => {
    e.preventDefault();
    this.setState({
      loading: true
    });
    let result = await GetListOfCountryManagers(mainContractAddress);

    const feedback = await CreateNewISP(
      result[0],
      this.state.ISPName,
      this.state.promisedUploadSpeed,
      this.state.promisedDownloadSpeed,
      this.state.promisedDataSize,
      owner
    );

    this.setState({
      loading: false,
      response: feedback.to
    });
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

          <Form.Item label="Promised Data Size (GB)">
            <Input
              value={this.state.promisedDataSize}
              onChange={event =>
                this.setState({ promisedDataSize: event.target.value })
              }
            />
          </Form.Item>

          <Form.Item label="Promised Upload Speed (MB/s)">
            <Input
              value={this.state.promisedUploadSpeed}
              onChange={event =>
                this.setState({ promisedUploadSpeed: event.target.value })
              }
            />
          </Form.Item>

          <Form.Item label="Promised Download Speed (MB/s)">
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

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={this.state.loading}
            >
              Register
            </Button>
          </Form.Item>
        </Form>
        <h3 style={{ padding: "10px 100px" }}>
          {" "}
          Deployed ISP address: {this.state.response}{" "}
        </h3>
      </div>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: "register" })(
  RegistrationForm
);

export default WrappedRegistrationForm;
