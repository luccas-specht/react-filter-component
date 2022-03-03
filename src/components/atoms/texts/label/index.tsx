type Props = {
  text: string;
  htmlFor: string;
};

export const Label = ({ text, htmlFor }: Props) => (
  <label htmlFor={htmlFor}>{text}</label>
);
