import { BlogProvider } from "./context/BlogContext";
import { CreateBlog } from "./pages/CreateBlog";
import Blog from "./pages/Blog";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import store from "./redux/store";

import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      {" "}
      <BlogProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-blog" element={<CreateBlog />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </BlogProvider>
    </Provider>
  );
}

export default App;
