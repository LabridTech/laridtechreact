import * as React from "react";
import "../style/App.css";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { isMobile } from "../windowsize";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { catogery } from "../info/catogery-info";
import { HashLink } from "react-router-hash-link";

function Menuitem({ item, open, anchorEl, handleClose }) {
  const navigate = useNavigate();

  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
      disableScrollLock={true}
    >
      {item.map((value) => (
        <MenuItem onClick={() => navigate(`/niche/${value}`)}>{value}</MenuItem>
      ))}
    </Menu>
  );
}

function Menuitemconst({
  open,
  anchorEl,
  handleClose,
  handleClick1,
  open1,
  catEl,
  handleClose1,
}) {
  const navigate = useNavigate();

  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
      disableScrollLock={true}
    >
      <MenuItem onClick={() => navigate("/about")}>About us</MenuItem>
      <MenuItem onClick={handleClick1}>Service</MenuItem>
      {
        <Menuitem
          open={open1}
          anchorEl={catEl}
          handleClose={handleClose1}
          item={catogery}
        />
      }
      <MenuItem>
        <HashLink to="/#Faq">FAQ</HashLink>
      </MenuItem>
      <MenuItem onClick={() => navigate("/project")}>Case Study</MenuItem>
      <MenuItem onClick={() => navigate("/quote/1")}>Contact us</MenuItem>
    </Menu>
  );
}

export default function Navbar() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [catEl, setCatEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event, item) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open1 = Boolean(catEl);
  const handleClick1 = (event, item) => {
    setCatEl(event.currentTarget);
  };
  const handleClose1 = () => {
    setCatEl(null);
  };

  return (
    <Box
      component="nav"
      className="flex justify-around items-center bg-black/70  h-24"
      minheight="64"
    >
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={() => navigate("/")}
        sx={{ padding: 0 }}
        className="flex justify-end"
      >
        <img
          alt="logo"
          src="/logo.png"
          className="w-14 mr-2 sm:w-20 fill-black "
        />

        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          LABRIDTECH
        </Typography>
      </IconButton>

      {isMobile() ? (
        <>
          <IconButton onClick={handleClick}>
            {" "}
            <MenuIcon sx={{ color: "#fff", height: 50, width: 50 }} />{" "}
          </IconButton>{" "}
          <Menuitemconst
            open={open}
            anchorEl={anchorEl}
            handleClose={handleClose}
            handleClick1={handleClick1}
            handleClose1={handleClose1}
            open1={open1}
            catEl={catEl}
          />{" "}
        </>
      ) : (
        <>
          <Box className="flex items-center">
            <Button
              className="!text-slate-900 !font-semibold !font-sans !text-lg"
              onClick={() => navigate("/about")}
            >
              About us
            </Button>

            <Button
              className="!text-slate-900 !font-semibold !font-sans !text-lg"
              onClick={handleClick1}
            >
              Service
            </Button>
            {
              <Menuitem
                open={open1}
                anchorEl={catEl}
                handleClose={handleClose1}
                item={catogery}
              />
            }

            <Button
              className="!text-slate-900 !font-semibold !font-sans !text-lg"
              onClick={() => navigate("/project")}
            >
              Case Study
            </Button>
            <HashLink
              className="!text-slate-900 !font-semibold !font-sans px-2  !text-lg"
              to="/#Faq"
            >
              FAQ
            </HashLink>
          </Box>
          <Box>
            <Button
              variant="contained"
              className="!rounded-3xl  bg-gradient-to-r from-blue-700 hover:to-blue-700 to-blue-300 "
              onClick={() => navigate("/quote/1")}
            >
              Contact us
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}
