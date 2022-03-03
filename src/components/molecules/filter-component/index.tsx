import { useCallback } from 'react';

import { Label, Option, SelectInput } from '~/components';

import styles from './filter-component.module.scss';

type OptionType = {
  id: string;
  name: string;
};

type SelectInputType = {
  onChange: (value: any) => void;
};

type Props = {
  options: OptionType[];
  selectInput: SelectInputType;
};

export const FilterComponent = ({ options, selectInput }: Props) => {
  const renderOptions = useCallback(
    () =>
      options.map(({ id, name }, index) => (
        <Option key={index} value={id} name={name} />
      )),
    [options]
  );

  return (
    <div className={styles['filter-component']}>
      <Label htmlFor="select-input" text="Categories:" />
      <SelectInput onChange={selectInput.onChange}>
        {renderOptions()}
      </SelectInput>
    </div>
  );
};
