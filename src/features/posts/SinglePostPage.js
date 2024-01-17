import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

export const SinglePostPage = () => {
  const { postId } = useParams();

  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  );

  return (
    <Container maxWidth="md">
      <Box>
        <Typography variant="h2">{post.title}</Typography>
        <Typography variant="h4">{post.content}</Typography>
      </Box>
      <Box style={{ marginTop: 10 }}>
        <Link to={`/edit/${post.id}`}>
          <Button variant="outlined">Edit</Button>
        </Link>
      </Box>
    </Container>
  );
};
