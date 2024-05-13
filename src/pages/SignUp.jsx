import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { Link, useLocation, useNavigate } from "react-router-dom";
import TitleForPages from "../components/common/TitleForPages";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from "../util/firebase.config";
import swal from "sweetalert";

export default function SignUp() {
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    const isValidName = /\S+/.test(name);
    const isValidEmail = /\S+/.test(email);
    const isValidPhoto = /\S+/.test(photo);
    const isValidPassword = /\S+/.test(password);

    if (!isValidName || !isValidEmail || !isValidPhoto || !isValidPassword) {
      swal({
        title: "Something went wrong, All fields are required",

        icon: "error",
        button: "Ok",
      });
    } else {
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!isValidEmail) {
        swal({
          title: "Something went wrong, provide a valid EMAIL",

          icon: "error",
          button: "Ok",
        });
        return;
      }
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password);
      if (!passwordRegex) {
        swal({
          title:
            "Something went wrong, provide a strong password with at least one uppercase letter and one lowercase letter and 6 digits",

          icon: "error",
          button: "Ok",
        });
        return;
      }

      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
          })
            .then(() => {
              swal({
                title: "Successfully Registered",

                icon: "success",
                button: "Ok",
              });
              if (location?.state) {
                navigate(location.state);
              } else {
                navigate("/");
              }
            })
            .catch((err) => {
              console.log(err);
              swal({
                title: "Something went wrong, Please try again",

                icon: "error",
                button: "Ok",
              });
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
    }
  };

  return (
    <div>
      <TitleForPages PageTitle="Sign Up" />
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
              onSubmit={handleSignUp}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Your Name"
                name="name"
                type="text"
                autoFocus
                sx={{
                  "& input": {
                    color: "#F5B57D",
                  },
                  "& label": {
                    color: "white",
                  },
                  "& label.Mui-focused": {
                    color: "#F5B57D",
                  },

                  "&.Mui-focused fieldset": {
                    borderColor: "green",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "red",
                    },
                    "&:hover fieldset": {
                      borderColor: "blue",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "green",
                    },
                  },
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="photo"
                label="Your Photo URL"
                name="photo"
                autoComplete="photo"
                type="text"
                autoFocus
                sx={{
                  "& input": {
                    color: "#F5B57D",
                  },
                  "& label": {
                    color: "white",
                  },
                  "& label.Mui-focused": {
                    color: "#F5B57D",
                  },

                  "&.Mui-focused fieldset": {
                    borderColor: "green",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "red",
                    },
                    "&:hover fieldset": {
                      borderColor: "blue",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "green",
                    },
                  },
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                type="email"
                sx={{
                  "& input": {
                    color: "#F5B57D",
                  },
                  "& label": {
                    color: "white",
                  },
                  "& label.Mui-focused": {
                    color: "#F5B57D",
                  },

                  "&.Mui-focused fieldset": {
                    borderColor: "green",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "red",
                    },
                    "&:hover fieldset": {
                      borderColor: "blue",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "green",
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
                sx={{
                  "& input": {
                    color: "#F5B57D",
                  },
                  "& label": {
                    color: "white",
                  },
                  "& label.Mui-focused": {
                    color: "#F5B57D",
                  },

                  "&.Mui-focused fieldset": {
                    borderColor: "green",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "red",
                    },
                    "&:hover fieldset": {
                      borderColor: "blue",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "green",
                    },
                  },
                }}
              />

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
                Sign Up
              </Button>
              <Grid container>
                <Grid item xs></Grid>
                <Grid item>
                  <Link to={"/signin"}>
                    <Typography sx={{ color: "#F28B31", cursor: "pointer" }}>
                      Already have an account? Sign In
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
