import React, {useState} from 'react';
import Post from './Post';
import Header from './Header';
const category = 'Posts da semana';


// Props -> Properties
// JSX forbids a child div to exist without a parent.
// Using react fragment, we create a ghost element that will not be rendered so JSX shuts up
function App(){
    const [posts, setPosts] = useState([
        {
            id: Math.random(),
            title: "Titulo da noticia 01",
            subtitle: "text",
            likes: 14,
            read: false
        },
        {
            id: Math.random(),
            title: "Titulo da noticia 02",
            subtitle: "text",
            likes: 20,
            read: true
        },
        {
            id: Math.random(),
            title: "Titulo da noticia 03",
            subtitle: "text",
            likes: 30,
            read: false
        },
        {
            id: Math.random(),
            title: "Titulo da noticia 04",
            subtitle: "text",
            likes: 40,
            read: false
        }
    ]);

    function handleRefresh(){
        console.log('refresh');
        // posts.push({
        //     id: Math.random(),
        //     title: `Titulo da noticia ${posts.length + 1}`,
        //     subtitle: "text",
        //     likes: 0
        // });
        setPosts((prevState) => [
            ...prevState,
            {
                id: Math.random(),
                title: `Titulo da noticia ${prevState.length + 1}`,
                subtitle: "text",
                likes: 0
            }
        ]);
    
    }

    function handleRemovePost(postId){
        setPosts((prevState) => 
            // If the element is different of postId, it will be thrown into the new array.
            prevState.filter(post => post.id !== postId)
        )
    }

    return (
        <>
            <Header >
                <h2>Posts semanais
                    <button onClick = {handleRefresh}>refresh</button>
                </h2>
            </Header>
            <hr />
            {/* A função map itera sobre o array de objetos, desconstruindo cada objeto em suas propriedades. */}
           {posts.map((post, index) => (
               <Post 
               key={post.id}
               post={post}
               onRemove={handleRemovePost}
               likes={post.likes} 
               />
           ))}
        </>    
    );
}

export default App;