import React from 'react'
import { Grid,Paper, TextField } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';



const Login=()=>{

    
    
    const paperStyle={padding: 20,height:'70vh',width:280, margin:"20px auto"}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                <Box bgcolor="secondary.main" color="secondary.contrastText" fullWidth required p={2}>
          ENTER DETAILS
        </Box>
                
                

                </Grid>
                
                <Box p={1}><TextField id="outlined-basic" label='Username' placeholder='Enter Username' fullWidth required variant="outlined"/></Box>
               <Box p={1}><TextField id="outlined-basic" label='Password' placeholder='Enter Password' type='password' fullWidth required variant="outlined"/></Box>
                
                <FormControlLabel
        control={
          <Checkbox
            name="checkedB"
            color="secondary"
          />
        }
        label={<span style={{ fontSize: '0.800rem' }}>{"I confirm that I'm atleast 18 years of age!"}</span>}
       
        
      />
      
                <FormControlLabel
        control={
          <Checkbox
            name="checkedB"
            color="secondary"
          />
        }
        label={<span style={{ fontSize: '0.800rem' }}>{"I confirm terms of use and privacy policy"}</span>}
        
        
      />
      
    
                 <FormControlLabel
        control={
          <Checkbox
            name="checkedB"
            color="secondary"
            
          
          />
        }
        label={<span style={{ fontSize: '0.800rem' }}>{"I am not a resident of Assam, Odisha, Andhra pradesh, Telengana, Tamilnadu, Sikkim"}</span>}
    
        
      />
      
      <Button type='submit' color='secondary' variant="contained" fullWidth>Lets Play</Button>
                

                </Paper>

        </Grid>
    )
}

export default Login