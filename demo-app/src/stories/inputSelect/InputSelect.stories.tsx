import type { Meta, StoryObj } from '@storybook/react';
import { InputSelect,FormItem,Form , ReactHookForm, SelectOption, SelectOptionGroup } from '@phungvansyhb/easy-form';
import { UserIcon } from '@heroicons/react/24/outline';
import { PhoneIcon } from '@heroicons/react/16/solid';

const meta = {
	title: 'Components/InputSelect',
	parameters: {
		layout: 'centered',
	},
	component: InputSelect,
	tags: ['autodocs'],
	argTypes: {
		status: { control: 'select' },
		size: { control: 'select' },
	},
} satisfies Meta<typeof InputSelect>;

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
const simpleOptions:SelectOption[] = [
    { value: '1', label: 'Option 1' , icon: <UserIcon width={20} height={20}/> },
    { value: '2', label: 'Option 2' , icon: <UserIcon width={20} height={20}/> },
    
  ];
  const ListLengthOptions:SelectOption[] = [
    { value: '1', label: 'Option 1' , icon: <UserIcon width={20} height={20}/> },
    { value: '2', label: 'Option 2' , icon: <UserIcon width={20} height={20}/> },
    { value: '3', label: 'Option 3' , icon: <UserIcon width={20} height={20}/> },
    { value: '4', label: 'Option 4' , icon: <UserIcon width={20} height={20}/> },
    { value: '5', label: 'Option 5' , icon: <UserIcon width={20} height={20}/> },
    { value: '6', label: 'Option 6' , icon: <UserIcon width={20} height={20}/> },
    { value: '7', label: 'Option 7' , icon: <UserIcon width={20} height={20}/> },
    { value: '8', label: 'Option 8' , icon: <UserIcon width={20} height={20}/> },
    { value: '9', label: 'Option 9' , icon: <UserIcon width={20} height={20}/> },
    { value: '10', label: 'Option 10' , icon: <UserIcon width={20} height={20}/> },

  ];
  const groupedOptions : SelectOptionGroup[] = [
    {
      label: 'Group A',
      options: [
        { value: '1', label: 'Option 1' ,  icon: <UserIcon width={20} height={20}/> },
        { value: '2', label: 'Option 2' ,  icon: <UserIcon width={20} height={20}/> },
      ]
    },
    {
      label: 'Group B',
      options: [
        { value: '3', label: 'Option 3 ' , icon : <PhoneIcon width={20} height={20}/> },
        { value: '4', label: 'Option 4' , icon : <PhoneIcon width={20} height={20}/> },
      ]
    }
  ];
export const Default: Story = {
	render: ({ ...args }) => (
		<InputWrapper>
			<FormItem
				name='input'
				label='Input Label'
				message='This is a message'>
				<InputSelect {...args} />
			</FormItem>
		</InputWrapper>
	),
	args: {
		name: 'input1',
        allowClear: true,
        allowSearch: true,
		options: groupedOptions,
		status: 'default',
		size: 'small',
		placeholder: 'Enter your text',
	},
};

export const Error: Story = {
	args: {
		name: 'input2',
		options: [
			{ value: 'option1', label: 'Option 1' },
			{ value: 'option2', label: 'Option 2' },
			{ value: 'option3', label: 'Option 3' },
		],
		status: 'error',
		size: 'medium',
		placeholder: 'Enter your text',
		helperText: 'This is a helper text',
	},
	render: ({ ...args }) => (
		<InputWrapper>
			<FormItem
				status='error'
				name='input'
				label='Input Label'
				message='This is a error message'>
				<InputSelect {...args} />
			</FormItem>
		</InputWrapper>
	),
};
export const Success: Story = {
	args: {
		status: 'success',
		size: 'medium',
		placeholder: 'Enter your text',
        name: 'input',
		options: simpleOptions,
	},
	render: ({ ...args }) => (
		<InputWrapper>
			<FormItem
				status='success'
				name='input'
				label='Input Label'
				message='This is a success message'>
				<InputSelect {...args} />
			</FormItem>
		</InputWrapper>
	),
};
export const Warning: Story = {
	args: {
		status: 'warning',
		size: 'medium',
		placeholder: 'Enter your text',
        name: 'input',
		options:simpleOptions,
	},
	render: ({ ...args }) => (
		<InputWrapper>
			<FormItem
				status='warning'
				name='input'
				label='Input Label'
				message='This is a warning message'>
				<InputSelect {...args} />
			</FormItem>
		</InputWrapper>
	),
};

export const Disable: Story = {
	args: {
		status: 'default',
		size: 'medium',
		disabled: true,
		placeholder: 'Search...',
        name: 'input',
		options: simpleOptions,
	},
	render: ({ ...args }) => (
		<InputWrapper>
			<FormItem
				status='default'
				name='input'
				label='Input Label'
				message='This is a default message'>
				<InputSelect
					{...args}
				/>
			</FormItem>
		</InputWrapper>
	),
};

export const GroupedOptions: Story = {
	args: {
		status: 'default',
		size: 'medium',
		helperText: 'Please enter your username',
		placeholder: 'Username',
        name: 'input',
		options: groupedOptions,
	},
	render: ({ ...args }) => (
		<InputWrapper>
			<FormItem
				status='default'
				name='input'
				label='Input Label'
				message='This is a default message'>
				<InputSelect
					{...args}
				/>
			</FormItem>
		</InputWrapper>
	),
};

export const AllowSearch: Story = {
	args: {
		status: 'default',
		size: 'medium',
		helperText: 'Type to search',
		placeholder: 'Username',
        name: 'input',
		options: ListLengthOptions,
        allowSearch: true,
	},
	render: ({ ...args }) => (
		<InputWrapper>
			<FormItem
				status='default'
				name='input'
				label='Input Label'
				message='This is a default message'>
				<InputSelect
					{...args}
				/>
			</FormItem>
		</InputWrapper>
	),
};

export const AllowMultiple: Story = {
	args: {
		status: 'default',
		size: 'medium',
		helperText: 'Type to search',
		placeholder: 'Username',
		name: 'input',
		options: ListLengthOptions,
		allowSearch: true,
		multiple: true,
	},
	render: ({ ...args }) => (
		<InputWrapper>
			<FormItem
				status='default'
				name='input'
				label='Select multiple options'
				message='This is a default message'>
				<InputSelect {...args} />
			</FormItem>
		</InputWrapper>
	),
};