import React, { useState } from 'react';
import cx from 'classnames';

import Card from 'components/canvas/Card/Card';
import Title from 'components/content/Title/Title';
import Collapse from 'components/controls/Collapse/Collapse';

import styles from './Faq.module.scss';

interface FaqProps {
  question: React.ReactNode;
  children: React.ReactNode;
}

const Faq = ({ question, children }: FaqProps) => {
  const [open, setOpen] = useState(false);

  const handleToggle = (isOpen?: boolean) => {
    setOpen(isOpen || false);
  };

  return (
    <div
      className={cx(styles.faq, { [styles['faq--open']]: open })}
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      <Card muted={!open} border={open} shadow={open}>
        <Card.Body>
          <Collapse
            onToggle={handleToggle}
            headerLabel={(
              <Title as="h3" size="h4">
                <span itemProp="name">{question}</span>
              </Title>
            )}
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
        </Card.Body>
      </Card>
    </div>
  );
};

export default Faq;
