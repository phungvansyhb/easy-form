import { InputSize, InputStatus } from '../types/InputStatus';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import { InputSelect } from './InputSelect';
import { SelectOption } from '../types/Options';
import { cn } from '../utils/cn';

export interface AsyncSelectInputProps {
	name: string;
	/** Function to load options based on search input */
	loadOptions: (inputValue: string) => Promise<SelectOption[]>;
	/** The value of the selected option(s) */
	value?: string | string[];
	/** The function to call when the value changes */
	onChange?: (value: string | string[]) => void;
	/** The status of the input */
	status?: InputStatus;
	/** The size of the input */
	size?: InputSize;
	/** Whether the select is required */
	required?: boolean;
	/** Whether the select is disabled */
	disabled?: boolean;
	/** Placeholder text */
	placeholder?: string;
	/** Whether to show a clear button */
	allowClear?: boolean;
	/** Whether to allow multiple selections */
	multiple?: boolean;
	/** Minimum number of characters to trigger search */
	minSearchLength?: number;
	/** Debounce time in milliseconds */
	debounceTime?: number;
	/** Whether to show loading state */
	showLoading?: boolean;
	/** Custom loading indicator */
	loadingIndicator?: React.ReactNode;
	/** Custom no options found message */
	notFoundRender?: React.ReactNode;
}

export const AsyncSelectInput = ({
	name,
	loadOptions,
	value,
	onChange,
	status = 'default',
	size = 'medium',
	required = false,
	disabled = false,
	placeholder,
	allowClear = false,
	multiple = false,
	minSearchLength = 2,
	debounceTime = 300,
	showLoading = true,
	loadingIndicator,
	notFoundRender,
	...props
}: AsyncSelectInputProps) => {
	const [options, setOptions] = useState<SelectOption[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [searchValue, setSearchValue] = useState('');
	const searchTimeoutRef = useRef<ReturnType<typeof setTimeout>>();
	const [selectedValue, setSelectedValue] = useState<string | string[] | undefined>(value);

	useEffect(() => {
		if (searchTimeoutRef.current) {
			clearTimeout(searchTimeoutRef.current);
		}

		searchTimeoutRef.current = setTimeout(async () => {
			setIsLoading(true);
			try {
				const results = await loadOptions(searchValue);
				setOptions(results);
			} catch (error) {
				console.error('Error loading options:', error);
				setOptions([]);
			} finally {
				setIsLoading(false);
			}
		}, debounceTime);

		return () => {
			if (searchTimeoutRef.current) {
				clearTimeout(searchTimeoutRef.current);
			}
		};
	}, [searchValue, loadOptions, debounceTime]);

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};

	const defaultLoadingIndicator = (
		<div className='formItem_content--loading'>
			<div className='formItem_content--loadingSpinner' />
		</div>
	);

	const defaultNotFoundRender = (
		<div className='formItem_content--noOptions'>
			{searchValue.length < minSearchLength
				? `Type at least ${minSearchLength} characters to search`
				: 'No options found'}
		</div>
	);

	return (
		<div className='formItem_content--asyncSelect'>
			<InputSelect
				name={name}
				options={options}
				value={selectedValue}
				onChange={onChange}
				status={status}
				size={size}
				required={required}
				disabled={disabled}
				placeholder={placeholder}
				allowClear={allowClear}
				allowSearch={true}
				multiple={multiple}
				notFoundRender={notFoundRender || defaultNotFoundRender}
				onInputChange={handleSearch}
				{...props}
			/>
			{showLoading && isLoading && (loadingIndicator || defaultLoadingIndicator)}
		</div>
	);
};
