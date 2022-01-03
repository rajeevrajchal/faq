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
  onInputChnage: (item: any) => void;
}

const AutoSearch = ({
  options,
  isMulti,
  placeholder,
  defaultValue,
  onInputChnage,
  onChange,
}: AutoSelectProps) => {
  const animatedComponents = makeAnimated();
  return (
    <Select
      defaultValue={defaultValue}
      onInputChange={(inputValue: string) => onInputChnage(inputValue)}
      options={options}
      isSearchable={true}
      components={animatedComponents}
      isMulti={isMulti || false}
      placeholder={placeholder}
      onChange={(items: any) => onChange(items)}
    />
  );
};

export default AutoSearch;
