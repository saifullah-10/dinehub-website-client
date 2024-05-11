import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import PropTypes from "prop-types";

export default function TableRowAddPage({ data }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const { food_image, food_name, quantity, price } = data || {};
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

        <td className="px-4 py-3 whitespace-nowrap  text-sm font-medium">
          <Button
            sx={{ border: "2px solid #CA7107 ", color: "white" }}
            onClick={handleClickOpen}
          >
            Update
          </Button>
        </td>
      </tr>
      {/* modal */}
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions>
      </Dialog>
      {/* modal */}
    </>
  );
}

TableRowAddPage.propTypes = {
  data: PropTypes.object.isRequired,
};
