import { InputSize, InputStatus } from '../types/InputStatus';
import React, { useCallback, useRef, useState } from 'react';

import { cn } from '../utils/cn';

export interface FileWithPreview extends File {
	preview?: string;
	fileName?: string;
}

export interface InputUploadProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'size'> {
	/** The name of the input */
	name?: string;
	/** The status of the input */
	status?: InputStatus;
	/** The size of the input */
	size?: InputSize;
	/** The icon to display in the upload button */
	iconUpload?: React.ReactNode;
	/** Helper text to display below the input */
	helperText?: string;
	/** Whether the input is required */
	required?: boolean;
	/** Whether the input is disabled */
	disabled?: boolean;
	/** Accepted file types */
	accept?: string;
	/** Maximum file size in bytes */
	maxSize?: number;
	/** Maximum number of files */
	maxFiles?: number;
	/** Whether to allow multiple files */
	multiple?: boolean;
	/** The function to call when files are selected */
	onChange?: (files: FileWithPreview[]) => void;
	/** Custom upload button text */
	buttonText?: string;
	/** Custom drag and drop text */
	dragText?: string;
}

export const InputUpload = ({
	name,
	status = 'default',
	size = 'medium',
	iconUpload,
	helperText,
	required = false,
	disabled = false,
	accept,
	maxSize,
	maxFiles = 1,
	multiple = false,
	onChange,
	buttonText = 'Choose Files',
	dragText = 'Drag and drop files here',
	value: _value,
	...props
}: InputUploadProps) => {
	const [files, setFiles] = useState<FileWithPreview[]>([]);
	const [isDragging, setIsDragging] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const fileInputRef = useRef<HTMLInputElement>(null);

	const handleFiles = useCallback(
		(newFiles: FileList | null) => {
			if (!newFiles) return;

			const fileArray = Array.from(newFiles);
			const validFiles: FileWithPreview[] = [];

			// Check if adding new files would exceed maxFiles
			if (files.length + fileArray.length > maxFiles) {
				setError(`Maximum ${maxFiles} file${maxFiles > 1 ? 's' : ''} allowed`);
				return;
			}

			// Process each file
			fileArray.forEach((file) => {
				// Check file size
				if (maxSize && file.size > maxSize) {
					setError(
						`File ${file.name} is too large. Maximum size is ${maxSize / 1024 / 1024}MB`
					);
					return;
				} 

				// Create preview for images
				if (file.type.startsWith('image/')) {
					const reader = new FileReader();
					reader.onload = (e) => {
						const fileWithPreview = Object.assign(file, {
							preview: e.target?.result as string,
						}) as FileWithPreview;
						validFiles.push(fileWithPreview);
						if (validFiles.length === fileArray.length) {
							setFiles((prevFiles) => [...prevFiles, ...validFiles]);
							onChange?.([...files, ...validFiles]);
						}
					};
					reader.readAsDataURL(file);
				} else {
					validFiles.push(file);
					if (validFiles.length === fileArray.length) {
						setFiles((prevFiles) => [...prevFiles, ...validFiles]);
						onChange?.([...files, ...validFiles]);
					}
				}
			});
		},
		[maxFiles, maxSize, onChange, files]
	);

	const handleDragOver = useCallback((e: React.DragEvent) => {
		e.preventDefault();
		setIsDragging(true);
	}, []);

	const handleDragLeave = useCallback((e: React.DragEvent) => {
		e.preventDefault();
		setIsDragging(false);
	}, []);

	const handleDrop = useCallback(
		(e: React.DragEvent) => {
			e.preventDefault();
			setIsDragging(false);
			handleFiles(e.dataTransfer.files);
		},
		[handleFiles]
	);

	const handleFileInput = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			handleFiles(e.target.files);
		},
		[handleFiles]
	);

	const removeFile = useCallback(
		(index: number) => {
			const newFiles = files.filter((_, i) => i !== index);
			setFiles(newFiles);
			onChange?.(newFiles);
		},
		[files, onChange]
	);

	return (
		<div className='formItem_content--wrapper'>
			<div className='formItem_content--container'>
				<div
					className={cn(
						'formItem_content--uploadWrapper',
						isDragging && 'dragging',
						disabled && 'disabled'
					)}
					data-size={size}
					data-status={status}
					onDragOver={handleDragOver}
					onDragLeave={handleDragLeave}
					onDrop={handleDrop}>
					<input
						ref={fileInputRef}
						type='file'
						id={`${name}-input`}
						name={name}
						accept={accept}
						multiple={multiple}
						disabled={disabled}
						required={required}
						onChange={handleFileInput}
						className='formItem_content--fileInput'
						{...props}
					/>
					<div
						className='formItem_content--uploadContent'
						data-size={size}
						datat-status={status}>
						{iconUpload ? (
							iconUpload
						) : (
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'>
								<path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
								<polyline points='17 8 12 3 7 8' />
								<line
									x1='12'
									y1='3'
									x2='12'
									y2='15'
								/>
							</svg>
						)}
						<p className='formItem_content--dragText'>{dragText}</p>
					</div>
				</div>
			</div>
			{(helperText || error) && (
				<div className='formItem_content--footer'>
					<span
						className='helper-text'
						data-status={error ? 'error' : status}
						role={error ? 'alert' : undefined}>
						{error || helperText}
					</span>
				</div>
			)}
			{files.length > 0 && (
				<div className='formItem_content--fileList'>
					{files.map((file, index) => (
						<div
							key={index}
							className='formItem_content--fileItem'>
							{file.preview ? (
								<img
									src={file.preview}
									alt={file.name}
									className='formItem_content--filePreview'
								/>
							) : (
								<div className='formItem_content--fileIcon'>
									<svg
										width='16'
										height='16'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'>
										<path d='M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z' />
										<polyline points='13 2 13 9 20 9' />
									</svg>
								</div>
							)}
							<span className='formItem_content--fileName'>{file.name}</span>
							<button
								type='button'
								className='formItem_content--removeFile'
								onClick={() => removeFile(index)}>
								<svg
									width='16'
									height='16'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'>
									<line
										x1='18'
										y1='6'
										x2='6'
										y2='18'
									/>
									<line
										x1='6'
										y1='6'
										x2='18'
										y2='18'
									/>
								</svg>
							</button>
						</div>
					))}
				</div>
			)}
		</div>
	);
};
