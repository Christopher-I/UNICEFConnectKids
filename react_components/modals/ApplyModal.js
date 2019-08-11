import React from "react";
import { Modal, Button } from "antd";
import { Link } from "../../routes";

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
					<Link route={"/applicationForms/schoolApplication"}>
						<Button block onClick>
							Apply As School
						</Button>
					</Link>
					<br />
					<br />
					<Link route={"/applicationForms/ISPApplication"}>
						<Button block>Apply As ISP</Button>
					</Link>
				</div>
			</Modal>
		);
	}
}

export default ApplyModal;
