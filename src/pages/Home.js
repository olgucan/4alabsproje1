import React from 'react'
import styled from 'styled-components'
import { Container } from '@mui/system'
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button"
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import BugReportIcon from '@mui/icons-material/BugReport';
import { Barjs } from '../components/Barchart.tsx'
import { MultiBar } from '../components/Multibar.tsx';
import {Horizantal} from "../components/Horizantal.tsx"
import { Radarchar } from '../components/Radar.tsx';
import { PieChart } from '../components/Piechart.tsx'
import { Link } from 'react-router-dom';
import {useState} from "react"
import { UserData } from '../components/Data';
import {BarChart2,LineChart2,PieChart2} from "../components/Charts"
import { format, formatDistanceToNow } from 'date-fns';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EditIcon from '@mui/icons-material/Edit';
import ShareIcon from '@mui/icons-material/Share';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { faker } from '@faker-js/faker';

import { useEffect } from 'react';
export function fToNow(date) {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
  });
}


const Home = () => {
  const [logo1,setLogo1]=useState(false)
  const [popBox1,setPopBox1]=useState(false)
  const [logo2,setLogo2]=useState(false)
  const [popBox2,setPopBox2]=useState(false)
  const [logo3,setLogo3]=useState(false)
  const [popBox3,setPopBox3]=useState(false)
  const [logo4,setLogo4]=useState(false)
  const [popBox4,setPopBox4]=useState(false)
  const [logo5,setLogo5]=useState(false)
  const [popBox5,setPopBox5]=useState(false)
   const myimages=["./images/mock-images/covers/cover_1.jpg",
   "./images/mock-images/covers/cover_2.jpg",
   "./images/mock-images/covers/cover_3.jpg",
   "./images/mock-images/covers/cover_4.jpg",
   "./images/mock-images/covers/cover_5.jpg",
  ]
  const [newuser,setNewuser]=useState([])
  useEffect(()=> {
     setNewuser(()=> myimages.map((k,i)=>({id: faker.datatype.uuid(),
      title: faker.name.jobTitle(),
      description: faker.name.jobTitle(),
      image: k,
      postedAt: faker.date.recent()})))
  },[])
  console.log(newuser)
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });


  return (
    <Container>
      
    <h2>Hi, Welcome back</h2>
      <Grid container spacing={5} mt={3}>
          <Grid item xs={12} sm={6} md={3}>
              <MyBox>
              <MyBoximg>
              <BugReportIcon/>
              </MyBoximg>
              <h2>714k</h2>
              <p><small>Weekly Sales</small></p>
              </MyBox>
            
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
              <MyBox2>
              <MyBoximg>
              <BugReportIcon/>
              </MyBoximg>
              <h2>714k</h2>
              <p><small>Weekly Sales</small></p>
              </MyBox2>
            
          </Grid>
          <Grid item xs={12} sm={6} md={3} >
              <MyBox3>
              <MyBoximg>
              <BugReportIcon/>
              </MyBoximg>
              <h2>714k</h2>
              <p><small>Weekly Sales</small></p>
              </MyBox3>
            
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
              <MyBox4>
              <MyBoximg>
              <BugReportIcon/>
              </MyBoximg>
              <h2>714k</h2>
              <p><small>Weekly Sales</small></p>
              </MyBox4>
            
          </Grid>
      </Grid>
      <Grid container spacing={5} my={4}>
        <Grid item xs={12} md={8} >

        <Paper>
        <Typography component="h2" sx={{p:3}} variant="h5">Website Visits</Typography>
          <MultiBar/>
         </Paper>
        </Grid>
        
         <Grid item xs={12} md={4} >
         <Paper>
         <Typography component="h2" sx={{p:3}} variant="h5">Current Visits</Typography>
         <PieChart2 charData={userData}/>
         </Paper>
         </Grid>
        
         <Grid item xs={12} md={8} >
        <Paper>
        <Typography component="h2" sx={{p:3}} variant="h5">Conversion Rates</Typography>
          <Horizantal/>
         </Paper>
        </Grid>
        
         <Grid item xs={12} md={4} >
         <Paper>
          <Typography component="h2" sx={{p:3}} variant="h5">Current Subjects</Typography>
         <Radarchar/>
         </Paper>
         </Grid>
         <Grid item xs={12} md={8}>
             <Paper>
             <Typography component="h2" sx={{p:3}} variant="h6">News Update</Typography>
              <MyNewUBox>
                 {newuser.map((a)=>(
                   <NewBox key={a.id}>
                     <div className='secondly'>
                     <img src={a.image} alt={a.title} />
                     <div>
                       <Link to="#">{a.description}</Link>
                       <p>{a.title}</p>
                     </div>
                     </div>
                      <div>
                        <small>{fToNow(a.postedAt)}</small>
                      </div>
                     

                   </NewBox>
                 ))}
                 <div className='viewAll'>
                   <Button size="small" endIcon={<ArrowForwardIosIcon />}>View all</Button>
                 </div>
              </MyNewUBox>
             </Paper>
         </Grid>
        <Grid item xs={12} md={4}>
            <Paper sx={{paddingBottom:4}}>
            <Typography component="h2" sx={{p:3}} variant="h6">Order Timeline</Typography>
            <Order>
              <div>
                

              </div>
              <div>
                 <p>1983, orders, $4220</p>
                 <small>20 May 2022 04:47</small>
              </div>
            </Order>
            <Order>
              <div>
                

              </div>
              <div>
                 <p>1983, orders, $4220</p>
                 <small>20 May 2022 04:47</small>
              </div>
            </Order>
            <Order>
              <div>
                

              </div>
              <div>
                 <p>1983, orders, $4220</p>
                 <small>20 May 2022 04:47</small>
              </div>
            </Order>
            <Order>
              <div>
                

              </div>
              <div>
                 <p>1983, orders, $4220</p>
                 <small>20 May 2022 04:47</small>
              </div>
            </Order>
            <Order>
              <div>
                

              </div>
              <div>
                 <p>1983, orders, $4220</p>
                 <small>20 May 2022 04:47</small>
              </div>
            </Order>
            </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
             <Paper>
             <Typography component="h2" sx={{p:3}} variant="h6">Traffic By Site</Typography>
             <SocialBox>
               <div>
                 <FacebookIcon sx={{color:"blue"}}/>
                   <h3>323.23k</h3>
                    <small>FaceBook</small>
               </div>
               <div>
                 <GoogleIcon sx={{color:"red"}}/>
                   <h3>323.23k</h3>
                    <small>FaceBook</small>
               </div>
               <div>
                 <LinkedInIcon sx={{color:"#76b6c4"}}/>
                   <h3>323.23k</h3>
                    <small>FaceBook</small>
               </div>
               <div>
                 <TwitterIcon sx={{color:"#1da2d8"}}/>
                   <h3>323.23k</h3>
                    <small>FaceBook</small>
               </div>
             </SocialBox>
             </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
             <Paper>
             <Typography component="h2" sx={{p:3}} variant="h6">Tasks</Typography>
              <CheckboxContainer>
                  <div className='myformgroup' >
                  
           <FormControlLabel onClick={()=>setLogo1(a=>!a)} control={<Checkbox  />} label={logo1 ? <strike>label</strike> : "label"} />
           <MoreVertIcon onClick={()=>setPopBox1(l=>!l)} className={logo1 && 'dots'}/>
                    {popBox1 && (
                       <PopBox>
                       <h4><CheckCircleIcon/> <span>Mark as Complete</span> </h4>
                       <h4><EditIcon/><span>Edit</span> </h4>
                       <h4><ShareIcon/> <span>Share</span></h4>
                       <h4><DeleteForeverIcon/> <span>Delete</span></h4>
                     </PopBox>   
                    )}   
                  </div> 
                  <div className='myformgroup' >
                  
           <FormControlLabel onClick={()=>setLogo2(a=>!a)} control={<Checkbox  />} label={logo2 ? <strike>label</strike> : "label"} />
           <MoreVertIcon onClick={()=>setPopBox2(l=>!l)} className={logo2 && 'dots'}/>
                    {popBox2 && (
                       <PopBox>
                       <h4><CheckCircleIcon/> <span>Mark as Complete</span> </h4>
                       <h4><EditIcon/><span>Edit</span> </h4>
                       <h4><ShareIcon/> <span>Share</span></h4>
                       <h4><DeleteForeverIcon/> <span>Delete</span></h4>
                     </PopBox>   
                    )}   
                  </div> 
                  <div className='myformgroup' >
                  
           <FormControlLabel onClick={()=>setLogo3(a=>!a)} control={<Checkbox  />} label={logo3 ? <strike>label</strike> : "label"} />
           <MoreVertIcon onClick={()=>setPopBox3(l=>!l)} className={logo3 && 'dots'}/>
                    {popBox3 && (
                       <PopBox>
                       <h4><CheckCircleIcon/> <span>Mark as Complete</span> </h4>
                       <h4><EditIcon/><span>Edit</span> </h4>
                       <h4><ShareIcon/> <span>Share</span></h4>
                       <h4><DeleteForeverIcon/> <span>Delete</span></h4>
                     </PopBox>   
                    )}   
                  </div> 
                  <div className='myformgroup' >
                  
           <FormControlLabel onClick={()=>setLogo4(a=>!a)} control={<Checkbox  />} label={logo4 ? <strike>label</strike> : "label"} />
           <MoreVertIcon onClick={()=>setPopBox4(l=>!l)} className={logo4 && 'dots'}/>
                    {popBox4 && (
                       <PopBox>
                       <h4><CheckCircleIcon/> <span>Mark as Complete</span> </h4>
                       <h4><EditIcon/><span>Edit</span> </h4>
                       <h4><ShareIcon/> <span>Share</span></h4>
                       <h4><DeleteForeverIcon/> <span>Delete</span></h4>
                     </PopBox>   
                    )}   
                  </div> 
                  <div className='myformgroup' >
                  
           <FormControlLabel onClick={()=>setLogo5(a=>!a)} control={<Checkbox  />} label={logo5 ? <strike>label</strike> : "label"} />
           <MoreVertIcon onClick={()=>setPopBox5(l=>!l)} className={logo5 && 'dots'}/>
                    {popBox5 && (
                       <PopBox>
                       <h4><CheckCircleIcon/> <span>Mark as Complete</span> </h4>
                       <h4><EditIcon/><span>Edit</span> </h4>
                       <h4><ShareIcon/> <span>Share</span></h4>
                       <h4><DeleteForeverIcon/> <span>Delete</span></h4>
                     </PopBox>   
                    )}   
                  </div>  

              </CheckboxContainer>
             </Paper>
        </Grid>
           
         
      </Grid>
     
    </Container>
  )
}

