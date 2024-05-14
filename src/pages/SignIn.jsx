import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { FaGoogle } from "react-icons/fa6";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { FaGithub } from "react-icons/fa";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { Link, useLocation, useNavigate } from "react-router-dom";
import TitleForPages from "../components/common/TitleForPages";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import auth from "../util/firebase.config";
import { useContext } from "react";
import { Context } from "../context/ContextProvide";
import swal from "sweetalert";
import axios from "../util/axiosConfig";

export default function SignIn() {
  const location = useLocation();

  const { setRefresh } = useContext(Context);

  const navigate = useNavigate();
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const getUser = userCredential.user;
        const jwtUid = getUser.uid;

        setRefresh((prev) => !prev);
        swal({
          title: "Successfully Login",

          icon: "success",
          button: "Ok",
        });
        // jwt
        axios
          .post("/jwt", { jwtUid }, { withCredentials: true })
          .then((res) => {
            console.log(res);
            if (location?.state) {
              navigate(location.state);
            } else {
              navigate("/");
            }
          })
          .catch((err) => console.log(err));
        // jwt
      })
      .catch((err) => {
        console.log(err);
        swal({
          title:
            "Something went wrong, Please try again, Check your email and password",

          icon: "error",
          button: "Ok",
        });
      });
  };

  // google login
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((userCredential) => {
        const getUser = userCredential.user;
        const jwtUid = getUser.uid;
        axios
          .post("/jwt", { jwtUid })
          .then(() => {
            setRefresh((prev) => !prev);
            swal({
              title: "Successfully Login",

              icon: "success",
              button: "Ok",
            });
            if (location?.state) {
              navigate(location.state);
            } else {
              navigate("/");
            }
          })
          .catch((e) => {
            swal({
              title: "Something went wrong, Please try again",

              icon: "error",
              button: "Ok",
            });
            console.log(e);
          });
      })
      .catch((err) => {
        console.log(err);
        swal({
          title: "Something went wrong, Please try again",

          icon: "error",
          button: "Ok",
        });
      });
  };
  // github login
  const githubProvider = new GithubAuthProvider();
  const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider)
      .then((userCredential) => {
        const getUser = userCredential.user;
        const jwtUid = getUser.uid;
        axios
          .post("/jwt", { jwtUid })
          .then(() => {
            setRefresh((prev) => !prev);
            swal({
              title: "Successfully Login",

              icon: "success",
              button: "Ok",
            });
            if (location?.state) {
              navigate(location.state);
            } else {
              navigate("/");
            }
          })
          .catch((e) => {
            swal({
              title: "Something went wrong, Please try again",

              icon: "error",
              button: "Ok",
            });
            console.log(e);
          });
      })
      .catch((err) => {
        console.log(err);
        swal({
          title: "Something went wrong, Please try again",

          icon: "error",
          button: "Ok",
        });
      });
  };
  return (
    <div>
      <TitleForPages PageTitle="Sign In" />
      <div>
        {/* form */}

        <Container
          component="main"
          maxWidth="xs"
          sx={{ transform: { lg: "translateY(-10%)", md: "translateY(-8%)" } }}
        >
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              component="form"
              onSubmit={handleSignIn}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                sx={{
                  "& input": {
                    color: "#F5B57D",
                  },
                  "& label": {
                    color: "white",
                  },
                  "& label.Mui-focused": {
                    color: "#F5B57D", // Change label color when focused
                  },

                  "&.Mui-focused fieldset": {
                    borderColor: "green", // Change border color when focused
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "red", // Change border color when not focused
                    },
                    "&:hover fieldset": {
                      borderColor: "blue", // Change border color on hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "green", // Change border color when focused
                    },
                  },
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                sx={{
                  "& input": {
                    color: "#F5B57D",
                  },
                  "& label": {
                    color: "white",
                  },
                  "& label.Mui-focused": {
                    color: "#F5B57D", // Change label color when focused
                  },

                  "&.Mui-focused fieldset": {
                    borderColor: "green", // Change border color when focused
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "red", // Change border color when not focused
                    },
                    "&:hover fieldset": {
                      borderColor: "blue", // Change border color on hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "green", // Change border color when focused
                    },
                  },
                }}
              />
              <Typography
                sx={{
                  textAlign: "center",
                  my: { lg: "10px" },
                  fontWeight: "bold",
                  color: "#F4F267 ",
                  fontSize: { lg: "1.5rem" },
                }}
              >
                OR
              </Typography>

              <Button
                onClick={handleGoogleLogin}
                fullWidth
                variant="contained"
                sx={{
                  mt: 1,
                  color: "#F28B31",
                  background: "transparent",
                  border: "1px solid #F28B31",

                  "&:hover": {
                    background: "transparent",
                    color: "#F9CCA6 ",
                  },
                }}
              >
                <div className=" flex items-center gap-2">
                  <FaGoogle className=" text-2xl text-[#F28B31]  " />
                  Sign In With Google
                </div>
              </Button>

              <Button
                onClick={handleGithubLogin}
                fullWidth
                variant="contained"
                sx={{
                  mt: 1,
                  color: "#F28B31",
                  background: "transparent",
                  border: "1px solid #F28B31",

                  "&:hover": {
                    background: "transparent",
                    color: "#F9CCA6 ",
                  },
                }}
              >
                <div className=" flex items-center gap-2">
                  <FaGithub className=" text-2xl text-[#F28B31]  " />
                  Sign In With Github
                </div>
              </Button>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  background: "#F28B31 ",
                  "&:hover": {
                    color: "#F28B31",
                    background: "transparent",
                    border: "1px solid #F28B31",
                  },
                }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs></Grid>
                <Grid item>
                  <Link to={"/signup"}>
                    <Typography sx={{ color: "#F28B31", cursor: "pointer" }}>
                      {`Don't`} have an account? Sign Up
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>

        {/* form */}
      </div>
    </div>
  );
}
