import type { Meta, StoryObj } from '@storybook/react';
import { AsyncSelectInput } from 'easy-form/src/components/AsyncSelectInput';
import { useState } from 'react';

const meta = {
	title: 'Components/AsyncSelect',
	component: AsyncSelectInput,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof AsyncSelectInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// Mock data and API call
const mockOptions = [
	{ label: 'Apple', value: 'apple' },
	{ label: 'Banana', value: 'banana' },
	{ label: 'Orange', value: 'orange' },
	{ label: 'Mango', value: 'mango' },
	{ label: 'Pineapple', value: 'pineapple' },
	{ label: 'Strawberry', value: 'strawberry' },
	{ label: 'Blueberry', value: 'blueberry' },
	{ label: 'Raspberry', value: 'raspberry' },
];

const mockLoadOptions = async (inputValue: string): Promise<typeof mockOptions> => {
	// Simulate API delay
	await new Promise((resolve) => setTimeout(resolve, 1000));

	// Filter options based on input
	return mockOptions.filter((option) =>
		option.label.toLowerCase().includes(inputValue.toLowerCase())
	);
};

// Basic usage
export const Basic: Story = {
	args: {
		name: 'async-select',
		placeholder: 'Search fruits...',
		loadOptions: mockLoadOptions,
	},
};

// With multiple selection
export const Multiple: Story = {
	args: {
		name: 'async-select-multiple',
		placeholder: 'Search fruits...',
		loadOptions: mockLoadOptions,
		multiple: true,
	},
};

// With custom loading indicator
export const CustomLoading: Story = {
	args: {
		name: 'async-select-custom-loading',
		placeholder: 'Search fruits...',
		loadOptions: mockLoadOptions,
		loadingIndicator: <div style={{ color: 'blue' }}>Loading...</div>,
	},
};

// With minimum search length
export const MinSearchLength: Story = {
	args: {
		name: 'async-select-min-length',
		placeholder: 'Search fruits...',
		loadOptions: mockLoadOptions,
		minSearchLength: 3,
	},
};

// With different sizes
const SizesComponent = () => (
	<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
		<AsyncSelectInput
			name='async-select-small'
			placeholder='Small size'
			loadOptions={mockLoadOptions}
			size='small'
		/>
		<AsyncSelectInput
			name='async-select-medium'
			placeholder='Medium size'
			loadOptions={mockLoadOptions}
			size='medium'
		/>
		<AsyncSelectInput
			name='async-select-large'
			placeholder='Large size'
			loadOptions={mockLoadOptions}
			size='large'
		/>
	</div>
);

export const Sizes: Story = {
	args: {
		name: 'async-select-sizes',
		loadOptions: mockLoadOptions,
	},
	render: () => <SizesComponent />,
};

// With different statuses
const StatusesComponent = () => (
	<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
		<AsyncSelectInput
			name='async-select-default'
			placeholder='Default status'
			loadOptions={mockLoadOptions}
			status='default'
		/>
		<AsyncSelectInput
			name='async-select-error'
			placeholder='Error status'
			loadOptions={mockLoadOptions}
			status='error'
		/>
		<AsyncSelectInput
			name='async-select-warning'
			placeholder='Warning status'
			loadOptions={mockLoadOptions}
			status='warning'
		/>
		<AsyncSelectInput
			name='async-select-success'
			placeholder='Success status'
			loadOptions={mockLoadOptions}
			status='success'
		/>
	</div>
);

export const Statuses: Story = {
	args: {
		name: 'async-select-statuses',
		loadOptions: mockLoadOptions,
	},
	render: () => <StatusesComponent />,
};

// Interactive example with state management
const InteractiveComponent = () => {
	const [value, setValue] = useState<string | string[]>('');

	const handleChange = (newValue: string | string[]) => {
		setValue(newValue);
	};

	return (
		<div style={{ width: '300px' }}>
			<AsyncSelectInput
				name='async-select-interactive'
				placeholder='Search fruits...'
				loadOptions={mockLoadOptions}
				value={value}
				onChange={handleChange}
			/>
		</div>
	);
};

export const Interactive: Story = {
	args: {
		name: 'async-select-interactive',
		loadOptions: mockLoadOptions,
	},
	render: () => <InteractiveComponent />,
};
