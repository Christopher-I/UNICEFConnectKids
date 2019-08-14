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
import {
  mainContractAddress,
  owner
} from "../../ethereum/ListofSmartContractAddresses";
import {
  GetCountryManagerSummary,
  GetSchoolSummary
} from "../../ethereum/deployedContractCalls/getContractSummary";
import GetSummaryOfAllSchoolsInCountry from "../../ethereum/deployedContractCalls/countryManager/getSummaryOfAllSchoolsInCountry";
import GetSummaryOfAllISPsInCountry from "../../ethereum/deployedContractCalls/countryManager/getSummaryOfAll_ISPsInCountry";

const { Option } = Select;
const { TextArea } = Input;
const AutoCompleteOption = AutoComplete.Option;
const countryManagersList = [];
//let summary;

class RegistrationForm extends React.Component {
  state = {
    countryName: "",
    confirmDirty: false,
    autoCompleteResult: [],
    errorMessage: "",
    response: "",
    loading: false
  };

  async componentDidMount() {}

  //creates a new country manager
  createNewCountryM = async e => {
    e.preventDefault();
    this.setState({ loading: true });
    try {
      let result = await MainDeployed(mainContractAddress);

      let address = await CreateNewCountryManger(
        mainContractAddress,
        this.state.countryName
      );

      const addressesOfAllCountryManagers = await GetListOfCountryManagers(
        mainContractAddress
      );

      console.log(addressesOfAllCountryManagers[0]);

      this.setState({
        response:
          addressesOfAllCountryManagers[
            addressesOfAllCountryManagers.length - 1
          ],
        loading: false
      });
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
      //gets a list of country managers
      let result = await GetListOfCountryManagers(mainContractAddress);
      //the first country oin the away is Nigeria
      const countryManagerNigeria = result[0];
      //get the summary of the contract manager of Nigeria
      const countryManagerNigeriaSummary = await GetCountryManagerSummary(
        countryManagerNigeria
      );
      // //get summary of all schools under the contract manager of Nigeria
      // const schoolSummary = await GetSummaryOfAllSchoolsInCountry(
      //   countryManagerNigeriaSummary
      // );
      // //get summary of all ISP under the contract manager of Nigeria
      // const ISPSummary = await GetSummaryOfAllISPsInCountry(
      //   countryManagerNigeriaSummary
      // );

      // console.log(schoolSummary);
      // console.log(ISPSummary);
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
        <h1 style={{ padding: "20px 20px" }}> Welcome Admin! </h1>
        <Row>
          <Col span={12} style={{ padding: "20px 20px" }}>
            <div> List of Pending School Applications Awaiting Decision</div>
            <br />
            <div> List of ISP Applications Awaiting Decision</div>
          </Col>

          <Col span={12} style={{ padding: "20px 20px" }}>
            <Form onSubmit={this.createNewCountryM}>
              <h4> Add new Country Manager </h4>
              <Form.Item label="Country Name">
                <Input
                  value={this.state.countryName}
                  onChange={event =>
                    this.setState({ countryName: event.target.value })
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
            <br />
            <h3>Country Manager Address : {this.state.response}</h3>
          </Col>
        </Row>
      </div>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: "register" })(
  RegistrationForm
);

export default WrappedRegistrationForm;
