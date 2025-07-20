import { Form, FormItem, ReactHookForm, InputPassword } from '@phungvansyhb/easy-form';
import type { Meta, StoryObj } from '@storybook/react';


const meta: Meta<typeof InputPassword> = {
	title: 'Components/InputPassword',
	component: InputPassword,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof InputPassword>;

const InputWrapper = ({ children }: { children: React.ReactNode }) => {
	const form = ReactHookForm.useForm();
	return (
		<div style={{ width: '360px', padding: '40px' }}>
			<Form
				onSubmit={(data) => console.log(data)}
				form={form}>
				{children}
			</Form>
		</div>
	);
};

export const Default: Story = {
	args: {
		name: 'password',
		placeholder: 'Enter your password',
	},
	render: (args) => (
		<InputWrapper>
			<FormItem
				name='password'
				label='Password'
				message='This is a message'>
				<InputPassword {...args} />
			</FormItem>
		</InputWrapper>
	),
};

export const WithInitialShowPassword: Story = {
	args: {
		name: 'password',
		placeholder: 'Enter your password',
		showPassword: true,
	},
	render: (args) => (
		<InputWrapper>
			<FormItem
				name='password'
				label='Password'
				message='This is a message'>
				<InputPassword {...args} />
			</FormItem>
		</InputWrapper>
	),
};

export const WithHelperText: Story = {
	args: {
		name: 'password',
		placeholder: 'Enter your password',
		helperText: 'Password must be at least 8 characters long',
	},
	render: (args) => (
		<InputWrapper>
			<FormItem
				name='password'
				label='Password'
				message='This is a message'>
				<InputPassword {...args} />
			</FormItem>
		</InputWrapper>
	),
};

export const Required: Story = {
	args: {
		name: 'password',
		placeholder: 'Enter your password',
		required: true,
	},
	render: (args) => (
		<InputWrapper>
			<FormItem
				name='password'
				label='Password'
				message='This is a message'>
				<InputPassword {...args} />
			</FormItem>
		</InputWrapper>
	),
};

export const Disabled: Story = {
	args: {
		name: 'password',
		placeholder: 'Enter your password',
		disabled: true,
	},
	render: (args) => (
		<InputWrapper>
			<FormItem
				name='password'
				label='Password'
				message='This is a message'>
				<InputPassword {...args} />
			</FormItem>
		</InputWrapper>
	),
};

export const Error: Story = {
	args: {
		name: 'password',
		placeholder: 'Enter your password',
		status: 'error',
	},
	render: (args) => (
		<InputWrapper>
			<FormItem
				name='password'
				label='Password'
				message='This is a message'
				status='error'>
				<InputPassword {...args} />
			</FormItem>
		</InputWrapper>
	),
};

export const DifferentSizes: Story = {
	render: () => (
		<InputWrapper>
			<div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
				<FormItem
					name='small'
					label='Small Password'>
					<InputPassword
						name='small'
						placeholder='Enter your password'
						size='small'
					/>
				</FormItem>
				<FormItem
					name='medium'
					label='Medium Password'>
					<InputPassword
						name='medium'
						placeholder='Enter your password'
						size='medium'
					/>
				</FormItem>
				<FormItem
					name='large'
					label='Large Password'>
					<InputPassword
						name='large'
						placeholder='Enter your password'
						size='large'
					/>
				</FormItem>
			</div>
		</InputWrapper>
	),
};
