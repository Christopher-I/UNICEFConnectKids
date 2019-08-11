import React from "react";
import Template from "../../react_components/Template";
import NewSchoolForm from "../../react_components/forms/NewSchoolForm";

class Home extends React.Component {
	render() {
		return (
			<Template>
				<NewSchoolForm />
			</Template>
		);
	}
}

export default Home;
