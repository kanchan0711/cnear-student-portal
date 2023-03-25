import React from 'react'
import { Box, Grid, useTheme, Button } from "@mui/material";
import {tokens } from "../../Theam";

const StudentProfile = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={4} >
          <Box
            sx={{
              width: 300,
              height: 550,
              margin: 3,
              borderRadius: 2,
              backgroundColor:colors.primary[400]
            }}
          >
            <Grid container spacing={2}>
              {/* Row 1 */}
              <Grid item xs={6}>
                <p>student profile</p>
                {/* Add content for the first column of the first row */}
              </Grid>
              <Grid item xs={6}>
                <p>student profile</p>
                {/* Add content for the second column of the first row */}
              </Grid>
              {/* Add more rows */}
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={8}>
        <Grid container spacing={2}>
        <Grid item xs={1} >
        <Box
            sx={{
              width: 40,
              height: 40,
              
              borderRadius: 4,
              backgroundColor:colors.primary[400]
            }}
          >
            </Box>
          </Grid>
          <Grid item xs={7} >
          <b style={{ fontSize: "25px" }}>Kanchan</b>
          <div>Verified student</div>
          </Grid>
          <Grid item xs={3}>
          <Button variant="contained" disabled>
             Disabled
          </Button>
             
          </Grid>
          </Grid>
          {/* Add the new component here */}
          <Grid container spacing={2}>
          <Grid item xs={4} >
          <h3> Age</h3> 
          </Grid>
          <Grid item xs={4} >
          <h3> Goals</h3>
            </Grid>
            <Grid item xs={4}>
            <h3> Degree</h3>
          </Grid>
          
            </Grid>
            <Grid container spacing={2}>
          <Grid item xs={4}>
            _
          </Grid>
          <Grid item xs={4}>
            _
            </Grid>
            <Grid item xs={4}>
            _
          </Grid>
          
            </Grid>
            <Grid container spacing={2}>
          <Grid item xs={4} >
          <h3> Industry</h3>
          </Grid>
          <Grid item xs={4} >
           <h3> Employment</h3>
            </Grid>
            <Grid item xs={4}>
            <h3>Gender</h3>
          </Grid>
          
            </Grid>
            <Grid container spacing={2}>
          <Grid item xs={4} >
            _
          </Grid>
          <Grid item xs={4} >
            _
            </Grid>
            <Grid item xs={4} >
            _
          </Grid>
          
            </Grid>
            <Grid container spacing={2}>
          <Grid item xs={4} >
           <h3> Membership Status</h3>.
          </Grid>
          <Grid item xs={4} >
           <h3> Membership Type</h3>
            </Grid>
            </Grid>
            <Grid container spacing={2}>
          <Grid item xs={4} >
            Active
          </Grid>
          
            <Grid item xs={4} >
            LifeTime Membership
          </Grid>
          
            </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default StudentProfile;
