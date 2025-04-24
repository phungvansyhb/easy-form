import React from 'react';
import { InputSize, InputStatus } from '../types/InputStatus';

export interface InputTextProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'size'> {
	value?: string;
	/**  control status of input */
	status?: InputStatus;
	/** what size of input */
	size?: InputSize;
	/** callback function when input value changes */
	onChange?: (value: string) => void;
	/** Icon to display before the input */
	iconPrefix?: React.ReactNode;
	/** Icon to display after the input */
	iconSuffix?: React.ReactNode;
	/** Helper text to display below the input */
	helperText?: string;
	/** Maximum number of characters allowed */
	maxLength?: number;
	/** Show word count */
	showWordCount?: boolean;
}

/**
 * InputText is a component that allows you to create an input text field.
 * @param props - The props for the InputText component.
 * @returns A React component that renders an input text field.
 */
export const InputText = ({
	value,
	onChange,
	status = 'default',
	size = 'medium',
	iconPrefix,
	iconSuffix,
	helperText,
	maxLength,
	showWordCount,
	...props
}: InputTextProps) => {
	const inputId = props.id || props.name || `input-${Math.random().toString(36).substr(2, 9)}`;
	const descriptionId = `${inputId}-description`;
	const hasError = status === 'error';

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value;
		if (maxLength && newValue.length > maxLength) return;
		onChange?.(newValue);
	};

	return (
		<div className='formItem_content--wrapper'>
			<div className='formItem_content--container'>
				{iconPrefix && (
					<span
						className='formItem_content--iconPrefix'
						data-size={size}>
						{iconPrefix}
					</span>
				)}
				<input
					{...props}
					data-size={size}
					data-status={status}
					id={props.name}
					name={props.name}
					type='text'
					className='formItem_content--textInput'
					value={value}
					onChange={handleChange}
					disabled={props.disabled}
					required={props.required}
					aria-invalid={hasError}
					aria-required={props.required}
					aria-describedby={
						[
							helperText ? descriptionId : undefined,
							showWordCount ? `${inputId}-wordcount` : undefined,
							props.name ? `${inputId}-${props.name}` : undefined,
						]
							.filter(Boolean)
							.join(' ') || undefined
					}
					maxLength={maxLength}
				/>
				{iconSuffix && (
					<span
						className='formItem_content--iconSuffix'
						data-size={size}>
						{iconSuffix}
					</span>
				)}
			</div>
			{(helperText || showWordCount) && (
				<div className='formItem_content--footer'>
					{helperText && (
						<span
							className='helper-text'
							role={hasError ? 'alert' : undefined}
							id={descriptionId}>
							{helperText}
						</span>
					)}

					{showWordCount && (
						<span
							className='word-count'
							aria-live='polite'
							id={`${inputId}-wordcount`}>
							{value?.length || 0}/{maxLength}
						</span>
					)}
				</div>
			)}
		</div>
	);
};
