import cx from 'classnames';
import React, { useState } from 'react';

import styles from './Faq.module.scss';

export interface FaqProps {
  readonly question: React.ReactNode;
  readonly children?: React.ReactNode;
}

const Faq = ({ question, children }: FaqProps) => {
  const [open, setOpen] = useState<boolean>();

  return (
    <div
      className={cx(styles.faq, { [styles['faq--open']]: open })}
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      <div
        data-collapse="true"
        onClick={() => setOpen(!open)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            setOpen(!open);
          }
        }}
      >
        <span className="evg-text-size-h4 evg-text-weight-bold" itemProp="name">
          {question}
        </span>
        <div
          className={styles.faq__content}
          itemScope
          itemProp="acceptedAnswer"
          itemType="https://schema.org/Answer"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Faq;
