import React from "react";
import { Icon } from "antd";

class NigeriaMap extends React.Component {
	render() {
		return (
			<div style={{ position: "relative" }}>
				<a>
					<Icon
						style={{
							position: "absolute",
							top: "150px",
							left: "300px"
						}}
						type="environment"
						theme="twoTone"
						twoToneColor="red"
					/>
				</a>
				<a>
					<Icon
						style={{
							position: "absolute",
							top: "220px",
							left: "260px"
						}}
						type="environment"
						theme="twoTone"
						twoToneColor="#52c41a"
					/>
				</a>
				<a>
					<Icon
						style={{
							position: "absolute",
							top: "320px",
							left: "70px"
						}}
						type="environment"
						theme="twoTone"
						twoToneColor="#52c41a"
					/>
				</a>
				<img
					style={{ width: 650, height: 450 }}
					alt="example"
					src="https://previews.dropbox.com/p/thumb/AAg5nGVtnxPypYRohnpa00YskwQjBz94sC0kGBVU1rk89dLk5EFnHVGkM0XhncazjtChmxL1Ys4NxC13ivlLSh0SqkUd_wxvBiAfeMZVDW6hst4KAsB2--m0pcYyzqsMUiLoYS6lSiaX_uYyIS-tCPB_GE9YdXpjRw_0nVCUyJq8jZ0XwyFYx3lf-fVPtaOCkRGkCfgalvWT53HLIbxsa3T37A2yvGYsrOqcdBvetMHyTp6MOZ1HCzG78NXqYGd_3x0BeHgG41TIVJSB-hU3WrDXyfWvlq8pJY_6wW0kuljXSCLC58_d087pnXjuzf178jFkMS9wWLYnLdJtqtQ5GLpmLMDXoHv3cJS3EvNR4S00Nw/p.png?fv_content=true&size_mode=5"
				/>
			</div>
		);
	}
}

export default NigeriaMap;
