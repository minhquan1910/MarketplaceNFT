import React from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';
import { Button } from 'antd';

const LayoutItem = () => {
  return (
    <div className={clsx([styles.layoutItem])}>
      <img alt="" src="" />

      <div className={styles.layoutItemRight}>
        <p className={styles.title}>title</p>
        <p className={styles.description}>description</p>

        <Button style={{ marginBottom: 5, marginTop: 'auto' }} className={styles.startStakingBtn} block>
          Start Staking
        </Button>
      </div>
    </div>
  );
};

export default LayoutItem;
