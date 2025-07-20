import type { Meta, StoryObj } from '@storybook/react';
import { InputNumber , FormItem } from '@phungvansyhb/easy-form';
import { CurrencyDollarIcon } from '@heroicons/react/24/outline';

const meta = {
	title: 'Components/InputNumber',
	parameters: {
		layout: 'centered',
	},
	component: InputNumber,
	tags: ['autodocs'],
	argTypes: {
		status: { control: 'select' },
		size: { control: 'select' },
	},
} satisfies Meta<typeof InputNumber>;

export default meta;
type Story = StoryObj<typeof meta>;

const InputWrapper = ({ children }: { children: React.ReactNode }) => (
	<div style={{ width: '360px', padding: '40px' }}>
		{children}
	</div>
);

export const Default: Story = {
	render: ({ ...args }) => (
		<InputWrapper>
			<FormItem
				name='input'
				label='Input Label'
				message='This is a message'>
				<InputNumber {...args} />
			</FormItem>
		</InputWrapper>
	),
	args: {
		status: 'default',
		size: 'medium',
		placeholder: 'Enter your number',
	},
};

export const Error: Story = {
	args: {
		status: 'error',
		size: 'medium',
		placeholder: 'Enter your number',
		icon: <CurrencyDollarIcon />,
		maxLength: 100,
		helperText: 'This is a helper text',
	},
	render: ({ ...args }) => (
		<InputWrapper>
			<FormItem
				status='error'
				name='input'
				label='Input Label'
				message='This is a error message'>
				<InputNumber {...args} />
			</FormItem>
		</InputWrapper>
	),
};
export const Success: Story = {
	args: {
		status: 'success',
		size: 'medium',
		placeholder: 'Enter your number',
	},
	render: ({ ...args }) => (
		<InputWrapper>
			<FormItem
				status='success'
				name='input'
				label='Input Label'
				message='This is a success message'>
				<InputNumber {...args} />
			</FormItem>
		</InputWrapper>
	),
};
export const Warning: Story = {
	args: {
		status: 'warning',
		size: 'medium',
		placeholder: 'Enter your number',
	},
	render: ({ ...args }) => (
		<InputWrapper>
			<FormItem
				status='warning'
				name='input'
				label='Input Label'
				message='This is a warning message'>
				<InputNumber {...args} />
			</FormItem>
		</InputWrapper>
	),
};

export const Disable: Story = {
	args: {
		status: 'default',
		size: 'medium',
		disabled: true,
		icon: <CurrencyDollarIcon />,
		placeholder: 'Search...',
	},
	render: ({ ...args }) => (
		<InputWrapper>
			<FormItem
				status='default'
				name='input'
				label='Input Label'
				message='This is a default message'>
				<InputNumber
					{...args}
					maxLength={50}
				/>
			</FormItem>
		</InputWrapper>
	),
};

export const WithIcon: Story = {
	args: {
		status: 'default',
		size: 'medium',
		placeholder: 'Search...',
        icon : 'cm'
	},
	render: ({ ...args }) => (
		<InputWrapper>
			<FormItem
				status='default'
				name='input'
				label='Input Label'
				message='This is a default message'>
				<InputNumber
					{...args}
					maxLength={50}
				/>
			</FormItem>
		</InputWrapper>
	),
};

export const WithHelperText: Story = {
	args: {
		status: 'default',
		size: 'medium',
		helperText: 'Please enter your username',
		placeholder: 'Username',
	},
	render: ({ ...args }) => (
		<InputWrapper>
			<FormItem
				status='default'
				name='input'
				label='Input Label'
				message='This is a default message'>
				<InputNumber
					{...args}
					maxLength={50}
				/>
			</FormItem>
		</InputWrapper>
	),
};

export const WithWordCount: Story = {
	args: {
		status: 'default',
		size: 'medium',
		maxLength: 100,
		helperText: 'This is a helper text',
		placeholder: 'Enter text...',
	},
	render: ({ ...args }) => (
		<InputWrapper>
			<FormItem
				status='default'
				name='input'
				label='Input Label'
				message='This is a default message'>
				<InputNumber {...args} />
			</FormItem>
		</InputWrapper>
	),
};
