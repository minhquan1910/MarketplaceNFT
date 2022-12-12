import React from 'react';
import { Button, Grid } from 'antd';
import clsx from 'clsx';
import styles from './styles.module.css';

const { useBreakpoint } = Grid;

function DashboardLayoutHeader() {
  const { md } = useBreakpoint();
  return (
    <div className={clsx(styles.gameLayoutHeader)}>
      <div className={styles.gameLayoutHeaderItem}>
        <p>$USD Balance</p>
        <div className={styles.inputText}></div>
      </div>
      <div className={styles.gameLayoutHeaderItem}>
        <p>My Total NFTs</p>
        <div className={styles.inputText}>{0}</div>
      </div>

      {!md && (
        <div className={styles.gameLayoutHeaderItem} style={{ flex: 0 }}>
          <p style={{ opacity: 0 }}>a</p>
          <Button />
        </div>
      )}
    </div>
  );
}

export default DashboardLayoutHeader;
