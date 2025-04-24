import React from 'react';
import { InputSize, InputStatus } from '../types/InputStatus';

export interface InputTextAreaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'value' | 'onChange' | 'size'> {
  value?: string;
  status?: InputStatus;
  size?: InputSize;
  onChange?: (value: string) => void;
  /** Helper text to display below the input */
  helperText?: string;
  /** Maximum number of characters allowed */
  maxLength?: number;
  /** Show word count */
  showWordCount?: boolean;
  /** Number of rows to display */
  rows?: number;
  /** Whether to allow resizing */
  resizable?: boolean;
}

export const InputTextArea = ({
  value,
  onChange,
  status = 'default',
  size = 'medium',
  helperText,
  maxLength,
  showWordCount,
  rows = 3,
  resizable = false,
  id,
  name,
  required,
  disabled,
  ...props
}: InputTextAreaProps) => {
  const inputId = id || name || `textarea-${Math.random().toString(36).substr(2, 9)}`;
  const descriptionId = `${inputId}-description`;
  const hasError = status === 'error';

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    if (maxLength && newValue.length > maxLength) return;
    onChange?.(newValue);
  };

  return (
    <div className="formItem_content--wrapper">
      <div className="formItem_content--container">
        <textarea
          {...props}
          id={inputId}
          name={name}
          data-size={size}
          data-status={status}
          className={`formItem_content--textArea ${resizable ? 'resizable' : ''}`}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          required={required}
          rows={rows}
          aria-required={required}
          aria-invalid={hasError}
          aria-describedby={[
            helperText ? descriptionId : undefined,
            showWordCount ? `${inputId}-wordcount` : undefined,
          ].filter(Boolean).join(' ') || undefined}
          maxLength={maxLength}
        />
      </div>
      {(helperText || showWordCount) && (
        <div className="formItem_content--footer">
          {helperText && (
            <span 
              id={descriptionId}
              className={`helper-text`}
              role={hasError ? 'alert' : undefined}
            >
              {helperText}
            </span>
          )}
          {showWordCount && (
            <span 
              id={`${inputId}-wordcount`}
              className="word-count"
              aria-live="polite"
            >
              {value?.length || 0}/{maxLength}
            </span>
          )}
        </div>
      )}
    </div>
  );
}; 