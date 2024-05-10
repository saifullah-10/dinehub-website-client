import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Box from "@mui/material/Box";

import Container from "@mui/material/Container";

import TitleForPages from "../components/common/TitleForPages";

export default function Purchase() {
  return (
    <div>
      <TitleForPages DeviderWidth="250px" PageTitle="Purchase" />
      <div>
        {/* form */}

        <div className=" lg:flex items-center justify-center">
          <div className=" flex justify-end ">
            <img
              className=" rounded-2xl"
              src="https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFzdHJ5fGVufDB8fDB8fHww"
              alt=""
            />
          </div>
          <Container
            component="main"
            maxWidth="xs"
            sx={{
              m: "0",
            }}
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
                <div className=" lg:flex gap-2">
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Food Name"
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
                </div>
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
                  id="price"
                  label="Price"
                  name="price"
                  type="number"
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
                  id="quantity"
                  label="Quantity"
                  name="quantity"
                  autoComplete="quantity"
                  type="number"
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
                  id="date"
                  label="Date"
                  name="date"
                  autoComplete="date"
                  type="text"
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
                  Purchase
                </Button>
              </Box>
            </Box>
          </Container>
        </div>
        {/* form */}
      </div>
    </div>
  );
}
