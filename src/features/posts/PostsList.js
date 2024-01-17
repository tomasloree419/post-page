import React from "react";
import { useSelector } from "react-redux";
import { Post } from "./Post";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

export const PostsList = () => {
  const posts = useSelector((state) => state.posts);
  const renderedPosts = posts.map((post) => <Post key={post.id} post={post} />);

  return (
    <Container maxWidth="md">
      <Box>
        <Typography variant="h2">All Posts</Typography>
        <Link to="/create">
          <Button variant="outlined">Add Post</Button>
        </Link>
        <List
          sx={{ width: "100%", maxWidth: 1200, bgcolor: "background.paper" }}
        >
          {renderedPosts}
        </List>
      </Box>
    </Container>
  );
};
