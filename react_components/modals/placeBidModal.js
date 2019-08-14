import React from "react";
import { Modal, Input, Button } from "antd";

class PlaceBid extends React.Component {
	render() {
		return (
			<Modal
				title="Login"
				visible={this.props.placeBidVisibility}
				onOk={this.props.placeBidModalhandleOk}
				onCancel={this.props.placeBidModalhandleCancel}
			>
				<div style={{ marginBottom: 16 }}>
					<Input
						addonBefore="Promised Upload Speed"
						defaultValue="MB/s.."
					/>
					<br />
					<br />
					<Input
						addonBefore="Promised Download Speed"
						defaultValue="MB/s.."
					/>
					<br />
					<br />

					<Input addonBefore="Data Size" defaultValue="GB/month.." />
					<br />
					<br />
					<Input addonBefore="ISP ID" defaultValue="0x..." />
				</div>
			</Modal>
		);
	}
}

export default PlaceBid;
