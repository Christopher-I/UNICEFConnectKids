import React from "react";
import { Modal, Button } from "antd";
import NewSchoolForm from "../forms/NewSchoolForm";

class ApplyModal extends React.Component {
	render() {
		return (
			<Modal
				title="Apply"
				visible={this.props.applyModalVisibility}
				onOk={this.props.applyModalhandleOk}
				onCancel={this.props.applyModalhandleCancel}
			>
				<div style={{ marginBottom: 16 }}>
					<Button block>Apply As School</Button>
					<br />
					<br />
					<Button block>Apply As ISP</Button>
				</div>
			</Modal>
		);
	}
}

export default ApplyModal;
