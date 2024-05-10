import { useState } from "react";

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
import { Link, NavLink } from "react-router-dom";
import ModalClose from "@mui/joy/ModalClose";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

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
  const [open, setOpen] = useState(false);
  // const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const user = false;

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <div>
          <nav className="bg-[#1B1B1B] border-gray-200 ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <a
                href="https://flowbite.com/"
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <img src={SiteLogo} className="h-8" alt="Flowbite Logo" />
              </a>

              <div
                className="items-center justify-between hidden w-full md:flex md:w-auto "
                id="navbar-user"
              >
                <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-3 text-white  rounded md:bg-transparent md:text-[#F28B30] md:p-0"
                      aria-current="page"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#F28B30] md:p-0 "
                    >
                      All Foods
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#F28B30] md:p-0 "
                    >
                      Gallery
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#F28B30] md:p-0 "
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#F28B30] md:p-0 "
                    >
                      Contact
                    </a>
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
                    <Tooltip title="Open settings">
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar
                          alt="Remy Sharp"
                          src="/static/images/avatar/2.jpg"
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
                    >
                      {settings.map((setting) => (
                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                          <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                </div>
                {/* profile */}
                {/* responsive menu */}
                <div className=" lg:hidden">
                  <Box sx={{ display: { xs: "flex", lg: "none" }, px: "0" }}>
                    <div>
                      <IconButton
                        variant="outlined"
                        className=" relative"
                        color="neutral"
                        onClick={() => setOpen(true)}
                      >
                        <LuMenu className={`text-3xl text-black `} />
                      </IconButton>
                      <Drawer open={open}>
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
                          <Typography
                            component="label"
                            htmlFor="close-icon"
                            fontSize="sm"
                            fontWeight="lg"
                            sx={{ cursor: "pointer" }}
                          >
                            Close
                          </Typography>
                          <ModalClose
                            id="close-icon"
                            sx={{ position: "initial" }}
                            onClick={() => setOpen(false)}
                          />
                        </Box>

                        <List
                          size="lg"
                          component="nav"
                          sx={{
                            flex: "none",
                            fontSize: "xl",
                            "& > div": { justifyContent: "center" },
                          }}
                        >
                          <ListItemButton
                            sx={{ fontWeight: "lg", color: "black" }}
                          >
                            <Link to={"/"} className=" w-full text-center">
                              {" "}
                              Home
                            </Link>
                          </ListItemButton>

                          <ListItemButton>
                            <Link
                              to={"/allspot"}
                              className=" w-full text-center"
                            >
                              {" "}
                              All Foods
                            </Link>
                          </ListItemButton>

                          <ListItemButton>
                            <Link
                              to={"/addspot"}
                              className=" w-full text-center"
                            >
                              {" "}
                              Gallery
                            </Link>
                          </ListItemButton>

                          {user && (
                            <ListItemButton>
                              <Link
                                to={"/mylist"}
                                className=" w-full text-center"
                              >
                                {" "}
                                My List
                              </Link>
                            </ListItemButton>
                          )}
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
