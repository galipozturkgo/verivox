import styles from './Field.module.scss';
import { FieldProps } from './Field.types';
import classNames from 'classnames';

const Field: React.FC<FieldProps> = ({ id, label, children, className }) => {
  return (
    <div className={classNames(styles.field, className)}>
      <label htmlFor={id}>{label}</label>
      {children}
    </div>
  );
};

export default Field;
