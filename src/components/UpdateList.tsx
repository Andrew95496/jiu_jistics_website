import React from 'react'

function UpdateList(props: any) {
   const blogs = props.blogs;

   console.log(props,blogs);
   
  return (
    <>{blogs.map((blog) => (
        <div key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.post}</p>
            <a href={blog.link}>Github</a>
        </div>
    ))}</>
  )
}

export default UpdateList