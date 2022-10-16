import React from 'react'
import {Container} from "@mui/material"
import { Typography,Grid } from '@mui/material'
import Button from "@mui/material/Button"
import FilterListIcon from '@mui/icons-material/FilterList';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import styled,{ ThemeProvider }  from "styled-components"
import products from '../components/products'
import { useEffect ,useRef } from 'react'
import { useState } from 'react'
console.log(products)
const Products = () => {
    const myref=useRef()

    const [filteredState,setFilteredState]=useState("Newest")
    const shorten= (ali) => {
        if (ali.length>20){
            return ali.slice(0,19)+"..."
        }
        return ali
    }
    const [myproducts,setMyproducts]=useState([])
    const [filterClick,setFilterClick]=useState(false)
    const handleClickFilter = (ali) => {
        switch (ali) {
            case "Newest" :
                setMyproducts((a)=>[...a].sort((k,l)=> {
                    if (k.status ==="new"){
                        return -1
                    }
                    else {
                        return 1
                    }
                }))
                break 
                case "Price:High-Low" :
                    setMyproducts((a)=>[...a].sort((k,l)=> {
                        if (k.price>l.price){
                            return 1
                        }
                        else {
                            return -1
                        }
                    }))
                    break  
                    case "Price:Low-High" :
                        setMyproducts((a)=>[...a].sort((k,l)=> {
                            if (k.price< l.price){
                                return 1
                            }
                            else {
                                return -1
                            }
                        }))
                        break 
                    case "Featured":
                        setMyproducts((a)=>[...a].sort((k,l)=>0.5 - Math.random())
                        )
                        break;      
                       
        }
    } 
    useEffect(()=> {
      setMyproducts(()=>products)
    },[])
    // useEffect(()=> {
    //      setTimeout(()=> {
    //         setFilterClick(a=>!a)
    //      },1000)
    // },[filteredState])
    //console.log(filterClick)
   
    console.log(myref.current)
  return (
    <Container >
    <Typography my={5} component="h2" variant='h5'>Products</Typography>
     <MYdiv ><div ><Button onClick={()=>handleClickFilter(filteredState)} sx={{color:"black",textTransform:"capitalize"}} endIcon={<FilterListIcon/>}>Filters</Button><Button onClick={()=>setFilterClick(a=>!a)} sx={{color:"black",textTransform:"capitalize"}}  endIcon={!filterClick ? <ArrowDownwardIcon/> : <ArrowUpwardIcon/>}>Sort-by : {filteredState}</Button>
       {filterClick && <div ref={myref} >
           <ul>
               <li onClick={(e)=>{
                   
                   
                   setFilteredState(a=>e.target.textContent)
                
                }}>Featured</li>
               <li onClick={(e)=>{
                   
                  
                   setFilteredState(a=>e.target.textContent)
                
                }}>Newest</li>
               <li onClick={(e)=>{
                   
                   
                   setFilteredState(a=>e.target.textContent)
                
                }}>Price:High-Low</li>
               <li onClick={(e)=>{
                   
                   
                   setFilteredState(a=>e.target.textContent)
                
                }}>Price:Low-High</li>
           </ul>
       </div>}
     </div></MYdiv>
    <Grid container spacing={3}>
          {myproducts.map((a,i)=>(
              
              <Grid item xs={12} sm={6} md={3} key={a.id}>
              <MyPaper>
                  <div >
                      <img src={a.cover} alt="" />
                       {a.status!=="" && <div style={{"background":`${a.status==='sale' ? "#e74c3c" : "#3498db" }`}}><h5>{a.status}</h5></div>}
                  </div>
                  <div>
                      <h5>{shorten(a.name)}</h5>
                      <div>
                          <ul>
                              <li style={{"background":`${a.colors[0]}`}}></li>
                              <li style={{"background":`${a.colors[1]}`}}></li>
                              <li style={{"background":`${a.colors.length>2 ? a.colors[2] : "white"}`}}></li>
                          </ul>
                          <div><span>${a.price}</span></div>
                      </div>
                  </div>
              </MyPaper>
          </Grid>
          ))}
         </Grid>
    </Container>
  )
}

export default Products
const MyPaper=styled.div `
    border-radius:10px;
    
    & div:nth-child(1){
         border-radius:inherit;
         position:relative;
        img {
            width:100%;
            height:200px;
            border-radius:10px 10px 0  0;
            object-fit:cover;
        }
        & div {
            position:absolute;
            top:20px;
            right:20px;
            padding:10px 20px;
            border-radius:10px;
            color:white;
            z-index:4;
            h5 {
                text-transform:uppercase;
            }
        }

    }
    & div:nth-child(2){
        padding-top:10px;
        border-radius:inherit;
        background:white;
        h5 {
            text-align:center;
        }
       & div {
         padding:10px 15px 10px 15px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        
        ul {
            display:flex;
            list-style:none;
            li {
                display:block;
                width:11px;
                height:11px;
                background:red;
                border-radius:50%;
            }
        }
       }
        
    }
`

const MYdiv = styled.div `
 
  & > div {
      float:right;
      position:relative;
      div {
          position:absolute;
          bottom:-120px;
          border-radius:5px;
          z-index:10;
          background:white;
          ul {
              list-style:none;
              

              li {
                  display:block;
                  width:180px;
                  padding:5px 10px;
                  box-sizing:border-box;
                  transition:background .25s ease;
                  font-size:.9em;
                  cursor:pointer;
                  &:hover {
                      background:#bdc3c7;
                  }
              }
              li.active {
                  background:#e67e22;
              }
          }

      }
  }
`