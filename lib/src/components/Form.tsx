import React, { useEffect } from 'react';
import { FormProvider, UseFormProps, UseFormReturn, FieldValues } from 'react-hook-form';
interface FormProps<T extends FieldValues> extends UseFormProps {
	children: React.ReactNode;
	form: UseFormReturn<T>;
	onSubmit: (data: T) => void;
}

export const Form = <T extends FieldValues>({ children, form, onSubmit }: FormProps<T>) => {
	return (
		<FormProvider {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>{children}</form>
		</FormProvider>
	);
};
