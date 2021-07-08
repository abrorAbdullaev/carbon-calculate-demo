import React from 'react';
import { Typography } from '@material-ui/core';

import './header.scss';

export const Header: React.FC = () => {
  return (
    <header className="app-header-component">
      <div className="content">
        <Typography gutterBottom variant="h3" component="h1" >
          Carbon Usage Calculator
        </Typography>
      </div>
    </header>
  );
};
