import React from "react";
import Divider from "@mui/material/Divider";

import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ContentPaste from "@mui/icons-material/ContentPaste";
import Cloud from "@mui/icons-material/Cloud";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { saveAs } from "file-saver";


const IconMenu = ({ file, setSelectedImg }) => {
  const handlePreview = (e) => {
    e.preventDefault();
    setSelectedImg(file.url);
  };

  return (
    <MenuList>
      <MenuItem onClick={handlePreview}>
        <ListItemIcon>
          <VisibilityOutlinedIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Preview</ListItemText>
      </MenuItem>
      <Divider />
      <MenuItem  onClick={() => saveAs(file.url, file.name)}>
        <ListItemIcon>
          <FileDownloadOutlinedIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Download</ListItemText>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <ContentPaste fontSize="small" />
        </ListItemIcon>
        <ListItemText>Paste</ListItemText>
      </MenuItem>
      <Divider />
      <MenuItem>
        <ListItemIcon>
          <DeleteOutlineOutlinedIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Delete</ListItemText>
      </MenuItem>
    </MenuList>
  );
};

export default IconMenu;
