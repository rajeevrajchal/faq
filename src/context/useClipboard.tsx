import { useState } from "react";
import { toast } from "react-toastify";

const useClipboard = () => {
	const [copyStatus, setCopyStatus] = useState(false);
	const copyToClipboard = (text: string) => {
		const textField = document.createElement("textarea");
		textField.innerText = text;
		document.body.appendChild(textField);
		textField.select();
		document.execCommand("copy");
		textField.remove();
		setCopyStatus(true);
		toast.success("Copied to clipboard!");
	};

	return {
		copyStatus,
		copyToClipboard,
	};
};

export default useClipboard;
