import { InputSize, InputStatus } from '../types/InputStatus';
import React, { useEffect, useRef, useState } from 'react';
import { SelectOption, SelectOptions, isGroupedOptions } from '../types/Options';

import { cn } from '../utils/cn';

export interface InputSelectProps {
	name: string;
	/** The options to display in the dropdown , it can be an array of options or an array of option groups */
	options: SelectOptions;
	/** The position of the option icon */
	optionIconPosition?: 'left' | 'right';
	/** The value of the selected option(s) */
	value?: string | string[];
	/** The function to call when the value changes */
	onChange?: (value: string | string[]) => void;
	/** The status of the input */
	status?: InputStatus;
	/** The size of the input */
	size?: InputSize;
	/** Helper text to display below the input */
	helperText?: string;
	/** Whether the select is required */
	required?: boolean;
	/** Whether the select is disabled */
	disabled?: boolean;
	/** Placeholder text */
	placeholder?: string;
	/** Whether to show a clear button */
	allowClear?: boolean;
	/** Whether to show a search input */
	allowSearch?: boolean;
	/** Whether to show a no options found message */
	notFoundRender?: React.ReactNode;
	/** Whether to allow multiple selections */
	multiple?: boolean;
	/** Function to call when the search input changes */
	onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputSelect = ({
	name,
	options,
	optionIconPosition = 'left',
	value,
	onChange,
	status = 'default',
	size = 'medium',
	helperText,
	required = false,
	disabled = false,
	placeholder,
	allowClear = false,
	allowSearch = false,
	notFoundRender,
	multiple = false,
	onInputChange,
	...props
}: InputSelectProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [searchValue, setSearchValue] = useState('');
	const [selectedOptions, setSelectedOptions] = useState<SelectOption[]>([]);
	const [hoveredIndex, setHoveredIndex] = useState(-1);
	const wrapperRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	const selectId = `${name}-select`;
	const descriptionId = `${selectId}-description`;
	const hasError = status === 'error';

	const allOptions = React.useMemo(() => {
		if (isGroupedOptions(options)) {
			return options.flatMap((group) => group.options);
		}
		return options;
	}, [options]);

	// Find selected options when value changes
	useEffect(() => {
		if (value) {
			const values = Array.isArray(value) ? value : [value];
			const options = allOptions.filter((opt) => values.includes(opt.value));
			setSelectedOptions(options);
		} else {
			setSelectedOptions([]);
		}
	}, [value, allOptions]);

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	const handleSelect = (option: SelectOption) => {
		if (multiple) {
			const newSelectedOptions = selectedOptions.some((opt) => opt.value === option.value)
				? selectedOptions.filter((opt) => opt.value !== option.value)
				: [...selectedOptions, option];
			setSelectedOptions(newSelectedOptions);
			onChange?.(newSelectedOptions.map((opt) => opt.value));
		} else {
			onChange?.(option.value);
			setSelectedOptions([option]);
			setIsOpen(false);
		}
		setSearchValue('');
	};

	const handleClear = (e: React.MouseEvent) => {
		e.stopPropagation();
		onChange?.(multiple ? [] : '');
		setSelectedOptions([]);
		setSearchValue('');
	};

	const handleRemoveOption = (optionValue: string, e: React.MouseEvent) => {
		e.stopPropagation();
		const newSelectedOptions = selectedOptions.filter((opt) => opt.value !== optionValue);
		setSelectedOptions(newSelectedOptions);
		onChange?.(newSelectedOptions.map((opt) => opt.value));
	};

	// Filter options based on search
	const filteredOptions = React.useMemo(() => {
		if (!searchValue) return options;

		if (isGroupedOptions(options)) {
			return options
				.map((group) => ({
					...group,
					options: group.options.filter((option) =>
						option.label.toLowerCase().includes(searchValue.toLowerCase())
					),
				}))
				.filter((group) => group.options.length > 0);
		}

		return options.filter((option) =>
			option.label.toLowerCase().includes(searchValue.toLowerCase())
		);
	}, [options, searchValue]);

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (!isOpen) {
			if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
				e.preventDefault();
				setIsOpen(true);
			}
			return;
		}

