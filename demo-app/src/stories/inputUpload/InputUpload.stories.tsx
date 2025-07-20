import { Form, FormItem, ReactHookForm, InputUpload } from '@phungvansyhb/easy-form';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof InputUpload> = {
	title: 'Components/InputUpload',
	component: InputUpload,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof InputUpload>;

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
		name: 'upload',
		buttonText: 'Choose Files',
		dragText: 'Drag and drop files here',
	},
	render: (args) => (
		<InputWrapper>
			<FormItem
				name='upload'
				label='Upload Files'
				message='This is a message'>
				<InputUpload
					{...args}
					helperText='This is a helper text'
				/>
			</FormItem>
		</InputWrapper>
	),
};

export const MultipleFiles: Story = {
	args: {
		name: 'upload',
		multiple: true,
		maxFiles: 3,
		buttonText: 'Choose Files',
		dragText: 'Drag and drop up to 3 files here',
	},
	render: (args) => (
		<InputWrapper>
			<FormItem
				name='upload'
				label='Upload Files'
				message='This is a message'>
				<InputUpload {...args} />
			</FormItem>
		</InputWrapper>
	),
};

export const ImageOnly: Story = {
	args: {
		name: 'upload',
		accept: 'image/*',
		buttonText: 'Choose Images',
		dragText: 'Drag and drop images here',
	},
	render: (args) => (
		<InputWrapper>
			<FormItem
				name='upload'
				label='Upload Images'
				message='This is a message'>
				<InputUpload {...args} />
			</FormItem>
		</InputWrapper>
	),
};

export const WithMaxSize: Story = {
	args: {
		name: 'upload',
		maxSize: 5 * 1024 * 1024, // 5MB
		buttonText: 'Choose Files',
		dragText: 'Drag and drop files here (max 5MB)',
	},
	render: (args) => (
		<InputWrapper>
			<FormItem
				name='upload'
				label='Upload Files'
				message='This is a message'
			>
				<InputUpload {...args} />
			</FormItem>
		</InputWrapper>
	),
};

export const Required: Story = {
	args: {
		name: 'upload',
		required: true,
		buttonText: 'Choose Files',
		dragText: 'Drag and drop files here',
	},
	render: (args) => (
		<InputWrapper>
			<FormItem
				name='upload'
				label='Upload Files'
				message='This is a message'>
				<InputUpload {...args} />
			</FormItem>
		</InputWrapper>
	),
};

export const Disabled: Story = {
	args: {
		name: 'upload',
		disabled: true,
		buttonText: 'Choose Files',
		dragText: 'Drag and drop files here',
	},
	render: (args) => (
		<InputWrapper>
			<FormItem
				name='upload'
				label='Upload Files'
				message='This is a message'>
				<InputUpload {...args} />
			</FormItem>
		</InputWrapper>
	),
};

export const Error: Story = {
	args: {
		name: 'upload',
		status: 'error',
		buttonText: 'Choose Files',
		dragText: 'Drag and drop files here',
	},
	render: (args) => (
		<InputWrapper>
			<FormItem
				name='upload'
				label='Upload Files'
				message='This is a message'
				status='error'>
				<InputUpload {...args} />
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
					label='Small Upload'>
					<InputUpload
						name='small'
						size='small'
						buttonText='Choose Files'
						dragText='Drag and drop files here'
					/>
				</FormItem>
				<FormItem
					name='medium'
					label='Medium Upload'>
					<InputUpload
						name='medium'
						size='medium'
						buttonText='Choose Files'
						dragText='Drag and drop files here'
					/>
				</FormItem>
				<FormItem
					name='large'
					label='Large Upload'>
					<InputUpload
						name='large'
						size='large'
						buttonText='Choose Files'
						dragText='Drag and drop files here'
					/>
				</FormItem>
			</div>
		</InputWrapper>
	),
};
