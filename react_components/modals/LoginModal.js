import React from "react";
import { Modal, Input } from "antd";

class LoginModal extends React.Component {
	render() {
		return (
			<Modal
				title="Login"
				visible={this.props.loginModalVisibility}
				onOk={this.props.loginModalhandleOk}
				onCancel={this.props.loginModalhandleCancel}
			>
				<div style={{ marginBottom: 16 }}>
					<Input addonBefore="UserName" defaultValue="username.." />
					<br />
					<br />
					<Input
						addonBefore="Password"
						defaultValue="******"
						type="password"
					/>
				</div>
			</Modal>
		);
	}
}

export default LoginModal;
