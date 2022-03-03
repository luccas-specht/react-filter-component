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
        <Option key={index} value={id} name={name} />
      )),
    [options]
  );

  return (
    <div>
      <SelectInput onChange={selectInput.onChange}>
        {renderOptions()}
      </SelectInput>
    </div>
  );
};
