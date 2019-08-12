import React from "react";
import { Modal, Input, Button } from "antd";
import InternetSpeedChart from "../../pages/chart/sample";

class connectivityDetailsModal extends React.Component {
	render() {
		return (
			<Modal
				title="Login"
				visible={this.props.loginModalVisibility}
				onOk={this.props.loginModalhandleOk}
				onCancel={this.props.loginModalhandleCancel}
			>
				<div style={{ marginBottom: 16 }}>
					<InternetSpeedChart />{" "}
				</div>
			</Modal>
		);
	}
}

export default connectivityDetailsModal;