		switch (e.key) {
			case 'ArrowDown':
				e.preventDefault();
				setHoveredIndex((prev) => {
					const nextIndex = prev + 1;
					return nextIndex >= allOptions.length ? 0 : nextIndex;
				});
				break;
			case 'ArrowUp':
				e.preventDefault();
				setHoveredIndex((prev) => {
					const nextIndex = prev - 1;
					return nextIndex < 0 ? allOptions.length - 1 : nextIndex;
				});
				break;
			case 'Enter':
				e.preventDefault();
				if (hoveredIndex >= 0 && hoveredIndex < allOptions.length) {
					handleSelect(allOptions[hoveredIndex]);
					if (!multiple) {
						setIsOpen(false);
						inputRef.current?.blur();
					}
				}
				break;
			case 'Escape':
				e.preventDefault();
				setIsOpen(false);
				inputRef.current?.blur();
				break;
		}
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (allowSearch) {
			setSearchValue(e.target.value);
			onInputChange?.(e);
		}
	};

	const handleInputClick = () => {
		if (!allowSearch) {
			setIsOpen(true);
		}
	};

	function SelectOptionCpn({ option, index }: { option: SelectOption; index: number }) {
		const isSelected = selectedOptions.some((opt) => opt.value === option.value);
		return (
			<div
				key={option.value}
				data-size={size}
				className={cn(
					'formItem_content--dropdownOption',
					isSelected ? 'selected' : '',
					option.disabled ? 'disabled' : '',
					index === hoveredIndex ? 'hovered' : ''
				)}
				onClick={() => !option.disabled && handleSelect(option)}
				onMouseEnter={() => setHoveredIndex(index)}
				tabIndex={0}>
				{multiple && (
					<input
						type='checkbox'
						checked={isSelected}
						onChange={() => {}}
						className='formItem_content--checkbox'
					/>
				)}
				{option.icon && (
					<span
						className='formItem_content--dropdownOptionIcon'
						data-size={size}>
						{option.icon}
					</span>
				)}
				{option.label}
			</div>
		);
	}

	return (
		<div
			className='formItem_content--wrapper'
			ref={wrapperRef}>
			<div className='formItem_content--container'>
				<div
					className='formItem_content--selectInput'
					data-size={size}
					data-status={status}>
					<div className={cn('formItem_content--selectedValues')}>
						{selectedOptions.map((option) => (
							<div
								key={option.value}
								data-size={size}
								data-status={status}
								className={cn('formItem_content--selectedTag')}>
								{option.label}
								<button
									type='button'
									className={cn('formItem_content--removeTag')}
									onClick={(e) => handleRemoveOption(option.value, e)}
									aria-label={`Remove ${option.label}`}>
									×
								</button>
							</div>
						))}
						<input
							ref={inputRef}
							autoComplete='off'
							type='text'
							id={selectId}
							name={name}
							value={allowSearch ? searchValue : ''}
							onChange={handleInputChange}
							onClick={handleInputClick}
							onFocus={() => setIsOpen(true)}
							onKeyDown={handleKeyDown}
							placeholder={selectedOptions.length === 0 ? placeholder : ''}
							disabled={disabled}
							required={required}
							aria-required={required}
							aria-invalid={hasError}
							aria-describedby={helperText ? descriptionId : undefined}
							readOnly={!allowSearch}
							className={cn(
								'formItem_content--input',
								selectedOptions.length > 0 && 'has-selected-values'
							)}
							{...props}
						/>
					</div>
					{allowClear && selectedOptions.length > 0 && (
						<button
							type='button'
							className='formItem_content--clearButton'
							onClick={handleClear}
							aria-label='Clear selection'>
							×
						</button>
					)}
					<span className='formItem_content--arrow'>▼</span>
				</div>

				{isOpen && (
					<div className='formItem_content--dropdown'>
						{isGroupedOptions(filteredOptions) &&
							filteredOptions.length > 0 &&
							filteredOptions.map((group, groupIndex) => (
								<div
									key={group.label}
									className='formItem_content--dropdownGroup'>
									<div
										className='formItem_content--dropdownGroupTitle'
										data-size={size}>
										{group.label}
									</div>
									{group.options.map((option, index) => (
										<SelectOptionCpn
											option={option}
											index={index + groupIndex * group.options.length}
											key={index + groupIndex * group.options.length}
										/>
									))}
								</div>
							))}
						{!isGroupedOptions(filteredOptions) &&
							filteredOptions.length > 0 &&
							filteredOptions.map((option, index) => (
								<SelectOptionCpn
									option={option}
									index={index}
									key={index}
								/>
							))}
						{filteredOptions.length === 0 && (
							<div
								className='formItem_content--noOptions'
								data-size={size}>
								{notFoundRender || 'No options found'}
							</div>
						)}
					</div>
				)}
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
