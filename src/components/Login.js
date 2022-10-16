import "../App.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Grid } from "@mui/material";

import Container from "@mui/material/Container";
import LockIcon from "@mui/icons-material/Lock";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [change, setChange1] = useState("");
  const [change2, setChange2] = useState("");
  const [logdata, setlogData] = useState({});
  //const  postdata = {email : "eve.holt@reqres.in"
  // ,sifre : "cityslicka"}
  //  const PostData = async (postData) => {

  //   await axios.post('https://reqres.in/api/login', postdata)

  //  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setlogData({
      ...logdata,
      username: change,
      password: change2,
    });
    //const postdata = {...logdata};
    try {
      const resp = await axios.get(
        `https://cmsadminapi.herokuapp.com/user/login?username=${logdata.username}&password=${logdata.password}`
      );
      console.log(resp);
      if (resp.data.result) {
        navigate("/");
      } else {
        alert(resp.data.description);
      }
    } catch (error) {
      console.log(error.resp);
    }
  };

  return (
    <Container sx={{ marginTop: 15 }}>
      <Grid
        container
        spacing={0}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={6} md={4} lg={3}>
          <form onSubmit={(e) => handleSubmit(e)}>
            <Stack direction="column" spacing={3}>
              <Box className="flexbox">
                <LockIcon />
                <Typography variant="h6" component="h2">
                  Sign In
                </Typography>
              </Box>
              <TextField
                onChange={(e) => setChange1(()=>e.target.value)}
                placeholder="Email Adress"
                type="email"
              />
              <TextField
                placeholder="Password"
                type="password"
                onChange={(e) => setChange2(()=>e.target.value)}
              />
              <Box>
                <Checkbox {...label} defaultChecked />
                <Typography variant="p">Remember Me</Typography>
              </Box>

              <Button variant="contained" type="submit">
                Contained
              </Button>
            </Stack>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;
