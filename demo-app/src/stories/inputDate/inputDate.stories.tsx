import type { Meta, StoryObj } from '@storybook/react';
import { InputDatePicker,Form, ReactHookForm , FormItem } from '@phungvansyhb/easy-form';

const meta = {
	title: 'Components/InputDate',
	parameters: {
		layout: 'centered',
	},
	component: InputDatePicker,
	tags: ['autodocs'],
	argTypes: {
		status: { control: 'select' },
		size: { control: 'select' },
	},
} satisfies Meta<typeof InputDatePicker>;

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
				<InputDatePicker {...args} />
			</FormItem>
		</InputWrapper>
	),
	args: {
		status: 'default',
		size: 'medium',
        inputName:'date',
        placeHolder:'Select date',
        valueFormat:'DD/MM/YYYY',
        showLunarDate:true,
		// value?: Date,
		// onChange?: (date: Date) => void;
		// localeOptions?: Intl.DateTimeFormatOptions;
		// calendarIcon?: React.ReactNode;
		// label?: string;
		// inputName?: string;
		// required?: boolean;
		// maxDate?: Date;
		// minDate?: Date;
		lunarFormat: 'name',
		showToday: true,
		locale: 'vi-VN',
		
	},
};

export const Error: Story = {
	args: {
		status: 'error',
		size: 'medium',
		placeHolder: 'Enter your text',
        inputName:'date',
        valueFormat:'DD/MM/YYYY',
        showLunarDate:true,
	},
	render: ({ ...args }) => (
		<InputWrapper>
			<FormItem
				status='error'
				name='input'
				label='Input Label'
				message='This is a error message'>
				<InputDatePicker {...args} />
			</FormItem>
		</InputWrapper>
	),
};
