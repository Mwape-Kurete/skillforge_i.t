// src/components/MyGrid.js
import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

function MyGrid() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} style={{ padding: "20px" }}>
          Content 1
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} style={{ padding: "20px" }}>
          Content 2
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} style={{ padding: "20px" }}>
          Content 3
        </Paper>
      </Grid>
    </Grid>
  );
}

export default MyGrid;
