import { Form, FormItem, ReactHookForm, InputSlider } from '@phungvansyhb/easy-form';
import type { Meta, StoryObj } from '@storybook/react';


const meta: Meta<typeof InputSlider> = {
	title: 'Components/InputSlider',
	component: InputSlider,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof InputSlider>;

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
		name: 'slider',
		min: 0,
		max: 100,
		step: 1,
		value: 50,
		showValue: true,
	},
	render: (args) => (
		<InputWrapper>
			<FormItem name='slider' label='Slider' message='This is a message'>
				<InputSlider {...args} />
			</FormItem>
		</InputWrapper>
	),
};

export const WithCustomRange: Story = {
	args: {
		name: 'slider',
		min: 0,
		max: 1000,
		step: 10,
		value: 500,
		showValue: true,
	},
	render: (args) => (
		<InputWrapper >
			<FormItem name='slider' label='Slider' message='This is a message'>
				<InputSlider {...args} />
			</FormItem>
		</InputWrapper>
	),
};

export const WithCustomFormat: Story = {
	args: {
		name: 'slider',
		min: 0,
		max: 100,
		step: 1,
		value: 50,
		showValue: true,
		formatValue: (value) => `${value}%`,
	},
	render: (args) => (
		<InputWrapper>
			<FormItem name='slider' label='Slider' message='This is a message'>
				<InputSlider {...args} />
			</FormItem>
		</InputWrapper>
	),
};
export const WithoutValue: Story = {
	args: {
		name: 'slider',
		min: 0,
		max: 100,
		step: 1,
		value: 50,
		showValue: false,
	},
	render: (args) => (
		<InputWrapper>
			<FormItem name='slider' label='Slider' message='This is a message'>
				<InputSlider {...args} />
			</FormItem>
		</InputWrapper>
	),
};

export const Disabled: Story = {
	args: {
		name: 'slider',
		min: 0,
		max: 100,
		step: 1,
		value: 50,
		disabled: true,
	},
	render: (args) => (
		<InputWrapper>
			<FormItem name='slider' label='Slider' message='This is a message'>
				<InputSlider {...args} />
			</FormItem>
		</InputWrapper>
	),
};
export const WithHelperText: Story = {
	args: {
		name: 'slider',
		min: 0,
		max: 100,
		step: 1,
		value: 50,
		helperText: 'Select a value between 0 and 100',
	},
	render: (args) => (
		<InputWrapper>
			<FormItem name='slider' label='Slider' message='This is a message'>
				<InputSlider {...args} />
			</FormItem>
		</InputWrapper>
	),
};
export const Error: Story = {
	args: {
		name: 'slider',
		min: 0,
		max: 100,
		step: 1,
		value: 50,
		status: 'error',
		helperText: 'This field is required',
	},
	render: (args) => (
		<InputWrapper>
			<FormItem name='slider' label='Slider' message='This is a message' status='error'>
				<InputSlider {...args} />
			</FormItem>
		</InputWrapper>
	),
};
export const DifferentSizes: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '300px' }}>
			<InputSlider
				name='small'
				min={0}
				max={100}
				value={50}
				size='small'
				showValue
			/>
			<InputSlider
				name='medium'
				min={0}
				max={100}
				value={50}
				size='medium'
				showValue
			/>
			<InputSlider
				name='large'
				min={0}
				max={100}
				value={50}
				size='large'
				showValue
			/>
		</div>
	),
};
