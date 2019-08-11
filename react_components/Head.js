import react from "react";
import Head from "next/head";

class CustomHead extends React.Component {
	render() {
		return (
			<Head>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.17.0/antd.min.css"
				/>
			</Head>
		);
	}
}

export default CustomHead;
