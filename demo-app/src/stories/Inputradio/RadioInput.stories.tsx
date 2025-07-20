import type { Meta, StoryObj } from '@storybook/react';
import { InputRadio } from '@phungvansyhb/easy-form';
import { useState } from 'react';

const meta: Meta<typeof InputRadio> = {
	title: 'Components/InputRadio',
	component: InputRadio,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof InputRadio>;

const options = [
	{ value: 'option1', label: 'Option 1' },
	{ value: 'option2', label: 'Option 2' },
	{ value: 'option3', label: 'Option 3' },
];
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const InputRadioWithState = (args: any) => {
	const [value, setValue] = useState(args.value);
	return (
		<InputRadio
			{...args}
			value={value}
			onChange={(value) => setValue(value)}
		/>
	);
};

export const Default: Story = {
	args: {
		name: 'radio-group',
		options,
		direction: 'vertical',
	},
	render: (args) => <InputRadioWithState {...args} />,
};

export const Horizontal: Story = {
	args: {
		name: 'radio-group',
		options,
		direction: 'horizontal',
	},
	render: (args) => <InputRadioWithState {...args} />,
};

export const WithHelperText: Story = {
	args: {
		name: 'radio-group',
		options,
		helperText: 'Please select an option',
	},
	render: (args) => <InputRadioWithState {...args} />,
};

export const WithDisabledOption: Story = {
	args: {
		name: 'radio-group',
		options: [
			{ value: 'option1', label: 'Option 1' },
			{ value: 'option2', label: 'Option 2', disabled: true },
			{ value: 'option3', label: 'Option 3' },
		],
	},
	render: (args) => <InputRadioWithState {...args} />,
};

export const Error: Story = {
	args: {
		name: 'radio-group',
		options,
		status: 'error',
		size: 'large',
		helperText: 'This field is required',
	},
	render: (args) => <InputRadioWithState {...args} />,
};
