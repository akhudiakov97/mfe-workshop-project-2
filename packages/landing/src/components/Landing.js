import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

const GlobalStyles = styled('div')(() => ({
  '@global': {
    a: {
      textDecoration: 'none',
    },
  },
}));

const StyledHeroContent = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(8, 0, 6),
}));

const StyledHeroButtons = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const StyledCardGrid = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
}));

const StyledCard = styled(Card)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
});

const StyledCardMedia = styled(CardMedia)({
  paddingTop: '56.25%',
});

const StyledCardContent = styled(CardContent)({
  flexGrow: 1,
});

const StyledFooter = styled('footer')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(6),
}));

const cards = [1, 2, 3, 4, 5, 6];

export default function Landing() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <main>
        {/* Hero unit */}
        <StyledHeroContent>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Home
            </Typography>
            <StyledHeroButtons>
              <Grid container spacing={0} justifyContent="center">
                <Grid item>
                  <Link to="/secondPage">
                    <Button variant="contained" color="primary">
                      SecondPage
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </StyledHeroButtons>
          </Container>
        </StyledHeroContent>
        <StyledCardGrid maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <StyledCard>
                  <StyledCardMedia
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <StyledCardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>Description</Typography>
                  </StyledCardContent>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </StyledCardGrid>
      </main>
      {/* Footer */}
      <StyledFooter>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
      </StyledFooter>
      {/* End footer */}
    </React.Fragment>
  );
}