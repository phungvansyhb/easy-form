import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import {InputText} from './InputText';
import { InputStatus } from '../types/InputStatus';

interface FormItemProps {
  name: string;
  label?: string;
  required?: boolean;
  children?: React.ReactNode; 
  status? : InputStatus;
  message? : string;
  className?: string;
}

export const FormItem = ({ 
  name, 
  label, 
  required = false,
  children,
  status,
  message,
  className 
}: FormItemProps) => {
  const { control } = useFormContext();

  return (
    <div className={`formItem ${className}`}>
      {label && (
        <label className="formItem_label">
          {label}
          {required && <span className="sr-only">*</span>}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <div className="formItem_content" data-status={status || (error ? 'error' : 'default')}>
            {children ? (
              React.cloneElement(children as React.ReactElement, {
                ...field,
                status: status || (error ? 'error' : 'default'),
              })
            ) : (
              <InputText
                {...field}
                status={status || (error ? 'error' : 'default')}
              />
            )}
            
            { (message || error) && (
              <span className="formItem_content--message">
                {message || error?.message}
              </span>
            )}
          </div>
        )}
      />
    </div>
  );
};