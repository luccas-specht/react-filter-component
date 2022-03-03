type Props = {
  name: string;
  value: string;
};

export const Option = ({ value, name }: Props) => (
  <option value={value}>{name}</option>
);
