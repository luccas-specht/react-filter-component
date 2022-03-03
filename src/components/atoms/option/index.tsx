type Props = {
  id: string;
  name: string;
};

export const Option = ({ id, name }: Props) => (
  <option value={id}>{name}</option>
);
