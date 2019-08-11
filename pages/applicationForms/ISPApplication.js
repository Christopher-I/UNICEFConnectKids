import React from "react";
import Template from "../../react_components/Template";
import NewISPForm from "../../react_components/forms/NewISPForm";

class Home extends React.Component {
	render() {
		return (
			<Template>
				<NewISPForm />
			</Template>
		);
	}
}

export default Home;
