import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CastForEducationIcon from "@material-ui/icons/CastForEducation";
import HomeIcon from "@material-ui/icons/Home";
import IconButton from "@material-ui/core/IconButton";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import PermPhoneMsgIcon from "@material-ui/icons/PermPhoneMsg";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CodeIcon from "@mui/icons-material/Code";
import MicIcon from "@mui/icons-material/Mic";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import ChatIcon from "@mui/icons-material/Chat";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import QuizIcon from "@mui/icons-material/Quiz";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import BookIcon from "@material-ui/icons/Book";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import ExploreIcon from "@material-ui/icons/Explore";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import { InputLabel } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { Link } from "react-router-dom";

// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../actions/userActions";

// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const drawerWidth = 340;

const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  const [openslider, setOpenslider] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpenslider(true);
  };

  const handleDrawerClose = () => {
    setOpenslider(false);
  };

  return (
    <div>
      <AppBar
        style={{ background: "#F3FAFF" }}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: openslider,
        })}
      >
        <Toolbar>
          <IconButton
            style={{ color: "black" }}
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, openslider && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} noWrap>
            <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
              {`ORU Phones Admin Dashboard`}
            </Link>
          </Typography>
          {/* 🌐 */}
          {/* <Select
            style={{ marginRight: "20px" }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
            onChange={handleChange}
          >
            <MenuItem
              value={10}
              onClick={() => {
                navigate("/");
              }}
            >
              English
            </MenuItem>
            <MenuItem
              value={20}
              onClick={() => {
                navigate("/hin");
              }}
            >
              हिंदी
            </MenuItem>
          </Select> */}
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={openslider}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <ListItem button key="ORU Phones">
            <ListItemText primary={<h4>{`ORU Phones`}</h4>} />
          </ListItem>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />

        <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
          <List>
            <ListItem button key="Home">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </List>
        </Link>

        <Link to={"/query1"} style={{ textDecoration: "none", color: "black" }}>
          <List>
            <ListItem button key="Query1">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Users with Lower Income and luxury car" />
            </ListItem>
          </List>
        </Link>

        <Link to={"/query2"} style={{ textDecoration: "none", color: "black" }}>
          <List>
            <ListItem button key="Query2">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Male Users which have phone price greater than 10,000" />
            </ListItem>
          </List>
        </Link>

        <Link to={"/query3"} style={{ textDecoration: "none", color: "black" }}>
          <List>
            <ListItem button key="Query3">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="User Last name starts with “M”, Quote character length greater than 15 and email includes their last name." />
            </ListItem>
          </List>
        </Link>

        <Link to={"/query4"} style={{ textDecoration: "none", color: "black" }}>
          <List>
            <ListItem button key="Query4">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="User has luxury car and email contains no digit" />
            </ListItem>
          </List>
        </Link>

        <Link to={"/query5"} style={{ textDecoration: "none", color: "black" }}>
          <List>
            <ListItem button key="Query5">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Top 10 cities which have the highest number of users and their average income" />
            </ListItem>
          </List>
        </Link>

        <Divider />
        <Divider />
      </Drawer>
    </div>
  );
};

export default Header;
