import React from 'react'
import { Box, Grid, useTheme, Button } from "@mui/material";
import {tokens } from "../../Theam";

const RecordedClasses = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div>
       <Grid container spacing={1}>
        <Grid item xs={3} >
        <Box
            sx={{
              width: 200,
              height: 200,
              margin: 3,
              borderRadius: 3,
              backgroundColor:colors.primary[400]
            }}
          ></Box>
        </Grid>
        <Grid item xs={3} >
        <Box
            sx={{
              width: 200,
              height: 200,
              margin: 3,
              borderRadius: 3,
              backgroundColor:colors.primary[400]
            }}
          ></Box>
        </Grid>
        <Grid item xs={3} >
        <Box
            sx={{
              width: 200,
              height: 200,
              margin: 3,
              borderRadius: 3,
              backgroundColor:colors.primary[400]
            }}
          ></Box>
        </Grid>
        <Grid item xs={3} >
        <Box
            sx={{
              width: 200,
              height: 200,
              margin: 3,
              borderRadius: 3,
              backgroundColor:colors.primary[400]
            }}
          ></Box>
        </Grid>
        </Grid>
        <div>
        <Box
            sx={{
              width: 1000,
              height: 50,
              margin: 3,
              borderRadius: 3,
              backgroundColor:colors.primary[400]
            }}
          ></Box>
        </div>
        <Grid container spacing={1}>
        <Grid item xs={3} >
        <Box
            sx={{
              width: 200,
              height: 200,
              margin: 3,
              borderRadius: 3,
              backgroundColor:colors.primary[400]
            }}
          ></Box>
        </Grid>
        <Grid item xs={3} >
        <Box
            sx={{
              width: 200,
              height: 200,
              margin: 3,
              borderRadius: 3,
              backgroundColor:colors.primary[400]
            }}
          ></Box>
        </Grid>
        <Grid item xs={3} >
        <Box
            sx={{
              width: 200,
              height: 200,
              margin: 3,
              borderRadius: 3,
              backgroundColor:colors.primary[400]
            }}
          ></Box>
        </Grid>
        <Grid item xs={3} >
        <Box
            sx={{
              width: 200,
              height: 200,
              margin: 3,
              borderRadius: 3,
              backgroundColor:colors.primary[400]
            }}
          ></Box>
        </Grid>
        </Grid>
      
    </div>
  )
}

export default RecordedClasses

