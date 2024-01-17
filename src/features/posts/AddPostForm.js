import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postAdded } from "./postsSlice";
import { nanoid } from "@reduxjs/toolkit";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content));
      navigate("/");
    }
    setTitle("");
    setContent("");
  };

  return (
    <Container maxWidth="md">
      <Box>
        <Typography variant="h2">Add new Post</Typography>
        <Link to="/">
          <Button variant="outlined">Back</Button>
        </Link>
      </Box>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { mt: 2, width: "70%" },
        }}
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="Title"
            value={title}
            onChange={onTitleChanged}
          />
        </div>
        <div>
          <TextField
            id="outlined-multiline-static"
            label="Content"
            value={content}
            multiline
            rows={8}
            onChange={onContentChanged}
          />
        </div>
      </Box>
      <Box style={{ marginTop: 10 }}>
        <Button variant="outlined" onClick={onSavePostClicked}>
          Add
        </Button>
      </Box>
    </Container>
  );
};
