import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PostsList } from "./features/posts/PostsList";
import { AddPostForm } from "./features/posts/AddPostForm";
import { SinglePostPage } from "./features/posts/SinglePostPage";
import { EditPostForm } from "./features/posts/EditPostForm";
import { Navbar } from "./app/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route exact path="/create" element={<AddPostForm />} />
        <Route exact path="/posts/:postId" element={<SinglePostPage />} />
        <Route exact path="/edit/:postId" element={<EditPostForm />} />
      </Routes>
    </Router>
  );
}

export default App;
