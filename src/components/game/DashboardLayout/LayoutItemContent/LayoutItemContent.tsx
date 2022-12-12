import React, { useState } from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';
import { Button, Statistic } from 'antd';

const LayoutItemContent = () => {
  const { Countdown } = Statistic;

  const flag = false;

  const [isHitToDeadline, setIsHitToDeadline] = useState(flag);

  return (
    <div className={clsx([styles.layoutItem])}>
      <img src="" alt="img" />

      <div className={styles.layoutItemRight}>
        <div>
          {/* {item.title && <p className={styles.title}>{item.title}</p>} */}
          <p>title</p>
          <p className={styles.description}>description</p>
        </div>

        {/* <div
      className={clsx("input-text")}
      style={{ marginBottom: 5, marginTop: "auto" }}
    >
      2
    </div> */}
        {isHitToDeadline ? (
          <Button
            className={styles.unStakingBtn}
            // onClick={() => handleUnStakeClicked()}
            // loading={isLoading}
            style={{ marginBottom: 5, marginTop: 'auto' }}
            block
          >
            UnStaking
          </Button>
        ) : (
          <div>
            <div className={styles.description} style={{ fontFamily: 'GILROY ' }}>
              Available for un-staking after:
            </div>
            <Countdown
              //   onChange={handleChangeTimeCountDown}
              //   onFinish={() => setIsHitToDeadline(true)}
              //   value={deadline}
              //   format={format}
              valueStyle={{
                paddingLeft: '10px',
                color: '#36a920',
                fontSize: '12px',
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default LayoutItemContent;
