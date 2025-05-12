import { InputSize, InputStatus } from '../types/InputStatus';
import React, { forwardRef, useCallback, useState } from 'react';

import { cn } from '../utils/cn';

export interface InputRatingProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'size'> {
	/** The name of the input */
	name?: string;
	/** The status of the input */
	status?: InputStatus;
	/** The size of the input */
	size?: InputSize;
	/** The maximum number of stars */
	maxRating?: number;
	/** Whether to allow half stars */
	allowHalf?: boolean;
	/** The current rating value */
	value?: number;
	/** Whether the input is disabled */
	disabled?: boolean;
	/** The function to call when rating changes */
	onChange?: (value: number) => void;
	/** Helper text to display below the input */
	helperText?: string;
	/** The color of the stars when active */
	activeColor?: string;
	/** The color of the stars when inactive */
	inactiveColor?: string;
}

export const InputRating = forwardRef<HTMLInputElement, InputRatingProps>(
	(
		{
			name,
			status = 'default',
			size = 'medium',
			maxRating = 5,
			allowHalf = true,
			value = 0,
			disabled = false,
			onChange,
			helperText,
			activeColor = '#ffd700',
			inactiveColor = '#d9d9d9',
			...props
		},
		ref
	) => {
		const [hoverValue, setHoverValue] = useState<number | null>(null);

		const handleMouseMove = useCallback(
			(event: React.MouseEvent<HTMLDivElement>, index: number) => {
				if (disabled) return;

				const starElement = event.currentTarget;
				const { left, width } = starElement.getBoundingClientRect();
				const position = event.clientX - left;

				if (allowHalf && position < width / 2) {
					setHoverValue(index + 0.5);
				} else {
					setHoverValue(index + 1);
				}
			},
			[allowHalf, disabled]
		);

		const handleMouseLeave = useCallback(() => {
			setHoverValue(null);
		}, []);

		const handleClick = useCallback(
			(event: React.MouseEvent<HTMLDivElement>, index: number) => {
				if (disabled) return;

				const starElement = event.currentTarget;
				const { left, width } = starElement.getBoundingClientRect();
				const position = event.clientX - left;

				if (allowHalf && position < width / 2) {
					onChange?.(index + 0.5);
				} else {
					onChange?.(index + 1);
				}
			},
			[disabled, onChange, allowHalf]
		);

		const renderStar = useCallback(
			(index: number) => {
				const currentValue = hoverValue ?? value;
				const isActive = currentValue >= index + 1;
				const isHalfActive = allowHalf && currentValue === index + 0.5;

				return (
					<div
						key={index}
						className={cn(
							'formItem_content--star',
							isActive && 'active',
							isHalfActive && 'half-active',
							disabled && 'disabled'
						)}
						onMouseMove={(e) => handleMouseMove(e, index)}
						onClick={(e) => handleClick(e, index)}
						style={
							{
								'--active-color': activeColor,
								'--inactive-color': inactiveColor,
							} as React.CSSProperties
						}
						role='button'
						tabIndex={disabled ? -1 : 0}
						aria-label={`Rate ${index + 1} out of ${maxRating}`}>
						<svg
							viewBox='0 0 24 24'
							fill={isActive ? 'var(--active-color)' : 'var(--inactive-color)'}
							stroke='none'>
							<path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' />
						</svg>
						{allowHalf && (
							<svg
								viewBox='0 0 24 24'
								fill={isHalfActive ? 'var(--active-color)' : 'transparent'}
								stroke='none'
								className='half'>
								<path d='M12 17.27L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' />
							</svg>
						)}
					</div>
				);
			},
			[
				allowHalf,
				value,
				hoverValue,
				disabled,
				handleClick,
				handleMouseMove,
				activeColor,
				inactiveColor,
				maxRating,
			]
		);

		return (
			<div className='formItem_content--wrapper'>
				<input
					type='hidden'
					ref={ref}
					name={name}
					value={value}
					{...props}
				/>
				<div
					className={cn('formItem_content--rating')}
					data-size={size}
					data-status={status}
					onMouseLeave={handleMouseLeave}
					role='group'
					aria-label={`Rating: ${value} out of ${maxRating}`}
					data-name={name}>
					{Array.from({ length: maxRating }, (_, index) => renderStar(index))}
				</div>
				{helperText && (
					<div className='formItem_content--footer'>
						<span
							className='helper-text'
							data-status={status}>
							{helperText}
						</span>
					</div>
				)}
			</div>
		);
	}
);
