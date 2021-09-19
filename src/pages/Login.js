import React, { useContext, useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import google from "../assets/google.png"
import axios from "axios";
import { getLogin } from "../helpers/functions";
import { AuthContext } from "../context/AuthContext";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit_google: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#008080",
    color:"black",
  },
  submit: {
    backgroundColor:"#008080",
  },
  img :{
    paddingLeft: theme.spacing(2),
    height: "20px",
  }
}));

const Login = () => {
  const history = useHistory();
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {setCurrentUser } = useContext(AuthContext);

  const handleLogin = async(e) => {
    e.preventDefault();
    await getLogin({username, password}, setCurrentUser);
    console.log(username, password, "login sayfası");
    history.push("/");
  };
  // console.log(setCurrentUser, "login.js");

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            onChange={(e) => setUsername(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            value="Login"
            onClick={handleLogin}
          >
            Login
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit_google}
            // onClick={handleProvider}
            >
            Continue with<img className={classes.img} src={google} alt="google" />
          </Button>
        </form>
      </div>
    </Container>
  );
};
export default Login;
