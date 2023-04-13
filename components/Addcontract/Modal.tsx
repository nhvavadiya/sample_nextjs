import React, { useState } from "react";
import styled from "@emotion/styled";
import { Modal, Select, MenuItem, TextField, InputLabel } from "@mui/material";
import FileDropzone from "./Dropzone";
import { useDropzone } from "react-dropzone";
const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledModalContainer = styled.div`
  background-color: white;
  width: 800px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // overflow: auto;
`;

const StyledInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-top: 10px;
  gap: 20px;
`;

type ModalProps = {
  open: boolean;
  handleClose: () => void;
};

export default function MyModal({ open, handleClose }: ModalProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleClose();
  };
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const handleUploadModalOpen = () => {
    setUploadModalOpen(true);
  };

  const handleUploadModalClose = () => {
    setUploadModalOpen(false);
  };
  const { getRootProps, getInputProps } = useDropzone();

  return (
    <>
    <StyledModal open={open} onClose={handleClose} style={{color:'black'}}>
      <StyledModalContainer>
        <h2 className="text-center text-3xl">Add New Contract Here!</h2>
        <h2 className="text-center text-0.5xl pb-6">Review/Update the new contract information below</h2>
        <hr />

        <form onSubmit={handleSubmit}>
        <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
          <Select
            className="w-[100%] mt-10"
            labelId="demo-simple-select-standard-label"
            value="age"
          />
          <div className="my-10">
            <h1 className="text-[18px] pb-2 ">PROJECT DETAILS</h1>
            <TextField
              className="w-[100%] "
              label="Public Body"
              variant="outlined"
            />

            <StyledInputContainer>
              <TextField
                className="w-[100%]"
                label="Project  Name"
                variant="outlined"
              />
              <TextField
                className="w-[100%]"
                label="Contract ID"
                variant="outlined"
              />
            </StyledInputContainer>
            <StyledInputContainer>
              <TextField
                className="w-[100%]"
                label="Award Date"
                variant="outlined"
              />
              <TextField
                className="w-[100%]"
                label="Award Amount"
                variant="outlined"
              />
            </StyledInputContainer>
            <StyledInputContainer>
              <TextField
                className="w-[100%]"
                label="Status"
                variant="outlined"
              />

              <TextField
                className="w-[100%]"
                label="Project Type"
                variant="outlined"
              />
            </StyledInputContainer>
          </div>

          <hr />

          <div className="mt-10 pb-6">
            <h1 className="text-[18px] pb-2 ">PROJECT LOCATIONS</h1>
            <TextField
              className="w-[100%] pt-2"
              label="Street Address"
              variant="outlined"
            />
            <StyledInputContainer>
              <TextField className="w-[100%]" label="City" variant="outlined" />
              <TextField
                className="w-[100%]"
                label="Country"
                variant="outlined"
              />
            </StyledInputContainer>

            <StyledInputContainer>
              <TextField
                className="w-[100%]"
                label="State"
                variant="outlined"
              />
              <TextField
                className="w-[100%]"
                label="Zip Code"
                variant="outlined"
              />
            </StyledInputContainer>
          </div>

          <hr />

          {/* <div className="mt-10">
            <h1 className="text-[18px] pb-2 ">PROJECT LOCATIONS</h1>
            <TextField
              className="w-[100%] pt-2"
              label="Street Address"
              variant="outlined"
            />
            <StyledInputContainer>
              <TextField className="w-[100%]" label="City" variant="outlined" />
              <TextField
                className="w-[100%]"
                label="Country"
                variant="outlined"
              />
            </StyledInputContainer>

            <StyledInputContainer>
              <TextField
                className="w-[100%]"
                label="State"
                variant="outlined"
              />
              <TextField
                className="w-[100%]"
                label="Zip Code"
                variant="outlined"
              />
            </StyledInputContainer>
          </div>
          <div className="flex justify-between">
            <button className="underline" type="submit">
              + Add another sub contractor
            </button>
            <button  onClick={handleUploadModalOpen} className="underline text-blue-400">Upload contract</button>
          </div> */}

        </form>
      </StyledModalContainer>
    </StyledModal>
      <FileDropzone
      open={uploadModalOpen}
      handleClose={handleUploadModalClose}
      getRootProps={getRootProps}
      getInputProps={getInputProps}
    />
    </>
  );
}
