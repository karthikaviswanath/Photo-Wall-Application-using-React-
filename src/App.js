import { useState } from "react";
import PhotoWall from "./components/PhotoWall";
import Title from "./components/Title";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPhoto from "./components/AddPhoto";
import NotFound from "./components/NotFound";

const postList = [
  {
    id: 0,
    description: "Pansy flower",
    imageLink:
      "https://th.bing.com/th/id/R.d66779d98fc67121b0658a4ff1fcfb2f?rik=9%2fFE6I3ccA2PzQ&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f7%2f76%2fViola_tricolor_pansy_flower_close_up.jpg&ehk=ZeB3QvCBEnH8f2Z4HyFFlxfHHNS1uryzpehWmgBWHmw%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: 1,
    description: "Bulguksa Lake scenery",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/8/8b/Bulguksa_Lake_scenery.jpg",
  },
  {
    id: 2,
    description: "Rainbow Lorikeets",
    imageLink:
      "https://live.staticflickr.com/65535/49808893567_64d0c54217_b.jpg",
  },
];

function App() {
  const [posts, setPosts] = useState(postList);

  const deletePost = (post) => {
    let updatedPostList = posts.filter((p) => p !== post);
    setPosts(updatedPostList);
  };

  const createPost = (post) => {
    let updatedPostList = posts.concat(post);
    setPosts(updatedPostList);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Title />
                <PhotoWall posts={posts} removePost={deletePost} />
              </>
            }
          />
          <Route
            path="/AddPhoto"
            element={
              <AddPhoto
                onAddPhoto={(addedPost) => {
                  createPost(addedPost);
                }}
              />
            }
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
