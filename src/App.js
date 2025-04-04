import React from 'react';
import Post from './Post';
import Header from "./Header";
//Render -> Renderizars

function App() {
  return (
    <>
      <Header title="JStack's Blog" subtitle="Posts da semana" />

      <hr />

      <Post
        likes={10}
        post={{
          title: "titulo da notícia 01",
          subtitle: "subtitulo da notícia 01",
        }}
      />
      <Post
        likes={22} // Changed from "22" (string) to 22 (number)
        post={{
          title: "titulo da notícia 02",
          subtitle: "subtitulo da notícia 02",
        }}
      />
      <Post
        likes={5}
        post={{
          title: "titulo da notícia 03",
          subtitle: "subtitulo da notícia 03",
        }}
      />
      <Post
        likes={15}
        post={{
          title: "titulo da notícia 04",
          subtitle: "subtitulo da notícia 04",
        }}
      />
    </>
  );
}

export default App;