import React,{useState,useEffect} from 'react'
import styled from "styled-components";
import "./App.css"


function App() {
 const API_KEY = "ZOSQdJgQgosU2WTHbmJ7bvpNsDfjWZ66cTJaktCk";
 const [copyright,setCopyright] = useState("");
 const [date,setDate] = useState("");
 const [explain,setExplain] = useState("");
 const [url,setUrl] = useState("");
 const [title,setTitle] = useState("");
 

 const getImage = async()=>{
  const data = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
   const res = await data.json();
   console.log(res);
   setCopyright(res.copyright);
   setDate(res.date);
   setExplain(res.explanation);
   setUrl(res.url);
   setTitle(res.title);
   
 }

 
 const [limit,setLimit] = useState(0);

 useEffect(()=>{
   getImage();

 
},[]);



 

 const [statement,setStatement] = useState("Like");
 const [inputStyle,setInputStyle] = useState({
   background:"white",
   color:"black",
 })

const [heart,setHeart] = useState("🤍");

  return (
   <Container>
     <Image src={url}></Image>
     <Box>
       <Card>
       <h1>{title}</h1>
        <img src={url} alt="No image present" />
        <iframe src={url} ></iframe>
         <p>{explain}</p>
         <h3>{date}</h3>
         <h3>{copyright}</h3>
         <Social>
           <button style={inputStyle}  onClick={()=>{
             setLimit(...limit+1);
             if(limit%2===   0)
             {
               setStatement("Liked");

               setInputStyle({
                background:"lightblue",
                color:"black",
               })
               setHeart("💗");
             }
             else{
              setStatement("Like");
               setInputStyle({
                background:"white",
                color:"black",
               })
               setHeart("🤍");
              
             }
           }}>{statement} {heart}</button>
           
             
           <button onClick={()=>{
             navigator.clipboard.writeText(url);
             alert("Linked Coped to clipboard");
           }}>Share 🔗</button>

         </Social>
       </Card>
     </Box>
   </Container>
  )
}



const Container = styled.div`
 
 box-sizing:border-box;
 height:100vh;
 display:flex;
 justify-content:center;
 align-items:center;
 position:relative;
 
`;
const Image = styled.img`
   position:relative;
   height:110%;
   width:100%;
   filter:blur(8px);
 
`;

const Box = styled.div`
 height:auto;
 width:45%;
 border-radius:15px;
 padding:14px 14px 14px 14px;
 background: #355C7D;  /* fallback for old browsers */
background: -webkit-linear-gradient(to top, #C06C84, #6C5B7B, #355C7D);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to top, #C06C84, #6C5B7B, #355C7D); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

 position:absolute;
 top:4%;
`;
const Card = styled.div`
 background:white;
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
 padding:14px 14px 14px 14px;
 opacity:65%;
 border-radius:15px;
 transition:0.6s ease-out;
 &:hover{
 opacity:100%;
 }
 p{
   text-align:justify;
 }
  img{
       height:50%;
       width:55%;
       border-radius:4px;
       box-shadow:2px 2px 2px 2px black;
       transition:0.6s ease-out;
       &:hover{
        transform:scale(106%);
        margin-bottom:2%;
       }
      
  }
  iframe{
        height:50%;
       width:55%;
       border-radius:4px;
       box-shadow:2px 2px 2px 2px black;
       transition:0.6s ease-out;
       &:hover{
        transform:scale(106%);
         } 
       }
`;
const Social = styled.div`
 display:flex;
 flex-wrap:wrap;
 gap:20px;
 align-items:center;
 justify-content:center;
 button{
   width:auto;
   height:auto;
   font-size:18px;
   font-weight:600px;
   border-radius:4px;
   box-shadow:2px 2px 2px 2px black;
   transition:0.6s ease-in;
   &:hover{
      color:white;
      background:black;
      box-shadow:2px 2px 2px 2px white;

    }
 }
`;
export default App
