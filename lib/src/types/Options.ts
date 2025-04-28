export interface RadioOption {
    value: string;
    label: string;
    disabled?: boolean;
}

export interface CheckboxOption {
    value: string;
    label: string;
    disabled?: boolean;
}

export interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
    icon?: React.ReactNode;
}

export interface SelectOptionGroup {
    label: string;
    options: SelectOption[];
    disabled?: boolean;
}

export type SelectOptions = SelectOption[] | SelectOptionGroup[];

// Helper type to check if options are grouped
export const isGroupedOptions = (options: SelectOptions): options is SelectOptionGroup[] => {
    return options.length > 0 && 'options' in options[0];
};