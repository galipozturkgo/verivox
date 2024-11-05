import styles from './Input.module.scss';
import React from 'react';
import Field from '../field/Field';

interface InputProps {
  id: string;
  label: string;
  value: string | number | undefined;
  onChange: (value: string | number | null) => void;
  placeholder?: string;
  type?: 'text' | 'number';
  className?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  className,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    onChange(
      newValue === '' ? null : type === 'number' ? Number(newValue) : newValue
    );
  };

  return (
    <Field id={id} label={label} className={className}>
      <input
        id={id}
        type={type}
        value={value === null ? '' : value}
        onChange={handleChange}
        placeholder={placeholder}
        className={styles.input}
      />
    </Field>
  );
};

export default Input;
