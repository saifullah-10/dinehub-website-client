import { useContext, useState } from "react";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import {
  Button,
  CssBaseline,
  Drawer,
  List,
  ListItemButton,
  Slide,
  useScrollTrigger,
} from "@mui/material";
import PropTypes from "prop-types";
import { LuMenu } from "react-icons/lu";
import SiteLogo from "../../assets/common/res-logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { Context } from "../../context/ContextProvide";
import { signOut } from "firebase/auth";
import auth from "../../util/firebase.config";
import swal from "sweetalert";

function HideOnScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,

  window: PropTypes.func,
};

export default function Navbar(props) {
  const navigate = useNavigate();
  const { user, setUser } = useContext(Context);
  const [open, setOpen] = useState(false);

  const { displayName, photoURL } = user || {};

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        swal({
          title: "Successfully Logout",

          icon: "success",
          button: "Ok",
        });
        navigate("/");
        setUser(null);
        console.log("User logged out");
      })
      .catch((err) => {
        swal({
          title: "Something went wrong, Please try again",

          icon: "error",
          button: "Ok",
        });
        console.log("something went wrong", err);
      });
  };
  const [imgErr, setImgErr] = useState(false);

  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <div>
          <nav className="bg-[#1B1B1B] border-gray-200 ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <a className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src={SiteLogo} className="h-8" alt="Flowbite Logo" />
              </a>

              <div
                className="items-center justify-between hidden w-full md:flex md:w-auto "
                id="navbar-user"
              >
                <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                  <li>
                    <NavLink to={"/"}>
                      <a
                        className="block py-2 px-3 text-white  rounded md:bg-transparent md:text-[#F28B30] md:p-0"
                        aria-current="page"
                      >
                        Home
                      </a>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/allfoods"}>
                      <a
                        href="#"
                        className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#F28B30] md:p-0 "
                      >
                        All Foods
                      </a>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/gallery"}>
                      <a
                        href="#"
                        className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#F28B30] md:p-0 "
                      >
                        Gallery
                      </a>
                    </NavLink>
                  </li>
                </ul>
              </div>

              <div className=" flex items-center gap-2">
                {/* login */}

                <div className={`${user ? "hidden" : "block"}  `}>
                  <NavLink to={"/signin"}>
                    {" "}
                    <Button
                      sx={{
                        color: "#fff",
                        background: "#F97807",
                        "&:hover": {
                          color: "#F28B30",
                          border: "1px solid #F28B30",
                          outline: "none",
                        },
                      }}
                    >
                      Log In
                    </Button>
                  </NavLink>
                </div>
                {/* profile */}
                <div className={`${user ? "block" : "hidden"}`}>
                  <Box sx={{ m: "0", p: "0" }}>
                    <Tooltip title={displayName}>
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        {imgErr && <Avatar alt={displayName} src="xcv" />}
                        <img
                          className=" w-10 h-10  rounded-full"
                          src={photoURL}
                          alt="name"
                          onError={(e) => {
                            setImgErr(true);
                            e.target.style.display = "none";
                          }}
                        />
                      </IconButton>
                    </Tooltip>
                    <Menu
                      sx={{ mt: "45px" }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                      PaperProps={{
                        style: {
                          background: "#B26803",
                          border: "2px solid #FA9030 ",
                        },
                      }}
                    >
                      <Link to={"/myadd"}>
                        <MenuItem
                          onClick={() => {
                            handleCloseUserMenu();
                          }}
                        >
                          <Typography
                            textAlign="center"
                            sx={{ color: "white" }}
                          >
                            My Added Food Items
                          </Typography>
                        </MenuItem>
                      </Link>

                      <Link to={"/addfood"}>
                        <MenuItem
                          onClick={() => {
                            handleCloseUserMenu();
                          }}
                        >
                          <Typography
                            textAlign="center"
                            sx={{ color: "white" }}
                          >
                            Add A food item
                          </Typography>
                        </MenuItem>
                      </Link>

                      <Link to={"/mypurchase"}>
                        <MenuItem
                          onClick={() => {
                            handleCloseUserMenu();
                          }}
                        >
                          <Typography
                            textAlign="center"
                            sx={{ color: "white" }}
                          >
                            My purchase
                          </Typography>
                        </MenuItem>
                      </Link>
                      <MenuItem
                        onClick={() => {
                          handleCloseUserMenu();
                          handleLogout();
                        }}
                      >
                        <Typography textAlign="center" sx={{ color: "white" }}>
                          Logout
                        </Typography>
                      </MenuItem>
                    </Menu>
                  </Box>
                </div>
                {/* profile */}
                {/* responsive menu */}
                <div className=" lg:hidden md:hidden">
                  <Box sx={{ display: { xs: "flex", lg: "none" }, px: "0" }}>
                    <div>
                      <IconButton
                        variant="outlined"
                        className=" relative"
                        color="neutral"
                        onClick={() => setOpen(true)}
                      >
                        <LuMenu className={`text-3xl text-[#FFDEA8] `} />
                      </IconButton>
                      <Drawer
                        open={open}
                        PaperProps={{
                          style: {
                            backgroundColor: "#B26803",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                            ml: "auto",
                            mt: 1,
                            mr: 2,
                            px: "80px",
                          }}
                        >
                          <IconButton
                            id="close-icon"
                            sx={{
                              color: "white",
                              "&:hover": {
                                color: "#E2DFDA", // Change color on hover
                              },
                            }}
                            onClick={() => setOpen(false)}
                          >
                            <MdClose />
                          </IconButton>
                        </Box>

                        <List
                          size="lg"
                          component="nav"
                          sx={{
                            flex: "none",
                            fontSize: "xl",
                            "& > div": { justifyContent: "center" },
                            background: "#B26803",
                          }}
                        >
                          <ListItemButton
                            sx={{ fontWeight: "lg", color: "black" }}
                          >
                            <Link
                              to={"/"}
                              className=" w-full text-center text-white"
                            >
                              {" "}
                              Home
                            </Link>
                          </ListItemButton>

                          <ListItemButton>
                            <Link
                              to={"/allfoods"}
                              className=" w-full text-center text-white"
                            >
                              {" "}
                              All Foods
                            </Link>
                          </ListItemButton>

                          <ListItemButton>
                            <Link
                              to={"/gallery"}
                              className=" w-full text-center text-white"
                            >
                              {" "}
                              Gallery
                            </Link>
                          </ListItemButton>
                        </List>
                      </Drawer>
                    </div>
                  </Box>
                </div>
                {/* responsive menu */}
              </div>
            </div>
          </nav>
        </div>
      </HideOnScroll>
    </>
  );
}
