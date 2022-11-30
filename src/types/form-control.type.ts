import { ModerationStatus } from './moderation-status.type';

export interface FormControl {
  touched?: boolean;
  valid?: boolean;
  status?: ModerationStatus;
  disabled?: boolean;
  [key: string]: any;
}
