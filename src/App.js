import PhotoWall from "./components/PhotoWall";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPhoto from "./components/AddPhoto";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PhotoWall />} />
          <Route path="/AddPhoto" element={<AddPhoto />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
