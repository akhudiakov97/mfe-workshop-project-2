import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

const GlobalStyles = styled('div')(() => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
    a: {
      textDecoration: 'none',
    },
  },
}));

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const StyledToolbar = styled(Toolbar)({
  flexWrap: 'wrap',
  justifyContent: 'space-between',
});

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1, 1.5),
}));

export default function Header() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <StyledAppBar position="static" color="default" elevation={0}>
        <StyledToolbar>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            component={RouterLink}
            to="/"
          >
            FW Days MFE Workshop
          </Typography>
        </StyledToolbar>
      </StyledAppBar>
    </React.Fragment>
  );
}
