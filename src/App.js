import React from 'react';
import Post from './Post';
import Header from './Header';
const category = 'Posts da semana';
// Props -> Properties
// JSX forbids a child div to exist without a parent.
// Using react fragment, we create a ghost element that will not be rendered so JSX shuts up
function App(){
    return (
        <>
            <Header >
                <h2>Posts semanais</h2>
            </Header>
            <hr />
            <Post 
            likes = {14}
            post = {{
                title: "Titulo da noticia 01",
                subtitle: "text"
            }}
            />
            <Post
            likes = {20} 
            post = {{
                title: "Titulo da noticia 02",
                subtitle: "text"
            }}
            />
            <Post 
            likes = {30}
            post = {{
                title: "Titulo da noticia 03",
                subtitle: "text"
            }}
            />

        </>    

    );
}

export default App;