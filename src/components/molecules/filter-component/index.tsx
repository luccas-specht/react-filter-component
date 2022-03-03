import { useCallback } from 'react';
import { Label, Option, SelectInput } from '~/components/atoms';

type LabelType = {
  text: string;
  htmlFor: string;
};

type OptionType = {
  id: string;
  name: string;
};

type SelectInputType = {
  initialValue: string;
  onChange: (value: any) => void;
};

type Props = {
  label: LabelType;
  options: OptionType[];
  selectInput: SelectInputType;
};

export const FilterComponent = ({ label, options, selectInput }: Props) => {
  const renderOptions = useCallback(
    () =>
      options.map(({ id, name }, index) => (
        <Option key={index} id={id} name={name} />
      )),
    [options]
  );

  return (
    <div>
      <Label htmlFor={label.htmlFor} text={label.text} />
      <SelectInput
        onChange={selectInput.onChange}
        initialValue={selectInput.initialValue}
      >
        {renderOptions()}
      </SelectInput>
    </div>
  );
};
