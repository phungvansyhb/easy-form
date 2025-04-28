import React from 'react';
import { InputSize, InputStatus } from '../types/InputStatus';
import { RadioOption } from '../types/Options';

export interface InputRadioProps {
  name: string;
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  status?: InputStatus;
  size?: InputSize;
  /** Helper text to display below the input */
  helperText?: string;
  /** Whether the radio group is required */
  required?: boolean;
  /** Whether the radio group is disabled */
  disabled?: boolean;
  /** Layout direction */
  direction?: 'horizontal' | 'vertical';
}

export const InputRadio = ({
  name,
  options,
  value,
  onChange,
  status = 'default',
  size = 'medium',
  helperText,
  required = false,
  disabled = false,
  direction = 'vertical',
  ...props
}: InputRadioProps) => {
  const groupId = `${name}-group`;
  const descriptionId = `${groupId}-description`;
  const hasError = status === 'error';

  const handleChange = (optionValue: string) => {
    if (disabled) return;
    onChange?.(optionValue);
  };

  return (
    <div className="formItem_content--wrapper">
      <div 
        className={`formItem_content--radioGroup ${direction}`}
        role="radiogroup"
        aria-labelledby={groupId}
        aria-describedby={helperText ? descriptionId : undefined}
        aria-required={required}
        aria-invalid={hasError}
        data-size={size}
        data-status={status}
      >
        {options.map((option) => (
          <label
            key={option.value}
            className={`formItem_content--radioLabel ${option.disabled ? 'disabled' : ''}`}
          >
            <input
              {...props}
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={() => handleChange(option.value)}
              disabled={disabled || option.disabled}
              className="formItem_content--InputRadio"
              data-size={size}
              data-status={status}
              aria-checked={value === option.value}
            />
            <span className="formItem_content--radioText">{option.label}</span>
          </label>
        ))}
      </div>
      {helperText && (
        <div className="formItem_content--footer">
          <span 
            id={descriptionId}
            className={`helper-text`}
            data-status={status}
            role={hasError ? 'alert' : undefined}
          >
            {helperText}
          </span>
        </div>
      )}
    </div>
  );
}; 