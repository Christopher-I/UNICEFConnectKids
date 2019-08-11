import React from "react";
import Template from "../react_components/Template";
import ViewConnectivity from "../react_components/ViewConnectivity";

class Home extends React.Component {
	render() {
		return (
			<Template>
				<ViewConnectivity />
			</Template>
		);
	}
}

export default Home;

// {this.state.countrySelected ? (
// 	this.props.children
// ) : (
// 	<Content style={{ padding: "25px 50px" }}>
// 		<div
// 			style={{
// 				background: "#fff",
// 				padding: 10,
// 				minHeight: 500
// 			}}
// 		>
// 			<h1>Please Select a Country</h1>
// 		</div>
// 	</Content>
// )}
