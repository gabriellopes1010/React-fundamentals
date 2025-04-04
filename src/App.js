import React from 'react';
import Post from './Post';
import Header from "./Header";
//Render -> Renderizars

const posts = [
  {
    title: "titulo da notícia 01",
    subtitle: "subtitulo da notícia 01",
    likes: 10,
  },
  {
    title: "titulo da notícia 02",
    subtitle: "subtitulo da notícia 02",
    likes: 25,
  },
  {
    title: "titulo da notícia 03",
    subtitle: "subtitulo da notícia 03",
    likes: 44,
  },
];

function App() {
  return (
    <>
      <Header title="JStack's Blog" subtitle="Posts da semana" />

      <hr />

      {posts.map((post) => (
        <Post
          key={post.title}
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