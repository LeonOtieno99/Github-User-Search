import { AppBar, Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Toolbar, Typography } from '@mui/material'
import React from 'react'

function Github() {
  
  const getaccount = async () => {
    const accountsearch = document.getElementsByName('search')[0];
    const searchValue = accountsearch.value;
  
    var res = await fetch(`https://api.github.com/users/${searchValue}`);
    var data = await res.json();
  
    if (data.login) document.querySelector('.name').innerText = data.login;
    if (data.avatar_url) document.querySelector('.avatar').innerHTML = `<img src="${data.avatar_url}" alt="Avatar" />`;
    if (data.bio) document.querySelector('.about').innerText = data.bio;
    if (data.followers) document.querySelector('.followers').innerText = `${data.followers}`;
    if (data.following) document.querySelector('.following').innerText = ` ${data.following}`;
    if (data.public_repos) document.querySelector('.repo').innerText = `${data.public_repos}`;
  }
  
    const handlesearch = (e) => {
      if(e.key === 'Enter'){
        e.preventDefault();
        getaccount();
      }
    }
  return (
    <div>
      <Container>
        <AppBar>
          <Toolbar>
            <Typography>Github User Search</Typography>
            <TextField style={{paddingLeft:'20%'}}   inputProps={{style:{color:'white',borderColor:'white'}}}  name='search' variant='outlined'
              onKeyDown={handlesearch}
            />
            <Button style={{padding:'8px', color:'white'}} variant='outlined'
              onClick={getaccount}
            >Search</Button>
          </Toolbar>
        </AppBar>
      </Container>
      <br />
      <br />
      <br />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>name</TableCell>
              <TableCell>Avatar</TableCell>
              <TableCell>About</TableCell>
              <TableCell>Followers</TableCell>
              <TableCell>Following</TableCell>
              <TableCell>Repositories</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope='row' className='name'>
                 name
              </TableCell>
              <TableCell className='avatar'>Avatar</TableCell>
              <TableCell className='about'>About</TableCell>
              <TableCell className='followers'>Followers</TableCell>
              <TableCell className='following'>Following</TableCell>
              <TableCell className='repo'>Repositories</TableCell>
         
            </TableRow>
          </TableBody>
        </Table>

      </TableContainer>
    </div>
  )
}

export default Github