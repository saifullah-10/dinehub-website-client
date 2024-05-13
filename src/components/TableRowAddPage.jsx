import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import PropTypes from "prop-types";
import { Textarea } from "@mui/joy";
import { Box } from "@mui/material";
import axios from "axios";
import swal from "sweetalert";

export default function TableRowAddPage({ data, refetch }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  console.log(data);
  const {
    food_image,
    food_name,
    food_origin,
    food_category,
    description,
    quantity,
    price,
    _id,
  } = data || {};
  const handleDelete = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this  food!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .post(`http://localhost:3000/deleteaddfood/${_id}`)
          .then((res) => {
            console.log(res);
            swal("Success! Your food has been deleted!", {
              icon: "success",
            });
            refetch();
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        swal("Your food items is safe!");
      }
    });
  };
  return (
    <>
      <tr className=" text-white">
        <td className="px-4 py-3 whitespace-nowrap">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-20 w-20">
              <img className="h-20 w-20 rounded-lg" src={food_image} alt="" />
            </div>
            <div className="ml-4">
              <div className="lg:text-lg md:text-lg text-sm font-medium ">
                {food_name}
              </div>
            </div>
          </div>
        </td>

        <td className="px-4 py-3 whitespace-nowrap">
          <span className="px-2 inline-flex lg:text-lg md:text-lg text-sm leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            $ {price}
          </span>
        </td>
        <td className="px-4 py-3 whitespace-nowrap text-sm ">{quantity} pcs</td>

        <td className="px-4 flex justify-center   py-3 whitespace-nowrap  text-sm font-medium">
          <div className=" flex gap-3">
            <Button
              sx={{ border: "2px solid #CA7107 ", color: "white" }}
              onClick={handleClickOpen}
            >
              Update
            </Button>
            <Button
              sx={{ border: "2px solid #FA2222 ", color: "white" }}
              onClick={handleDelete}
            >
              DELETE
            </Button>
          </div>
        </td>
      </tr>
      {/* modal */}
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            background: "#AB6006",
            border: "1px solid #EFA145",
            color: "#FFFFFF",
          },
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const foodName = formJson.name;
            const photo = formJson.photo;
            const origin = formJson.origin;
            const category = formJson.category;
            const quantity = formJson.quantity;
            const price = formJson.price;
            const description = formJson.description;
            const updateData = {
              food_name: foodName,
              food_image: photo,
              food_category: category,
              quantity: quantity,
              price: price,
              food_origin: origin,
              description: description,
            };
            console.log(updateData);

            // swal
            swal({
              title: "Are you sure to update?",

              icon: "warning",
              buttons: true,
              dangerMode: true,
            }).then((willDelete) => {
              if (willDelete) {
                axios
                  .post(`http://localhost:3000/updatefoods/${_id}`, updateData)
                  .then((res) => {
                    console.log(res);
                    swal("Update Successfully", {
                      icon: "success",
                    });
                    refetch();
                  })
                  .catch((e) => {
                    console.error(e);
                    swal({
                      title: "Something went wrong, Please try again",

                      icon: "error",
                      button: "Ok",
                    });
                  });
              } else {
                swal("Cancled");
              }
            });
            // swal

            handleClose();
          },
        }}
      >
        <DialogTitle>Update Food</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            defaultValue={food_name}
            label="Food Name"
            type="text"
            fullWidth
            variant="standard"
            sx={{
              "& .MuiInput-root": {
                "&::before": {
                  borderBottomColor: "#39CF09", // Set initial color
                },

                "&::after": {
                  borderBottomColor: "#39CF09 ", // Set initial color
                },
                "&:hover::before": {
                  borderBottomColor: "#F7AC53", // Change the hover color here
                },
                "&:hover::after": {
                  borderBottomColor: "#F7A038", // Change the hover color here
                },
              },
            }}
            inputProps={{
              sx: {
                color: "#fff",
              },
            }}
            InputLabelProps={{
              sx: {
                color: "#fff",
                "&.Mui-focused": {
                  color: "#fff", // Change the focused color here
                },
              },
            }}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="photo"
            name="photo"
            defaultValue={food_image}
            label="Food photo URL"
            type="text"
            fullWidth
            variant="standard"
            sx={{
              "& .MuiInput-root": {
                "&::before": {
                  borderBottomColor: "#39CF09", // Set initial color
                },

                "&::after": {
                  borderBottomColor: "#39CF09 ", // Set initial color
                },
                "&:hover::before": {
                  borderBottomColor: "#F7AC53", // Change the hover color here
                },
                "&:hover::after": {
                  borderBottomColor: "#F7A038", // Change the hover color here
                },
              },
            }}
            inputProps={{
              sx: {
                color: "#fff",
              },
            }}
            InputLabelProps={{
              sx: {
                color: "#fff",
                "&.Mui-focused": {
                  color: "#fff", // Change the focused color here
                },
              },
            }}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="origin"
            name="origin"
            defaultValue={food_origin}
            label="Food Origin"
            type="text"
            fullWidth
            variant="standard"
            sx={{
              "& .MuiInput-root": {
                "&::before": {
                  borderBottomColor: "#39CF09", // Set initial color
                },
                "&::after": {
                  borderBottomColor: "#39CF09 ", // Set initial color
                },
                "&:hover::before": {
                  borderBottomColor: "#F7AC53", // Change the hover color here
                },
                "&:hover::after": {
                  borderBottomColor: "#F7A038", // Change the hover color here
                },
              },
            }}
            inputProps={{
              sx: {
                color: "#fff",
              },
            }}
            InputLabelProps={{
              sx: {
                color: "#fff",
                "&.Mui-focused": {
                  color: "#fff", // Change the focused color here
                },
              },
            }}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="category"
            name="category"
            defaultValue={food_category}
            label="Food Category"
            type="text"
            fullWidth
            variant="standard"
            sx={{
              "& .MuiInput-root": {
                "&::before": {
                  borderBottomColor: "#39CF09", // Set initial color
                },
                "&::after": {
                  borderBottomColor: "#39CF09 ", // Set initial color
                },
                "&:hover::before": {
                  borderBottomColor: "#F7AC53", // Change the hover color here
                },
                "&:hover::after": {
                  borderBottomColor: "#F7A038", // Change the hover color here
                },
              },
            }}
            inputProps={{
              sx: {
                color: "#fff",
              },
            }}
            InputLabelProps={{
              sx: {
                color: "#fff",
                "&.Mui-focused": {
                  color: "#fff", // Change the focused color here
                },
              },
            }}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="quantity"
            name="quantity"
            defaultValue={quantity}
            label="Food quantity"
            type="number"
            fullWidth
            variant="standard"
            sx={{
              "& .MuiInput-root": {
                "&::before": {
                  borderBottomColor: "#39CF09", // Set initial color
                },
                "&::after": {
                  borderBottomColor: "#39CF09 ", // Set initial color
                },
                "&:hover::before": {
                  borderBottomColor: "#F7AC53", // Change the hover color here
                },
                "&:hover::after": {
                  borderBottomColor: "#F7A038", // Change the hover color here
                },
              },
            }}
            inputProps={{
              sx: {
                color: "#fff",
              },
            }}
            InputLabelProps={{
              sx: {
                color: "#fff",
                "&.Mui-focused": {
                  color: "#fff", // Change the focused color here
                },
              },
            }}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="price"
            name="price"
            defaultValue={price}
            label="Food price"
            type="number"
            fullWidth
            variant="standard"
            sx={{
              "& .MuiInput-root": {
                "&::before": {
                  borderBottomColor: "#39CF09", // Set initial color
                },
                "&::after": {
                  borderBottomColor: "#39CF09 ", // Set initial color
                },
                "&:hover::before": {
                  borderBottomColor: "#F7AC53", // Change the hover color here
                },
                "&:hover::after": {
                  borderBottomColor: "#F7A038", // Change the hover color here
                },
              },
            }}
            inputProps={{
              sx: {
                color: "#fff",
              },
            }}
            InputLabelProps={{
              sx: {
                color: "#fff",
                "&.Mui-focused": {
                  color: "#fff", // Change the focused color here
                },
              },
            }}
          />
          <Box sx={{ mt: "15px" }}>
            <label htmlFor="description">Description *</label>
            <Textarea
              sx={{
                backgroundColor: "transparent",
                border: "1px solid #39CF09",
                outline: "none",
                color: "#fff",
                "&.Mui-focused": {
                  border: "#fff",
                  outline: "#fff", // Change the focused color here
                },
              }}
              aria-label="minimum height"
              id="description"
              name="description"
              defaultValue={description}
              required
              minRows={3}
              placeholder="Food Description"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{
              px: "10px",
              py: "10px",
              background: " #F9120F  ",
              color: "#fff",
            }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            sx={{
              px: "10px",
              py: "10px",
              background: "#F8A542 ",
              color: "#fff",
            }}
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>
      {/* modal */}
    </>
  );
}

TableRowAddPage.propTypes = {
  data: PropTypes.object.isRequired,
  refetch: PropTypes.func.isRequired,
};
