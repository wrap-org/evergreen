import cx from 'classnames';
import React, { useState } from 'react';

import styles from './Faq.module.scss';

import Title from 'components/content/Title/Title';
import Collapse from 'components/controls/Collapse/Collapse';

interface FaqProps {
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
      <Collapse
        textDecoration="none"
        onToggle={setOpen}
        headerLabel={
          <Title as="h3" size="h4" family="default">
            <span itemProp="name">{question}</span>
          </Title>
        }
        align="right"
      >
        <div
          className={styles.faq__content}
          itemScope
          itemProp="acceptedAnswer"
          itemType="https://schema.org/Answer"
        >
          {children}
        </div>
      </Collapse>
    </div>
  );
};

export default Faq;
