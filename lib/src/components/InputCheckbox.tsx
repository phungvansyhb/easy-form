import React from 'react';
import { InputSize, InputStatus } from '../types/InputStatus';
import { CheckboxOption } from '../types/Options';

export interface InputCheckboxProps {
  name: string;
  options: CheckboxOption[];
  value?: string[];
  onChange?: (value: string[]) => void;
  status?: InputStatus;
  size?: InputSize;
  /** Helper text to display below the input */
  helperText?: string;
  /** Whether the checkbox group is required */
  required?: boolean;
  /** Whether the checkbox group is disabled */
  disabled?: boolean;
  /** Layout direction */
  direction?: 'horizontal' | 'vertical';
}

export const InputCheckbox = ({
  name,
  options,
  value = [],
  onChange,
  status = 'default',
  size = 'medium',
  helperText,
  required = false,
  disabled = false,
  direction = 'vertical',
  ...props
}: InputCheckboxProps) => {
  const groupId = `${name}-group`;
  const descriptionId = `${groupId}-description`;
  const hasError = status === 'error';

  const handleChange = (optionValue: string) => {
    if (disabled) return;
    const newValue = value.includes(optionValue)
      ? value.filter(v => v !== optionValue)
      : [...value, optionValue];
    onChange?.(newValue);
  };

  return (
    <div className="formItem_content--wrapper">
      <div 
        className={`formItem_content--checkboxGroup ${direction}`}
        role="group"
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
            className={`formItem_content--checkboxLabel ${option.disabled ? 'disabled' : ''}`}
          >
            <input
              {...props}
              type="checkbox"
              name={name}
              value={option.value}
              checked={value.includes(option.value)}
              onChange={() => handleChange(option.value)}
              disabled={disabled || option.disabled}
              className="formItem_content--checkboxInput"
              data-size={size}
              data-status={status}
              aria-checked={value.includes(option.value)}
            />
            <span className="formItem_content--checkboxText">{option.label}</span>
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