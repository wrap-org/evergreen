import React from 'react';

import FormGroup, {
  FormGroupProps,
} from '../../composition/FormGroup/FormGroup';
import Label from '../../controls/Label/Label';
import LoadingText from '../LoadingText/LoadingText';

import styles from './LoadingFormGroup.module.scss';

interface LoadingFormGroupProps extends FormGroupProps {
  readonly chars?: number;
}

export default function LoadingFormGroup({
  chars = 30,
  ...props
}: LoadingFormGroupProps) {
  return (
    <div className="loading-form-group">
      <FormGroup {...props}>
        <FormGroup.Label>
          <Label aria-hidden="true">
            <LoadingText chars={chars} />
          </Label>
        </FormGroup.Label>
        <FormGroup.Control>
          <div className={styles['loading-form-group__control']}>
            <input
              type="text"
              className={styles['loading-form-group__control-input']}
              aria-hidden="true"
              disabled
            />
          </div>
        </FormGroup.Control>
      </FormGroup>
    </div>
  );
}
