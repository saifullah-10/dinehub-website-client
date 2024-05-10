import { Divider } from "@mui/material";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import CommonImg from "../assets/common/design.png";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div>
      <div
        className=" lg:h-[250px] h-[200px]"
        style={{
          backgroundImage: `url(${CommonImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",

          width: "100%",
          transform: "translateY(-7%)",
        }}
      >
        <div className=" py-10 flex flex-col items-center">
          <h1 className=" text-[2rem] lg:text-[3rem] text-[#ffd] text-center ">
            Sign UP
          </h1>
          <Divider
            sx={{
              width: "200px",
              height: "5px",
              background: "#F28B30",
              borderRadius: "10px",
            }}
          />
        </div>
      </div>
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
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Your Name"
                name="name"
                autoComplete="name"
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
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                type="email"
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
