import React from "react";
import { Link } from "react-router-dom";
import { FcFolder } from "react-icons/fc";
import { Button } from "react-bootstrap";
import { ImFolder } from "react-icons/im";
import {GiOpenFolder} from "react-icons/gi"

const Folder = ({ folder }) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  let createdAt;
  if (folder.createdAt !== null) {
    createdAt = new Date(
      folder.createdAt.seconds * 1000 + folder.createdAt.nanoseconds / 1000000
    ).toLocaleDateString("en-NL", options);
  }

  return (
    <Button
      to={{ pathname: `/folder/${folder.id}`, state: { folder: folder } }}
      variant="light"
      as={Link}
      className="bg-transparent"
    >
      <div className="container-fluid">
        <div className="row">
          {/* <ImFolder className='mr-2' size={60} color="#09F" /> */}
          <FcFolder className="mr-2" size={60}  />
        </div>
        <div className="row text-truncate w-100 ">
          <span className="lead text-start text-truncate w-100">
            {folder.name}
          </span>
          <small className="text-center text-muted">{createdAt}</small>
        </div>
      </div>
    </Button>
  );
};

export default Folder;
