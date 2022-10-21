import { UseFormRegisterReturn } from 'react-hook-form';

export interface BaseInputProps extends UseFormRegisterReturn {
  touched?: boolean;
  valid?: boolean;
  [x: string]: any;
}
