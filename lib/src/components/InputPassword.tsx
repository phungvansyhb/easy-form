import { InputSize, InputStatus } from '../types/InputStatus';
import React, { useState } from 'react';

import { cn } from '../utils/cn';

export interface InputPasswordProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
	/** The name of the input */
	name?: string;
	/** The status of the input */
	status?: InputStatus;
	/** The size of the input */
	size?: InputSize;
	/** Helper text to display below the input */
	helperText?: string;
	/** Whether the input is required */
	required?: boolean;
	/** Whether the input is disabled */
	disabled?: boolean;
	/** Whether to show the password */
	showPassword?: boolean;
	/** The function to call when the value changes */
	onChange?: (value: string) => void;
}

export const InputPassword = ({
	name,
	status = 'default',
	size = 'medium',
	helperText,
	required = false,
	disabled = false,
	showPassword: defaultShowPassword = false,
	onChange,
	className,
	...props
}: InputPasswordProps) => {
	const [showPassword, setShowPassword] = useState(defaultShowPassword);
	const inputId = `${name}-input`;
	const descriptionId = `${inputId}-description`;
	const hasError = status === 'error';

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
	};

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	return (
		<div className='formItem_content--wrapper'>
			<div className='formItem_content--container'>
				<div
					className={cn('formItem_content--inputWrapper', disabled && 'disabled')}
					data-size={size}
					data-status={status}>
					<input
						id={inputId}
						name={name}
						type={showPassword ? 'text' : 'password'}
						className={cn('formItem_content--input', className)}
						disabled={disabled}
						required={required}
						aria-invalid={hasError}
						aria-describedby={helperText ? descriptionId : undefined}
						onChange={handleChange}
						{...props}
					/>
					<button
						type='button'
						className='formItem_content--togglePassword'
						onClick={togglePasswordVisibility}
						tabIndex={-1}
						aria-label={showPassword ? 'Hide password' : 'Show password'}>
						{showPassword ? (
							<svg
								width='16'
								height='16'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'>
								<path d='M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24' />
								<line
									x1='1'
									y1='1'
									x2='23'
									y2='23'
								/>
							</svg>
						) : (
							<svg
								width='16'
								height='16'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'>
								<path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' />
								<circle
									cx='12'
									cy='12'
									r='3'
								/>
							</svg>
						)}
					</button>
				</div>
			</div>

			{helperText && (
				<div className='formItem_content--footer'>
					<span
						id={descriptionId}
						className='helper-text'
						data-status={status}
						role={hasError ? 'alert' : undefined}>
						{helperText}
					</span>
				</div>
			)}
		</div>
	);
};
