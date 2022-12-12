import React, { useState } from 'react';
import { DashboardLayout } from '../DashboardLayout';
import { GameDashboardContent } from '../GameDashboardContent';

const GameDashboard = () => {
  const [show, setShow] = useState(false);
  return (
    <React.Fragment>
      <GameDashboardContent />
      <DashboardLayout show={show} setShow={setShow} />
    </React.Fragment>
  );
};

export default GameDashboard;
