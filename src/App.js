import PhotoWall from "./components/PhotoWall";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPhoto from "./components/AddPhoto";
import NotFound from "./components/NotFound";
import Title from "./components/Title";
import SinglePost from "./components/SinglePost";

function App() {
  return (
    <>
      <Title />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PhotoWall />} />
          <Route path="/AddPhoto" element={<AddPhoto />} />
          <Route path="/SinglePost/:id" element={<SinglePost />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
