import { Button } from 'antd';
import React from 'react';
import { DashboardLayoutHeader } from '../DashboardLayout/DashboardLayoutHeader';
import { LayoutItemContent } from '../DashboardLayout/LayoutItemContent';
import styles from './styles.module.css';

function GameDashboardContent() {
  return (
    <div className={styles.gameDashboard}>
      <div className={styles.gameDashboardHeaderMobile}>
        <DashboardLayoutHeader />
      </div>
      <div className={styles.gameDashboardTitle}>Staking</div>
      <div className={styles.gameDashboardContent}>
        <LayoutItemContent />
      </div>
      <div className={styles.gameDashboardFooter}>
        <div>
          <p className={styles.gameDashboardFooterTitle}>Total Rewards</p>
          <div className={styles.inputCollectible}>0.00023423423 MAH</div>
        </div>
        <div>
          <p className={styles.gameDashboardFooterTitle}>Daily NFTs Staking</p>
          <Button block disabled={true}>
            Claim
          </Button>
        </div>
      </div>
    </div>
  );
}

export default GameDashboardContent;
