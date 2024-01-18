import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector((state) => state.users);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
      navigate("/");
    }
  };
  const handleChange = (event) => {
    setUserId(event.target.value);
  };
  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const userOptions = users.map((user) => (
    <MenuItem key={user.id} value={user.id}>
      {user.name}
    </MenuItem>
  ));

  return (
    <Container maxWidth="md">
      <Box>
        <Typography variant="h2">Add new Post</Typography>
        <Link to="/">
          <Button variant="outlined">Back</Button>
        </Link>
      </Box>
      <Box sx={{ width: "70%", mt: 2 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Author</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={userId}
            label="Author"
            onChange={handleChange}
          >
            {userOptions}
          </Select>
        </FormControl>
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
      <Box sx={{ mt: 2 }}>
        <Button
          variant="outlined"
          onClick={onSavePostClicked}
          disabled={!canSave}
        >
          Add
        </Button>
      </Box>
    </Container>
  );
};