export default Home

const MyBox=styled.div `
   display:flex;
   flex-direction:column;
   align-items:center;
   justify-content:center;
   background:rgb(209, 233, 252);
   padding:30px 0;
   border-radius:10px;
   & h2 {
       font-size:2em;
       color:rgb(6, 27, 100);
       padding:15px 0 ;
   }
   & small {
       color:rgb(89, 112, 162)
   }
`
const MyBox2 = styled(MyBox)`
  background:rgb(208, 242, 255);
`
const MyBox3 = styled(MyBox)`
  background:rgb(255, 247, 205);
  & div  {
      background:rgb(247, 234, 181);
       svg {
        color:rgb(183, 129, 3);
      }
  }
  & h2 {
      color:rgb(122, 79, 1);
  }
`
const MyBox4 = styled(MyBox)`
      background:rgb(255, 231, 217);
  & div  {
      background:#F4C7BF;
       svg {
        color:#B72136;
      }
  }
  & h2 {
      color:#7A0C2E;
  }
`
 const MyBoximg =styled.div  `
    width:70px;
    height:70px;
    border-radius:50%;
    
    background:rgb(177, 203, 235);
    display:flex;
    justify-content:center;
    align-items:center;
    & svg {
        color:rgb(16, 57, 150)
    }
   
`



