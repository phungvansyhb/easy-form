import type { Meta, StoryObj } from '@storybook/react';
import { InputText, FormItem, Form, ReactHookForm } from '@phungvansyhb/easy-form';
import { CurrencyDollarIcon, PhoneXMarkIcon } from '@heroicons/react/24/outline';

const meta = {
	title: 'Components/InputText',
	parameters: {
		layout: 'centered',
	},
	component: InputText,
	tags: ['autodocs'],
	argTypes: {
		status: { control: 'select' },
		size: { control: 'select' },
	},
} satisfies Meta<typeof InputText>;

export default meta;
type Story = StoryObj<typeof meta>;

const InputWrapper = ({ children }: { children: React.ReactNode }) => {
	const form = ReactHookForm.useForm();
	return (
		<div style={{ width: '360px', padding: '40px' }}>
			<Form onSubmit={(data) => console.log(data)} form={form}>
				{children}
			</Form>
		</div>
	);
};

export const Default: Story = {
	render: ({ ...args }) => (
		<InputWrapper>
			<FormItem
				name='input'
				label='Input Label'
				message='This is a message'>
				<InputText {...args} />
			</FormItem>
		</InputWrapper>
	),
	args: {
		status: 'default',
		size: 'medium',
		placeholder: 'Enter your text',
	},
};

export const Error: Story = {
	args: {
		status: 'error',
		size: 'medium',
		placeholder: 'Enter your text',
		iconPrefix: <PhoneXMarkIcon />,
		showWordCount: true,
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
				<InputText {...args} />
			</FormItem>
		</InputWrapper>
	),
};
export const Success: Story = {
	args: {
		status: 'success',
		size: 'medium',
		placeholder: 'Enter your text',
	},
	render: ({ ...args }) => (
		<InputWrapper>
			<FormItem
				status='success'
				name='input'
				label='Input Label'
				message='This is a success message'>
				<InputText {...args} />
			</FormItem>
		</InputWrapper>
	),
};
export const Warning: Story = {
	args: {
		status: 'warning',
		size: 'medium',
		placeholder: 'Enter your text',
	},
	render: ({ ...args }) => (
		<InputWrapper>
			<FormItem
				status='warning'
				name='input'
				label='Input Label'
				message='This is a warning message'>
				<InputText {...args} />
			</FormItem>
		</InputWrapper>
	),
};

export const Disable: Story = {
	args: {
		status: 'default',
		size: 'medium',
		disabled: true,
		iconSuffix: <CurrencyDollarIcon />,
		placeholder: 'Search...',
	},
	render: ({ ...args }) => (
		<InputWrapper>
			<FormItem
				status='default'
				name='input'
				label='Input Label'
				message='This is a default message'>
				<InputText
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
		iconSuffix: <CurrencyDollarIcon />,
		placeholder: 'Search...',
	},
	render: ({ ...args }) => (
		<InputWrapper>
			<FormItem
				status='default'
				name='input'
				label='Input Label'
				message='This is a default message'>
				<InputText
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
				<InputText
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
		showWordCount: true,
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
				<InputText {...args} />
			</FormItem>
		</InputWrapper>
	),
};
