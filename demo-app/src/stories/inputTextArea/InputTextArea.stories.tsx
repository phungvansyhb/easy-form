import type { Meta, StoryObj } from '@storybook/react';
import { InputTextArea } from '@phungvansyhb/easy-form';

const meta: Meta<typeof InputTextArea> = {
  title: 'Components/InputTextArea',
  component: InputTextArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof InputTextArea>;

export const Default: Story = {
  args: {
    status: 'default',
    size: 'medium',
    placeholder: 'Enter your message',
  },
};

export const WithRows: Story = {
  args: {
    status: 'default',
    size: 'medium',
    rows: 5,
    placeholder: 'Enter your message',
  },
};

export const Resizable: Story = {
  args: {
    status: 'default',
    size: 'medium',
    resizable: true,
    placeholder: 'Enter your message',
  },
};

export const WithWordCount: Story = {
  args: {
    status: 'default',
    size: 'medium',
    maxLength: 200,
    showWordCount: true,
    placeholder: 'Enter your message (max 200 characters)',
  },
};

export const Error: Story = {
  args: {
    status: 'error',
    size: 'medium',
    placeholder: 'Enter your message',
  },
}; 