const MyNewUBox=styled.div `
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  justify-content:space-around;
  .viewAll{
    border-top:1px solid #aaa;
    padding:15px 0;
    width:100%;
    text-align:right;
    button {
      color:black;
      text-transform:Capitalize;
      svg {
        font-size:small;
      }
    }
  }
`
const NewBox =styled.div`
  img {
    height:40px;
    border-radius:5px;
  }
  display:flex;
  justify-content:space-between;
  .secondly {
    display:flex;
    div {
      margin:0 15px;
      a {
        margin-bottom:5px;
        color:black;
        transition:color .25s ease ;
        :hover {
          
          color:red;
                    
        }
        
       
      }
      transition:transform .25s ease;
      :hover {
        transform:translateY(5px);
      }
    }
  }
  width:100%;
  padding:15px 30px;  
`
const Order =styled.div `
    display:flex;
    align-items:center;
    
    padding:15px 20px;
    div:nth-child(1) {
      width:11px;
      height:11px;
      border-radius:50%;
      transform:translateY(-50%);
      margin:0 15px;
      background:blue;
      position:relative;
      ::before {
         content:"";
         position:absolute;
         bottom:-50px;
         right:50%;
         width:2px;
         height:40px;
         background:blue;
      }
      
     
       

    }
    div:nth-child(2){
        display:flex;
        justify-content:space-between;
        flex-direction:column;
        
       
      }
      :last-child div:nth-child(1){
        ::before {
          content:"";
          display:none;
        }
      }
`
const SocialBox=styled.div `
   display:grid;
   grid-template-columns:repeat(2,1fr);
   padding:15px;
   grid-gap:10px;
   
   & div {
     padding:8px;
     text-align:center;
     border:1px solid #eee;
     border-radius:5px;
     & svg {
       font-size:30px;
     }
   }
`

const CheckboxContainer=styled.div `
   & .myformgroup {
       padding:10px 15px;
       display:flex;
       justify-content:space-between;
       align-items:center;
       position:relative;
       svg {
         cursor:pointer;
       }
         .dots {
         color:#aaa;
      }

   }
 
`
const PopBox=styled.div `
   position:absolute;
   right:15%;
   top:-10%;
   padding:20px;
   background:white;
   & h4 {
     display:flex;
     align-items:center;
     padding:10px 0;
     border-bottom:1px solid #aaa;
     span {
       padding:0 15px;
     }
     :last-child {
       padding:20px 0;
       color:red;
     }
   }
   
`