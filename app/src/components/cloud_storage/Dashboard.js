import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import { useFolder } from "../../hooks/useFolder";
import File from "../File";
import Folder from "../Folder";
import AddFileButton from "./AddFileButton";
import AddFolderButton from "./AddFolderButton";
import FolderBreadCrumbs from "./FolderBreadCrumbs";
import ImageGrid from "./ImageGrid";
import Modal from "./Modal";

import NavbarComponent from "./NavBarComponent";

const Dashboard = () => {
  const [selectedImg, setSelectedImg] = useState(null)
  const { state = {} } = useLocation();
  const { folderId } = useParams();
  const { folder, childFolders, childFiles } = useFolder(
    folderId,
    state.folder
  );

  return (
    <>
      {/* <NavbarComponent /> */}
      <Container fluid>
        <div className="d-flex align-items-center">
          <FolderBreadCrumbs currentFolder={folder} />
          <AddFileButton currentFolder={folder} />
          <AddFolderButton currentFolder={folder} />
          
        </div>

        {childFolders.length > 0 && (
          <div className="d-flex flex-wrap">
            {childFolders.map((childFolder) => (
              <div
                key={childFolder.id}
                style={{ maxWidth: "150px" }}
                className="p-2"
              >
                <Folder folder={childFolder} />
              </div>
            ))}
          </div>
        )}
        {childFolders.length > 0 && childFiles.length > 0 && <hr />}
        {/* {
          childFiles.length > 0 && (
            <div className="d-flex flex-wrap">
              {
                childFiles.map(childFile => (
                  <div key={childFile.id} style={{maxWidth: '150px'}} className="p-2">
                   <File file={childFile} />
                  </div>
                ))
              }
 
            </div>
          )
        }  */}
        {childFiles.length > 0 && (
          <>
            <ImageGrid files={childFiles} setSelectedImg={setSelectedImg} />
            {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
          </>
        )}
      </Container>
    </>
  );
};

export default Dashboard;
