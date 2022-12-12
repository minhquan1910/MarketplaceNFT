import React from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';
import { DashboardLayoutHeader } from './DashboardLayoutHeader';
import { DashboardLayoutProps } from './types';
import { LayoutItem } from './LayoutItem';

const DashboardLayout = ({ show }: DashboardLayoutProps) => {
  console.log('show', show);
  return (
    <div
      className={clsx(styles.gameLayout, styles.gameDashboardLayout, {
        [styles.show]: show,
      })}
    >
      <DashboardLayoutHeader />
      <div className={clsx(styles.gameLayoutBody, styles.dasboardLayoutBody)}>
        <LayoutItem />
      </div>
    </div>
  );
};

export default DashboardLayout;
