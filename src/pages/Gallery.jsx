import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import TitleForPages from "../components/common/TitleForPages";
import GalleryArticle from "../components/GalleryArticle";
import { useContext, useState } from "react";
import { Context } from "../context/ContextProvide";
import axios from "axios";

export default function Gallery() {
  const {
    user: { displayName },
  } = useContext(Context);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div>
        <TitleForPages PageTitle="Gallery" />
      </div>
      <div>
        {/* other code */}
        <div className=" w-full ">
          <div className="w-full mx-auto  px-4 md:px-8">
            <div className="  mx-auto text-right mr-3">
              <button
                onClick={handleClickOpen}
                className=" px-6 text-white font-semibold lg:text-xl rounded-xl py-2 bg-[#F98738]"
              >
                Add
              </button>
            </div>
            <div className="grid max-w-2xl grid-cols-1 gap-8 mx-auto mt-8 auto-rows-fr lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <GalleryArticle />
              <GalleryArticle />
              <GalleryArticle />
              <GalleryArticle />
              {/* Other articles */}
            </div>
          </div>
        </div>
      </div>
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
            const user = formJson.name;
            const photo = formJson.photo;
            const feedback = formJson.feedback;

            const feedbackData = {
              user_name: user,
              photo_URL: photo,
              user_feedback: feedback,
            };
            axios
              .post("http://localhost:3000/feedback", feedbackData)
              .then((res) => console.log(res))
              .catch((e) => console.log(e));
            console.log(feedbackData);

            handleClose();
          },
        }}
      >
        <DialogTitle>Feedback</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            id="name"
            name="name"
            label="Your name"
            value={displayName}
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
            id="feedback"
            name="feedback"
            label="Your Feedback"
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
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
