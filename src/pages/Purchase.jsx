import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Box from "@mui/material/Box";

import Container from "@mui/material/Container";

import TitleForPages from "../components/common/TitleForPages";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "../util/axiosConfig";
import Loading from "../components/Loading";
import { useContext } from "react";
import { Context } from "../context/ContextProvide";
import swal from "sweetalert";
import { Helmet } from "react-helmet";

export default function Purchase() {
  const { user } = useContext(Context);
  const { id } = useParams();
  const searchId = id.split(" ");

  const { data, isPending } = useQuery({
    queryKey: ["purchase"],
    queryFn: async () => {
      return axios
        .get(
          searchId[1] === "singlefood"
            ? `/purchasefood/${searchId[0]}`
            : `/selectedmenu/${id}`
        )
        .then((res) => res.data);
    },
  });
  const { food_image, food_name, price, quantity: serverQuantity } = data || {};

  const { email, displayName } = user;
  const handlePurchase = (e) => {
    e.preventDefault();

    const quantity = e.target.quantity.value;
    if (quantity > serverQuantity) {
      swal({
        title: "Stock Is Less Than From Your Order Quantity",

        icon: "error",
        button: "Ok",
      });
      return;
    }
    if (!quantity) {
      swal({
        title: "Quantity Required",

        icon: "error",
        button: "Ok",
      });
      return;
    }
    const date = e.target.date.value;

    axios
      .get(
        searchId[1] === "singlefood"
          ? `/purchase?id=${searchId[0]}&quantity=${quantity}&uid=${user.uid}&date=${date}`
          : `/setmenuupdate?id=${id}&quantity=${quantity}&uid=${user.uid}&date=${date}`
      )
      .then((res) => {
        console.log(res.data);
        swal({
          title: "Successfully Purchase",

          icon: "success",
          button: "Ok",
        });
      })
      .catch((e) => {
        console.log(e);
        swal({
          title: "Something went wrong, please try again",
          icon: "error",
          button: "Ok",
        });
      });
  };

  // date
  const timestamp = Date.now();
  const date = new Date(timestamp);
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);

  if (isPending) {
    return <Loading />;
  }

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Purchase</title>
      </Helmet>
      <TitleForPages DeviderWidth="250px" PageTitle="Purchase" />
      <div>
        {/* form */}
        <div className=" lg:flex items-center justify-center">
          <div className=" flex justify-end ">
            <img className=" rounded-2xl" src={food_image} alt="" />
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
              <Box
                component="form"
                onSubmit={handlePurchase}
                noValidate
                sx={{ mt: 1 }}
              >
                <div className=" lg:flex gap-2">
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Food Name"
                    value={food_name}
                    autoComplete="name"
                    type="text"
                    focused="true"
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
                    value={displayName}
                    autoComplete="name"
                    type="text"
                    focused
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
                  value={email}
                  autoComplete="email"
                  type="email"
                  focused
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
                  id="price"
                  label="Price"
                  value={`$ ${price} / pcs`}
                  type="text/number"
                  focused
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
                  value={formattedDate}
                  autoComplete="date"
                  type="text"
                  focused
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
