import styles from './label.module.scss';

type Props = {
  text: string;
  htmlFor: string;
};

export const Label = ({ text, htmlFor }: Props) => (
  <label className={styles['label']} htmlFor={htmlFor}>
    {text}
  </label>
);
