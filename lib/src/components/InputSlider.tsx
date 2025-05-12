import { InputSize, InputStatus } from '../types/InputStatus';
import React, { useEffect, useRef, useState } from 'react';

import { cn } from '../utils/cn';

export interface InputSliderProps {
	name?: string;
	/** The minimum value of the slider */
	min?: number;
	/** The maximum value of the slider */
	max?: number;
	/** The step value of the slider */
	step?: number;
	/** The value of the slider */
	value?: number;
	/** The function to call when the value changes */
	onChange?: (value: number) => void;
	/** The status of the input */
	status?: InputStatus;
	/** The size of the input */
	size?: InputSize;
	/** Helper text to display below the input */
	helperText?: string;
	/** Whether the slider is required */
	required?: boolean;
	/** Whether the slider is disabled */
	disabled?: boolean;
	/** Whether to show the value label */
	showValue?: boolean;
	/** Custom format for the value display */
	formatValue?: (value: number) => string;
}

export const InputSlider = ({
	name,
	min = 0,
	max = 100,
	step = 1,
	value,
	onChange,
	status = 'default',
	size = 'medium',
	helperText,
	required = false,
	disabled = false,
	showValue = true,
	formatValue,
}: InputSliderProps) => {
	const [localValue, setLocalValue] = useState(value ?? min);
	const [isDragging, setIsDragging] = useState(false);
	const sliderRef = useRef<HTMLDivElement>(null);
	const thumbRef = useRef<HTMLDivElement>(null);

	const sliderId = `${name}-slider`;
	const descriptionId = `${sliderId}-description`;
	const hasError = status === 'error';

	// Update local value when prop value changes
	useEffect(() => {
		if (value !== undefined) {
			setLocalValue(value);
		}
	}, [value]);

	const handleChange = (newValue: number) => {
		const clampedValue = Math.min(Math.max(newValue, min), max);
		setLocalValue(clampedValue);
		onChange?.(clampedValue);
	};

	const handleMouseDown = (e: React.MouseEvent) => {
		if (disabled) return;
		setIsDragging(true);
		updateValueFromEvent(e);
	};

	const handleMouseMove = (e: MouseEvent) => {
		if (!isDragging || disabled) return;
		updateValueFromEvent(e);
	};

	const handleMouseUp = () => {
		setIsDragging(false);
	};

	const updateValueFromEvent = (e: MouseEvent | React.MouseEvent) => {
		if (!sliderRef.current) return;

		const rect = sliderRef.current.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const percentage = x / rect.width;
		const newValue = min + (max - min) * percentage;
		const steppedValue = Math.round(newValue / step) * step;
		handleChange(steppedValue);
	};

	// Add and remove event listeners
	useEffect(() => {
		if (isDragging) {
			document.addEventListener('mousemove', handleMouseMove);
			document.addEventListener('mouseup', handleMouseUp);
		}
		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
			document.removeEventListener('mouseup', handleMouseUp);
		};
	}, [isDragging]);

	const percentage = ((localValue - min) / (max - min)) * 100;

	const displayValue = formatValue ? formatValue(localValue) : localValue;

	return (
		<div className='formItem_content--wrapper'>
			<div className='formItem_content--container'>
				<div
					className={cn('formItem_content--sliderContainer', disabled && 'disabled')}
					data-size={size}
					data-status={status}>
					<div
						ref={sliderRef}
						className='formItem_content--slider'
						onMouseDown={handleMouseDown}
						role='slider'
						aria-valuemin={min}
						aria-valuemax={max}
						aria-valuenow={localValue}
						aria-valuetext={displayValue.toString()}
						aria-disabled={disabled}
						aria-required={required}
						aria-invalid={hasError}
						aria-describedby={helperText ? descriptionId : undefined}
						tabIndex={disabled ? -1 : 0}>
						<div
							data-status={status}
							className='formItem_content--sliderTrack'
							style={{ width: `${percentage}%` }}
						/>
						<div
							ref={thumbRef}
							className='formItem_content--sliderThumb'
							style={{ left: `${percentage}%` }}
						/>
					</div>
					{showValue && (
						<div
							className='formItem_content--sliderValue'
							data-size={size}>
							{displayValue}
						</div>
					)}
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
