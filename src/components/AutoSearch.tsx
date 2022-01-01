import Select from "react-select";
import makeAnimated from "react-select/animated";

export type OptionsProps = {
	value: string;
	label: string;
};

interface AutoSelectProps {
	options: OptionsProps[];
	placeholder: string;
	isMulti?: boolean;
	defaultValue?: OptionsProps | OptionsProps[];
	type: string;
	onChange: (item: any) => void;
}

const AutoSearch = ({
	options,
	isMulti,
	placeholder,
	defaultValue,
	type,
	onChange,
}: AutoSelectProps) => {
	const animatedComponents = makeAnimated();
	return (
		<Select
			defaultValue={defaultValue}
			options={options}
			isSearchable={true}
			isClearable={true}
			components={animatedComponents}
			isMulti={isMulti || false}
			backspaceRemovesValue={true}
			placeholder={placeholder}
			onChange={(items: any) => onChange(items)}
		/>
	);
};

export default AutoSearch;
