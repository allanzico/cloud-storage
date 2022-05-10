import React from "react";
import { motion } from "framer-motion/dist/framer-motion";
import { BsThreeDotsVertical } from "react-icons/bs";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, {
  bindTrigger,
  bindMenu,
  use,
} from "material-ui-popup-state";
import IconMenu from "./IconMenu";

const ImageGrid = ({ files, setSelectedImg }) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return (
    <div className="img-grid">
      {files &&
        files.map((file) => (
        
          <motion.div
            whileHover={{ opacity: 1 }}
            layout
            className="img-wrap"
            key={file.id}
          >
            <motion.img
              src={file.url}
              alt={file.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
            <div className="transbox">
              <h6>{
                
                file.createdAt && new Date(
                  file.createdAt.seconds * 1000 + file.createdAt.nanoseconds / 1000000
                ).toLocaleDateString("en-NL", options)
                
                }</h6>
              <PopupState
                variant="popover"
                popupId="demo-popup-menu"
                transition
              >
                {(popupState) => (
                  <React.Fragment>
                    <div
                      className="context-menu"
                      variant="contained"
                      {...bindTrigger(popupState)}
                    >
                      <BsThreeDotsVertical />
                    </div>

                    <Menu
                      {...bindMenu(popupState)}
                      elevation={5}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      style={{ margin: 5 }}
                    >
                      <IconMenu file={file} setSelectedImg={setSelectedImg} />
                    </Menu>
                  </React.Fragment>
                )}
              </PopupState>
            </div>
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
