import type { Meta, StoryObj } from '@storybook/react';
import { Form, FormItem, ReactHookForm, InputRating } from '@phungvansyhb/easy-form';

const meta = {
	title: 'Components/InputRating',
	component: InputRating,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof InputRating>;

export default meta;
type Story = StoryObj<typeof meta>;

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
		value: 3.5,
	},
	render: (args) => (
		<InputWrapper>
			<FormItem
				name='rating'
				label='Rating'
				message='This is a message'>
				<InputRating {...args} />
			</FormItem>
		</InputWrapper>
	),
};

export const NoHalfStars: Story = {
	args: {
		value: 3,
		allowHalf: false,
	},
	render: (args) => (
		<InputWrapper>
			<FormItem
				name='rating'
				label='Rating'
				message='This is a message'>
				<InputRating {...args} />
			</FormItem>
		</InputWrapper>
	),
};

export const CustomColors: Story = {
	args: {
		value: 4,
		activeColor: '#ff4d4f',
		inactiveColor: '#ffa39e',
	},
	render: (args) => (
		<InputWrapper>
			<FormItem
				name='rating'
				label='Rating'
				message='This is a message'>
				<InputRating {...args} />
			</FormItem>
		</InputWrapper>
	),
};

export const Sizes: Story = {
	args: {},
	render: () => (
		<InputWrapper>
			<FormItem
				name='rating'
				label='Small'
				message='This is a message'>
				<InputRating
					size='small'
					value={3}
				/>
			</FormItem>
			<FormItem
				name='rating'
				label='Medium'
				message='This is a message'>
				<InputRating
					size='medium'
					value={3}
				/>
			</FormItem>
			<FormItem
				name='rating'
				label='Large'
				message='This is a message'>
				<InputRating
					size='large'
					value={3}
				/>
			</FormItem>
		</InputWrapper>
	),
};

export const Statuses: Story = {
	render: () => (
		<InputWrapper>
			<FormItem
				name='rating'
				label='Rating'
				status='default'
				message='This is a message'>
				<InputRating
					status='default'
					value={3}
					helperText='Default status'
				/>
			</FormItem>
			<FormItem
				name='rating'
				label='Error'
				status='error'
				message='This is a message'>
				<InputRating
					status='error'
					value={3}
					helperText='Error status'
				/>
			</FormItem>
			<FormItem
				name='rating'
				label='Warning'
				status='warning'
				message='This is a message'>
				<InputRating
					status='warning'
					value={3}
					helperText='Warning status'
				/>
			</FormItem>
			<FormItem
				name='rating'
				label='Success'
				status='success'
				message='This is a message'>
				<InputRating
					status='success'
					value={3}
					helperText='Success status'
				/>
			</FormItem>
		</InputWrapper>
	),
};

export const Disabled: Story = {
	args: {
		value: 3.5,
		disabled: true,
	},
	render: (args) => (
		<InputWrapper>
			<FormItem
				name='rating'
				label='Rating'
				message='This is a message'>
				<InputRating {...args} />
			</FormItem>
		</InputWrapper>
	),
};

export const CustomMaxRating: Story = {
	args: {
		value: 7,
		maxRating: 10,
	},
	render: (args) => (
		<InputWrapper>
			<FormItem
				name='rating'
				label='Rating'
				message='This is a message'>
				<InputRating {...args} />
			</FormItem>
		</InputWrapper>
	),
};
