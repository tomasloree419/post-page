import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { postUpdated } from "./postsSlice";

export const EditPostForm = () => {
  const { postId } = useParams();
  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  );

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postUpdated({
          id: postId,
          title,
          content,
        })
      );
      navigate(`/posts/${postId}`);
    }
  };
  return (
    <Container maxWidth="md">
      <Box>
        <Typography variant="h2">Edit Post</Typography>
        <Link to={`/posts/${postId}`}>
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
          Save
        </Button>
      </Box>
    </Container>
  );
};
