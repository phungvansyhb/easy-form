import {
	FormItem,
	InputCheckbox,
	InputDatePicker,
	InputNumber,
	InputRadio,
	InputText,
	InputTextArea,
	ReactHookForm,
	zod,
	zodResolver,
	AsyncSelectInput,
	Form,
	InputPassword,
	InputSlider,
	InputUpload
} from '@phungvansyhb/easy-form';
import type { Meta, StoryObj } from '@storybook/react';


const meta: Meta<typeof Form> = {
	title: 'Components/FormExample',
	component: Form,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Form>;
const { z } = zod;
const schema = z.object({
	country: z.string().min(1),
	name: z.string().min(1),
	email: z.string().email(),
	password: z.string().min(8),
	avatar: z.array(z.any()),
	birthday: z.date(),
	age: z.number().min(1),
	checkbox: z.array(z.string()),
	radio: z.string(),
	number: z.number().min(1),
	textarea: z.string().min(1),
});

const mockOptions = [
	{ label: 'Vietnam', value: 'vietnam' },
	{ label: 'United States', value: 'united-states' },
	{ label: 'France', value: 'france' },
	{ label: 'Germany', value: 'germany' },
	{ label: 'Italy', value: 'italy' },
	{ label: 'Spain', value: 'spain' },
	{ label: 'Portugal', value: 'portugal' },
	{ label: 'Japan', value: 'japan' },
];

const mockLoadOptions = async (inputValue: string): Promise<typeof mockOptions> => {
	// Simulate API delay
	await new Promise((resolve) => setTimeout(resolve, 1000));

	// Filter options based on input
	return mockOptions.filter((option) =>
		option.label.toLowerCase().includes(inputValue.toLowerCase())
	);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FormExampleCpn = (args: any) => {
	const defaultValues = {
		name: 'John',
		email: 'john@example.com',
		password: 'password',
		avatar: [],
		birthday: new Date(),
		country: 'Vietnam',
		age: 1,
		checkbox: ['option1', 'option2'],
		radio: 'option1',
		number: 1,
		textarea: 'textarea',
	};
	const form = ReactHookForm.useForm({
		resolver: zodResolver(schema),
		defaultValues,
	});

	return (
		<div className='w-full'>
			<Form
				{...args}
				form={form}>
				<div className='flex gap-4'>
					<FormItem
						name='name'
						label='Name'>
						<InputText />
					</FormItem>
					<FormItem
						name='email'
						label='Email'>
						<InputText />
					</FormItem>
				</div>
				<FormItem
					name='age'
					label='What is your age?'>
					<InputSlider />
				</FormItem>
				<FormItem
					name='birthday'
					label='When is your birthday?'>
					<InputDatePicker
						size='medium'
						label=''
					/>
				</FormItem>
				<FormItem
					name='country'
					label='Country'>
					<AsyncSelectInput
						size='medium'
						loadOptions={mockLoadOptions}
						name='country'
					/>
				</FormItem>
				<FormItem
					name='avatar'
					label='Avatar'>
					<InputUpload />
				</FormItem>
				<FormItem
					name='passwtem'
					label='Password'>
					<InputPassword name='password' />
				</FormItem>
				<FormItem
					name='number'
					label='Number'>
					<InputNumber />
				</FormItem>
				<div className='flex gap-4'>
					<FormItem
						className='flex-1'
						name='checkbox'
						label='Checkbox'>
						<InputCheckbox
							name='checkbox'
							options={[
								{ value: 'option1', label: 'Option 1' },
								{ value: 'option2', label: 'Option 2' },
								{ value: 'option3', label: 'Option 3' },
							]}
						/>
					</FormItem>
					<FormItem
						name='radio'
						label='Radio'>
						<InputRadio
							name='radio'
							options={[
								{ value: 'option1', label: 'Option 1' },
								{ value: 'option2', label: 'Option 2' },
								{ value: 'option3', label: 'Option 3' },
							]}
						/>
					</FormItem>
				</div>

				<FormItem
					name='textarea'
					label='Textarea'>
					<InputTextArea
						rows={10}
						resizable
					/>
				</FormItem>
				<div className='flex gap-4 justify-center'>
					<button
						type='submit'
						className=' rounded border py-1 px-4 bg-blue-500 text-white'>
						Submit
					</button>
					<button
						className='rounded border py-1 px-4 bg-red-500 text-white'
						type='reset'
						onClick={() => form.reset(defaultValues)}>
						Reset
					</button>
				</div>
			</Form>
		</div>
	);
};

export const FormExample: Story = {
	render: (args) => <FormExampleCpn {...args} />,
	args: {
		onSubmit: (value) => {
			window.alert('form value : ' + JSON.stringify(value.avatar, null, 2));
		},
	},
};
