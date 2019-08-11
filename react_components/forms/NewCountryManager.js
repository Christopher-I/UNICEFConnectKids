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
import { MainDeployed } from "../../ethereum/deployedContractCalls/deployedContracts";
import web3 from "../../ethereum/web3";
import GetListOfCountryManagers from "../../ethereum/deployedContractCalls/main/getListOfCountryManagers";
import CreateNewCountryManger from "../../ethereum/deployedContractCalls/main/createNewCountryManager";
import { mainContractAddress } from "../../ethereum/ListofSmartContractAddresses";
import { GetCountryManagerSummary } from "../../ethereum/deployedContractCalls/getContractSummary";

const { Option } = Select;
const { TextArea } = Input;
const AutoCompleteOption = AutoComplete.Option;

class RegistrationForm extends React.Component {
  state = {
    countryName: "",
    confirmDirty: false,
    autoCompleteResult: [],
    errorMessage: ""
  };

  async componentDidMount() {}

  //creates a new country manager
  createNewCountryM = async e => {
    e.preventDefault();
    try {
      let result = await MainDeployed(mainContractAddress);

      let address = await CreateNewCountryManger(
        mainContractAddress,
        this.state.countryName
      );

      console.log(address);
    } catch (err) {
      console.log(err);
      this.setState({ errorMessage: err.message });
    }
  };

  //retrieves a list of created country managers
  getListOfCountryManagers = async e => {
    e.preventDefault();
    try {
      let result = await GetListOfCountryManagers(mainContractAddress);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
  };

  getCountryManagersSummary = async e => {
    e.preventDefault();
    try {
      let result = await GetListOfCountryManagers(mainContractAddress);
      let result1 = await result.map(async (value, index) => {
        let result2 = await GetCountryManagerSummary(value);
        console.log(result2);
      });
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
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
        <h1> Welcome Admin! </h1>
        <br />
        <br />
        <h4> Address: {this.state.address}</h4>
        <Button type="primary" onClick={this.getListOfCountryManagers}>
          Get List of Country Managers
        </Button>
        <br />
        <br />
        <Button type="primary" onClick={this.getCountryManagersSummary}>
          Get getCountryManagersSummary
        </Button>
        <Form
          onSubmit={this.createNewCountryM}
          style={{ padding: "50px 100px" }}
        >
          <h4> Add new Country Manager </h4>
          <Form.Item label="Country Name">
            <Input
              value={this.state.countryName}
              onChange={event =>
                this.setState({ countryName: event.target.value })
              }
            />
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
