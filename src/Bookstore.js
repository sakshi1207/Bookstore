import React, { Component } from 'react'
import './index.css'



const FirstBook={
    title:"Great Stories for Children",
    author:"Ruskin Bond",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXH_SZusDKUgu_ZGM3x2wUIDMFIA2V4iNlAAyiDBLYVpNkr69hH5ad0F0OBdX4dE2Uawk&usqp=CAU"
}

const SecondBook={
    title:"Word power Made Easy",
    author:"Norman lewis",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgflJYVWZYqUij7Z02prMGu3Uan8VRWlR5HXTKc4UlLDy7fofAye6bpjzcoxF7DJt5478&usqp=CAU"
}


function Bookstore(){
    return(
        <section className="booklist">
            <Book img={FirstBook.img}  author={FirstBook.author}  title={FirstBook.title} />      
            <Book img={SecondBook.img} author={SecondBook.author} title={SecondBook.title} />
        </section>
    )
}



const Book = (props) => {
const {img,title,author}=props;//this is just another way to precise props

// const Book=({img,title,author})=>{} -- another way to cretae


return (<article className='book'>
        <img src={img}></img>
        <h1>{title}</h1>
        <h2>{author}</h2>

{/* --below can be written as above also */}
        {/* <img src={props.img}></img> */}
        {/* <h1>{props.title}</h1> */}
        {/* <h2>{props.author}</h2> */}

        {/* This is a Book */}
        {/* <Img> </Img> */}

        {/* <Img /> */}
        {/* <Title /> */}
        {/* <Author /> */}

    </article>
    );
}

// const Img =() => <img src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80" alt="" width="200" height="200"></img>
// const Title = () => <h1 style={{color:'black',fontSize:'1.25rem'}}>{title}</h1>
// const Author = () => <h2 style={{color:'grey',fontSize:'1rem',marginTop:'0.75rem'}}>Ruskin Bond</h2>


export default Bookstore