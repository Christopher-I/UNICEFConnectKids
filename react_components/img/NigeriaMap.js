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
						twoToneColor="red"
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
					src="https://upload.wikimedia.org/wikipedia/en/b/b9/Map_of_Nigerian_States_with_names.png"
				/>
			</div>
		);
	}
}

export default NigeriaMap;
