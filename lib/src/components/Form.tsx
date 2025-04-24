import React, { useEffect } from 'react';
import { FormProvider, UseFormProps, UseFormReturn, FieldValues } from 'react-hook-form';
interface FormProps<T extends FieldValues> extends UseFormProps {
	children: React.ReactNode;
  className?: string;
	form: UseFormReturn<T>;
	onSubmit: (data: T) => void;
}
/**
 * Form is a wrapper component that allows you to create form with react-hook-form.You can fully control with form instance props.
 */
export const Form = <T extends FieldValues>({ children, form, onSubmit, className }: FormProps<T>) => {
	return (
		<FormProvider {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className={className}>{children}</form>
		</FormProvider>
	);
};
