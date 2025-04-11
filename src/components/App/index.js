import React, { useState } from "react";
import Post from "../Post";
import Header from "../Header";

import { Title } from "./styles";

import ThemeProvider from "../../context/ThemeContext";
//Render -> Renderizars

function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: "titulo da notícia 01",
      subtitle: "subtitulo da notícia 01",
      likes: 10,
      read: true,
      removed: false,
    },
    {
      id: Math.random(),
      title: "titulo da notícia 02",
      subtitle: "subtitulo da notícia 02",
      likes: 25,
      read: false,
      removed: true,
    },
    {
      id: Math.random(),
      title: "titulo da notícia 03",
      subtitle: "subtitulo da notícia 03",
      likes: 44,
      read: false,
      removed: false,
    },
  ]);

  function handleRefresh() {
    setTimeout(() => {
      setPosts((prevState) => [
        ...prevState,
        {
          id: Math.random(),
          title: `titulo da notícia 0${prevState.length + 1}`,
          subtitle: `subtitulo da notícia 0${prevState.length + 1}`,
          likes: 44,
        },
      ]);
    }, 50);
  }

  function handleRemovePost(postId) {
    setPosts((prevState) =>
      prevState.map((post) =>
        post.id === postId ? { ...post, removed: true } : post
      )
    );
  }

  return (
    <ThemeProvider>
      <Header>
        <Title as="h2">
          Posts da semana
          <button onClick={handleRefresh}>Atualizar</button>
        </Title>
      </Header>

      <hr />

      {posts.map((post) => (
        <Post
          key={post.id}
          onRemove={handleRemovePost}
          likes={post.likes}
          post={post}
        />
      ))}
    </ThemeProvider>
  );
}

export default App;
