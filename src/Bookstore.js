import React, { Component } from 'react'
import './index.css'
function Bookstore(){
    return(
        <section className="booklist">
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            
        </section>
    )
}

const Book = () => {
    return <article>
        {/* This is a Book */}
        {/* <Img> </Img> */}

        <Img />
        <Title />
        <Author />

    </article>
}

const Img =() => <img src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80" alt="" width="200" height="200"></img>
export default Bookstore

const Title = () => <h1 style={{color:'black',fontSize:'1.25rem'}}>Great Stories for Children</h1>

const Author = () => <h2 style={{color:'grey',fontSize:'1rem',marginTop:'0.75rem'}}>Ruskin Bond</h2>