import React, { useMemo, useRef, useState } from 'react';

import styles from './Select.module.scss';
import { ReactComponent as ArrowIcon } from '../../../assets/icons/select-arrow.svg';
import useOutsideAlerter from '../../../hooks/useOutsideAllerter';

type TOptionValue = string | number;
type TOption<V extends TOptionValue> = { value: V; label: string } & Record<string, unknown>;

type SelectProps<V extends TOptionValue> = {
  value: V;
  options: TOption<V>[];
  onChange: (value: V) => void;
};

function Select<V extends TOptionValue>({ value, options, onChange }: SelectProps<V>) {
  const findOptionByValue = (value: V) => options.find((option) => option.value === value)!;

  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = useMemo(() => findOptionByValue(value), [value]);


  useOutsideAlerter(wrapperRef, () => setIsOpen(false));

  const onOptionChange = (option: TOption<V>) => {
    setIsOpen(false);
    if (option.value !== selectedOption.value) {
      onChange(option.value);
    }
  };

  return (
    <div ref={wrapperRef} className={styles.selectWrapper}>
      <button className={`${styles.labelButton} ${isOpen ? styles.opened : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <span className={styles.labelText}>{selectedOption.label}</span>
        <ArrowIcon className={styles.arrowIcon} fill='#ADBFDF' />
      </button>

      {isOpen && (
        <ul className={styles.optionList}>
          {options.map((option) => (
            <li
              className={`${styles.optionValue} ${option.value === selectedOption.value ? styles.selected : ''}`}
              onClick={() => onOptionChange(option)}
              key={option.value}
            >
              <p>{option.label}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Select;
