import type { Meta, StoryObj } from '@storybook/react';
import {
	FormItem,
	InputText,
	InputCheckbox,
	InputRadio,
	InputNumber,
	InputTextArea,
	zod,
	zodResolver,
	ReactHookForm,
} from 'easy-form';

import { Form } from 'easy-form/src/components/Form';


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
	name: z.string().min(1),
	email: z.string().email(),
	password: z.string().min(8),
	checkbox: z.array(z.string()),
	radio: z.string(),
	number: z.number().min(1),
	textarea: z.string().min(1),
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FormExampleCpn = (args: any) => {
	const defaultValues = {
		name: 'John',
		email: 'john@example.com',
		password: 'password',
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
					name='passwtem'
					label='Password'>
					<InputText />
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
			window.alert('form value : ' + JSON.stringify(value));
		},
	},
};
