import React from 'react';
import Post from './Post';
//Render -> Renderizars

function App(){
  return (
    <>
      <h1>JStack's Blog</h1>
      <h1>Posts da semana</h1>
      <hr />

      <Post
        title="Titulo da notícia 01" 
        subtitle ="subtitulo da notícia 01"
      />
      <Post
        title="Titulo da notícia 02" 
        subtitle ="subtitulo da notícia 02"
      />
      <Post
        title="Titulo da notícia 03" 
        subtitle ="subtitulo da notícia 03"
      />
      <Post
        title="Titulo da notícia 04" 
        subtitle ="subtitulo da notícia 04"
      />
    </>
  )
}

export default App;