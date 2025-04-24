import React from 'react';
import { InputSize, InputStatus } from '../types/InputStatus';

export interface InputNumberProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'size'> {
  value?: number;
  status?: InputStatus;
  size?: InputSize;
  onChange?: (value: number) => void;
  /** Icon to display before the input */
  icon?: React.ReactNode;
  /** Helper text to display below the input */
  helperText?: string;
  /** Minimum value allowed */
  min?: number;
  /** Maximum value allowed */
  max?: number;
  /** Step value for increment/decrement */
  step?: number;
  /** Label for the input */
  label?: string;
  /** Description for screen readers */
  ariaDescription?: string;
}

export const InputNumber = ({
  value,
  onChange,
  status = 'default',
  size = 'medium',
  icon,
  helperText,
  min,
  max,
  step = 1,
  label,
  ariaDescription,
  id,
  name,
  required,
  disabled,
  ...props
}: InputNumberProps) => {
  const inputId = id || name || `input-${Math.random().toString(36).substr(2, 9)}`;
  const descriptionId = `${inputId}-description`;
  const hasError = status === 'error';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.valueAsNumber;
    if (isNaN(newValue)) return;
    if (min !== undefined && newValue < min) return;
    if (max !== undefined && newValue > max) return;
    onChange?.(newValue);
  };

  return (
    <div className="formItem_content--wrapper">
      <div className="formItem_content--container">
        {icon && (
          <span 
            className="formItem_content--iconPrefix" 
            data-size={size}
          >
            {icon}
          </span>
        )}
        <input
          {...props}
          id={inputId}
          name={name}
          data-size={size}
          data-status={status}
          type="number"
          className="formItem_content--textInput"
          value={value}
          onChange={handleChange}
          disabled={disabled}
          required={required}
          min={min}
          max={max}
          step={step}
          aria-required={required}
          aria-invalid={hasError}
          aria-describedby={[
            helperText ? descriptionId : undefined,
            ariaDescription ? `${inputId}-description` : undefined,
          ].filter(Boolean).join(' ') || undefined}
        />
      </div>
      {helperText && (
        <div className="formItem_content--footer">
          <span 
            id={descriptionId}
            className={`helper-text ${hasError ? 'error' : ''}`}
            role={hasError ? 'alert' : undefined}
          >
            {helperText}
          </span>
        </div>
      )}
    </div>
  );
}; 