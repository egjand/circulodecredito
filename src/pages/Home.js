import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { padding } from '@material-ui/system';

const styles = theme => ({
   root: {
      flexGrow: 1, //responsiveness,
      margin: '50px 35px 50px 35px',
      maxWidth: '95%'
   },
   card: {
      padding: '10px 10px 0 10px',
      boxShadow: '2px 4px 10px rgba(255, 255, 255, 0.15)'
   },
   cardBackgroud1: {
      background:
         'linear-gradient(to bottom, #215966, #255364, #2a4c60, #2f455b, #333f55, #333a54, #343552, #37304f, #3b2950, #41214f, #48154b, #4f0045);'
   },
   cardBackgroud2: {
      background:
         'linear-gradient(to bottom, #14471b, #004834, #00464a, #004358, #003d5c, #163858, #213352, #292e4c, #222946, #1b243f, #142039, #0d1b33);'
   },
   cardBackgroud3: {
      background:
         'linear-gradient(to bottom, #82003e, #76184d, #672657, #57305c, #48365c, #403457, #383251, #312f4b, #2a2643, #241d3c, #1f1334, #1a082c);'
   },
   cardBackgroud4: {
      background:
         'linear-gradient(to bottom, #007b82, #1b7276, #27696a, #2e6160, #325856, #294f51, #21474c, #1a3e47, #0b3345, #0f2641, #1b1837, #240426);'
   },
   cardBackgroud5: {
      background:
         'linear-gradient(to bottom, #eeff00, #abdf3d, #76bd51, #509859, #3d7355, #37604a, #324d3e, #2c3b33, #253629, #21311f, #1e2c14, #1d2605);'
   },
   media: {
      width: 'auto',
      height: '300px',
      borderRadius: '4px'
   },
   header: {
      textAlign: 'center',
      color: '#fff9c4'
   },
   content: {
      textAlign: 'center'
   },
   button: {
      ...theme.typography.basic,
      fontWeight: 700,
      width: '100%',
      background: 'linear-gradient(#f5f200 0%, #fac629 100%)',
      color: 'black',
      '&:last-of-type': {
         marginTop: '15px'
      }
   }
});

const data = [
   {
      image:
         'https://res.cloudinary.com/dnaucbbex/image/upload/v1608037850/react-material-ui-templetes/save_xjqwty.png',
      title: 'Sign In Form',
      to: '/signin',
      href:
         'https://github.com/dev-SR/react-material-ui-templetes/blob/main/src/components/Signin.js'
   },
   {
      image:
         'https://via.placeholder.com/300/000000/FFFFFF/?text=hello.dev.sr@gmail.com',
      title: 'Under Development',
      to: '/',
      href: 'https://github.com/dev-SR/react-material-ui-templetes'
   },
   {
      image:
         'https://via.placeholder.com/300/000000/FFFFFF/?text=hello.dev.sr@gmail.com',
      title: 'Under Development',
      to: '/',
      href: 'https://github.com/dev-SR/react-material-ui-templetes'
   },
   {
      image:
         'https://via.placeholder.com/300/000000/FFFFFF/?text=hello.dev.sr@gmail.com',
      title: 'Under Development',
      to: '/',
      href: 'https://github.com/dev-SR/react-material-ui-templetes'
   },
   {
      image:
         'https://via.placeholder.com/300/000000/FFFFFF/?text=hello.dev.sr@gmail.com',
      title: 'Under Development',
      to: '/',
      href: 'https://github.com/dev-SR/react-material-ui-templetes'
   },
   {
      image:
         'https://via.placeholder.com/300/000000/FFFFFF/?text=hello.dev.sr@gmail.com',
      title: 'Under Development',
      to: '/',
      href: 'https://github.com/dev-SR/react-material-ui-templetes'
   }
];

const Container = props => <Grid container {...props} />;
const Item = props => <Grid item {...props} />;
const Home = withStyles(styles)(
   ({
      classes: {
         root,
         card,
         media,
         header,
         content,
         button,
         cardBackgroud1,
         cardBackgroud2,
         cardBackgroud3,
         cardBackgroud4,
         cardBackgroud5
      }
   }) => {
      const b = [
         cardBackgroud1,
         cardBackgroud2,
         cardBackgroud3,
         cardBackgroud4,
         cardBackgroud5
      ];
      return (
         <div className={root}>
            <Container spacing={4}>
               {data.map(item => {
                  const c = [card];
                  const r = Math.floor(5 * Math.random()); //<< 4
                  c.push(b[r]);
                  return (
                     <Item xs={12} sm={6} md={3}>
                        <Card className={[...c]}>
                           <CardMedia
                              className={media}
                              image={item.image}
                              title='Grapefruit'
                           />
                           <CardHeader className={header} title={item.title} />
                           <CardContent className={content}>
                              <Button
                                 variant='contained'
                                 component={Link}
                                 to={item.to}
                                 className={button}>
                                 Demo
                              </Button>
                              <Button
                                 variant='contained'
                                 component='a'
                                 href={item.href}
                                 className={button}>
                                 Source Code
                              </Button>
                           </CardContent>
                        </Card>
                     </Item>
                  );
               })}
            </Container>
         </div>
      );
   }
);

export default Home;
