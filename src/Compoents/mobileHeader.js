import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import "./mobileHeader.css";

const options = [
  "About Company",
  "Cyber Security",
  "Governance",
  "Safety ",
  "Sustainability",
];

const ITEM_HEIGHT = 60;

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        className="MenuItem"
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon
          sx={{
            display: {
              xs: "block",
              lg: "none",
              xl: "none",
              sm: "block",
              md: "none",
            },
          }}
        />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {options.map((option) => (
          <Link to={option.replace(/ /g, "")}>
            <MenuItem selected key={option} onClick={handleClose}>
              {option}
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </div>
  );
}
