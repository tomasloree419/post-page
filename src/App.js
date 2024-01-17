import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PostsList } from "./features/posts/PostsList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostsList />} />
      </Routes>
    </Router>
  );
}

export default App;
