import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Post } from "./Post";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { onDeletePost } from "./postsSlice";
import { selectAllPosts } from "./postsSlice";

export const PostsList = () => {
  const posts = useSelector((state) => selectAllPosts(state));
  const dispatch = useDispatch();
  const deletePost = (id) => {
    console.log(id);
    dispatch(onDeletePost(id));
  };
  const orderedPosts = posts
    .slice()
    .sort((a, b) => a.date.localeCompare(b.date));
  const renderedPosts = orderedPosts.map((post) => (
    <Post key={post.id} post={post} deletePost={deletePost} />
  ));

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
