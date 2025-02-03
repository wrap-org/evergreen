import A11yDialogLib, { A11yDialogInstance } from 'a11y-dialog';
import classnames from 'classnames';
import React, { useRef } from 'react';
import { A11yDialog, ReactA11yDialogProps } from 'react-a11y-dialog';

import { Sizes } from '../../../../types/size.type';

import styles from './Modal.module.scss';
import Header from './ModalHeader';
import Inner from './ModalInner';

export type ModalInstance = A11yDialogInstance;

interface ModalProps
  extends Pick<ReactA11yDialogProps, 'id' | 'title' | 'role'> {
  readonly children?: React.ReactNode;
  readonly size?: Sizes | 'auto';
  /**
   * Called when the modal has mounted and the ref has been setup
   */
  readonly onModalMounted?: (
    modalRef: React.MutableRefObject<ModalInstance>,
  ) => void;
}

const Modal = React.forwardRef<any, ModalProps>(
  (
    { children, size = 'auto', onModalMounted, ...a11yDialogProps },
    ref: React.ForwardedRef<ModalInstance>,
  ) => {
    const dialogClasses = classnames(styles.modal__dialog, {
      [styles[`modal__dialog--size-${size}`]]: size,
    });

    const setupRef = (instance?: A11yDialogLib) => {
      if (instance && ref && typeof ref !== 'function') {
        ref.current = instance;

        if (typeof onModalMounted === 'function') {
          onModalMounted(ref as React.MutableRefObject<ModalInstance>);
        }
      }
    };

    return (
      <A11yDialog
        {...a11yDialogProps}
        closeButtonPosition="none"
        dialogRef={setupRef}
        classNames={{
          container: styles.modal,
          overlay: styles.modal__overlay,
          dialog: dialogClasses,
          title: styles.modal__title,
        }}
      >
        {children}
      </A11yDialog>
    );
  },
);

Modal.displayName = 'Modal';

export const useModalRef = () => useRef<ModalInstance>();

export default Object.assign({}, Modal, { Inner, Header });
