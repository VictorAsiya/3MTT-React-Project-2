// import React from "react";
// import "./App.css";

// import { useState } from "react";

// const Blog = () => {
//   const [post, setPost] = useState([
//     {
//       title: "Nigeria is Dead, says victor Asiya",
//       content:
//         "The country is dead, and the people are not aware. The people are not aware because they are not educated. The people are not educated because they are not aware.",
//       author: "Victor Asiya",
//       id: 1
//     },
//     {
//       title: "Chess.com is the best Chess gaming App",
//       content:
//         "Chess.com is the best Chess gaming App. It has a lot of features that make it the best. It has a lot of features that make it the best. It has a lot of features that make it the best.",
//       author: "Bassey Ekpo",
//       id: 2
//     },
//     {
//       title: "We want different thinga",
//       content:
//         "We want different things. We want different things. We want different things. We want different things. We want different things.",
//       author: "Pamela Chidiagor",
//       id: 3
//     },
//   ]);

//   return (
//     <div>
//       {post.map((article)=>(
//         <div className="content" key={article.id}>
//         <h1>{article.title}</h1>
//         <p>{article.content}</p>
//         <p>{article.author}</p>
        
//       </div>
//       ))}
//     </div>
//   );
// };
// export default Blog;

// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   const [blog, setblog] = useState([
//     {
//       title: 'Miracle in PUSH',
//       content: 'Lorem ipsum dolor sit amet con',
//       author: 'Victor Asiya',
//       id: 1
//     },
//     {
//       title: 'Zimbabwe On Fire for Christ',
//       content: 'Lorem ipsum dolor sit amet con',
//       author: 'Gerals Nneji',
//       id: 2
//     },
//     {
//       title: 'Finally says Miriam',
//       content: 'Lorem ipsum dolor sit amet con',
//       author: 'Comfort Etim',
//       id: 3
//     }
//   ])
//   return (
//     <div>
//       {blog.map((post)=>(
//         <div key={blog.id}>
//           <h1>{post.author}</h1>
//           <p>{post.content}</p>
//           <p>written by: {post.author}</p>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default App



// This is for Creating and Deleting a blog post (IGNORE THIS)
// import React from 'react'
// import Home from './Bloglist/BlogList_Home'

// function App() {
  
//   return (
//     <div>
//       <Home/>
//     </div>
//   )
// }

// export default App


// 3MTT Click Counter App
import React from 'react'
import Main from './CounterApp/Main'
import './App.css'

function App() {
  return (
    <div>
      <Main/>
    </div>
  )
}

export default App
