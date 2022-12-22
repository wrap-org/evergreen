import A11yDialogInstance from "a11y-dialog";
import classnames from "classnames";
import React from "react";
import { A11yDialog, A11yDialogProps } from "react-a11y-dialog";

import { Breakpoints } from "../../../types/breakpoints.type";

import styles from "./Modal.module.scss";
import Header from "./ModalHeader";
import Inner from "./ModalInner";

export type ModalInstance = A11yDialogInstance;

interface ModalProps extends Pick<A11yDialogProps, "id" | "title" | "role"> {
  children: React.ReactNode;
  size?: Breakpoints | "auto";
  /**
   * Called when the modal has mounted and the ref has been setup
   */
  onModalMounted?: (modalRef: React.MutableRefObject<ModalInstance>) => void;
}

const Modal = React.forwardRef<any, ModalProps>(
  (
    { children, size = "auto", onModalMounted, ...a11yDialogProps },
    ref: React.ForwardedRef<ModalInstance>
  ) => {
    const dialogClasses = classnames(styles.modal__dialog, {
      [styles[`modal__dialog--size-${size}`]]: size,
    });

    const setupRef = (instance: ModalInstance) => {
      if (typeof ref !== "function" && ref) {
        // eslint-disable-next-line no-param-reassign
        ref.current = instance;

        if (typeof onModalMounted === "function") {
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
  }
);

Modal.displayName = "Modal";

export const useModalRef = () => React.useRef<ModalInstance>();

// eslint-disable-next-line prefer-object-spread
export default Object.assign({}, Modal, { Inner, Header });
