export function openLoginModal() {
	return true;
}

export function loginModalhandleCancel() {
	return false;
}

export function loginModalhandleOk() {
	return false;
}

export function openApplyModal() {
	this.setState({
		applyModalVisibility: true
	});
}

export function applyModalhandleCancel() {
	this.setState({
		applyModalVisibility: false
	});
}

export function applyModalhandleOk() {
	this.setState({
		applyModalVisibility: false
	});
}
