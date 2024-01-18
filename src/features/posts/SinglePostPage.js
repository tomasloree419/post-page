import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { PostAuthor } from "./PostAuthor";
import { selectPostById } from "./postsSlice";

export const SinglePostPage = () => {
  const { postId } = useParams();

  const post = useSelector((state) => selectPostById(state, postId));

  return (
    <Container maxWidth="md">
      <Box>
        <Typography variant="h2">{post.title}</Typography>
        <Typography variant="h4">{post.content}</Typography>
        <Typography
          variant="h6"
          sx={{ fontStyle: "italic", color: "text.secondary" }}
        >
          By&nbsp;
          <PostAuthor userId={post.user} />
        </Typography>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Link to={`/edit/${post.id}`}>
          <Button variant="outlined">Edit</Button>
        </Link>
      </Box>
    </Container>
  );
};
