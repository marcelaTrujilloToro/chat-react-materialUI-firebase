import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Icon } from '@material-ui/core';
import { Link as RouterLink, LinkProps as RouterLinkProps, withRouter } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth'; 

const MyLink = React.forwardRef<any, Omit<RouterLinkProps, 'to'>>((props, ref) => (
    <RouterLink ref={ref} to="/signup/" {...props} />
  ));

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = (props: any) => {

  const classes = useStyles();
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: any) => {
    setUser({...user, [e.target.name]: e.target.value})
  };

  const handleLogin = (e: any) => {
    e.preventDefault();

    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .then(response => {
      props.history.push('/');
    })
    .catch(error => {
      console.log(error);
      alert(error.message);
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <Icon>lock-outlined</Icon>
        </Avatar>
        <Typography component="h1" variant="h5">
          Ingresar a ChatApp
        </Typography>
        <form className={classes.form} onSubmit={handleLogin}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value= {user.email}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value= {user.password}
            onChange={handleChange}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Ingresar
          </Button>
          <Grid container>
            <Grid item>
              <Link component={MyLink} variant="body2">
                {"No tengo una cuenta"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
     
    </Container>
  );
};
export default withRouter(Login);
