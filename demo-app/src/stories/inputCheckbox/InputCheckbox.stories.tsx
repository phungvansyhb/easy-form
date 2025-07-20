import type { Meta, StoryObj } from '@storybook/react';
import { InputCheckbox } from '@phungvansyhb/easy-form';
import { useState } from 'react';

const meta: Meta<typeof InputCheckbox> = {
  title: 'Components/InputCheckbox',
  component: InputCheckbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof InputCheckbox>;

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const InputCheckboxWithState = (args: any) => {
  const [value, setValue] = useState<string[]>([]);
  return <InputCheckbox {...args} value={value} onChange={(value) => setValue(value)} />;
};

export const Default: Story = {
  render: (args) => <InputCheckboxWithState {...args} />,
  args: {
    name: 'checkbox-group',
    options,
    direction: 'vertical',
  },
};

export const Horizontal: Story = {
  render: (args) => <InputCheckboxWithState {...args} />,
  args: {
    name: 'checkbox-group',
    options,
    direction: 'horizontal',
  },
};

export const WithHelperText: Story = {
  render: (args) => <InputCheckboxWithState {...args} />,
  args: {
    name: 'checkbox-group',
    options,
    helperText: 'Please select at least one option',
  },
};

export const WithDisabledOption: Story = {
  render: (args) => <InputCheckboxWithState {...args} />,
  args: {
    name: 'checkbox-group',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2', disabled: true },
      { value: 'option3', label: 'Option 3' },
    ],
  },
};

export const Error: Story = {
  render: (args) => <InputCheckboxWithState {...args} />,
  args: {
    name: 'checkbox-group',
    options,
    status: 'error',
    size: 'large',
    helperText: 'This field is required',
  },
}; 