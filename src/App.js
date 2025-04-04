import React, { useState } from "react";
import Post from "./Post";
import Header from "./Header";
//Render -> Renderizars

function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: "titulo da notícia 01",
      subtitle: "subtitulo da notícia 01",
      likes: 10,
    },
    {
      id: Math.random(),
      title: "titulo da notícia 02",
      subtitle: "subtitulo da notícia 02",
      likes: 25,
    },
    {
      id: Math.random(),
      title: "titulo da notícia 03",
      subtitle: "subtitulo da notícia 03",
      likes: 44,
    },
  ]);

  console.log({ posts });

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
    }, 2000);
  }

  return (
    <>
      <Header>
        <h2>
          Posts da semana
          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>

      <hr />

      {posts.map((post) => (
        <Post
          key={post.id}
          likes={post.likes}
          post={{
            title: post.title,
            subtitle: post.subtitle,
          }}
        />
      ))}
    </>
  );
}

export default App;
