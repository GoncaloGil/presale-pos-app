import { Grid } from "@mui/material"
import React, { ReactNode } from "react"
import "./ProductsGrid.scss";

const Product = ({ children, imgSrc }: { children: ReactNode; imgSrc?: string; }) => <span>
  {children}
  <img src={imgSrc}/>
</span>

export function ProductsGrid() {
  return <Grid container style={{border: "2px solid lime"}}>
    <Grid item xs={12} md={6} lg={3}>Item</Grid>
    <Grid item xs={12} md={6} lg={3}>Item</Grid>
    <Grid item xs={12} md={6} lg={3}>Item</Grid>
    <Grid item xs={12} md={6} lg={3}>Item</Grid>
    <Grid item xs={12} md={6} lg={3}>Item</Grid>
    <Grid item xs={12} md={6} lg={3}>Item</Grid>
    <Grid item xs={12} md={6} lg={3}>Item</Grid>
    <Grid item xs={12} md={6} lg={3}>Item</Grid>
    <Grid item xs={12} md={6} lg={3}>Item</Grid>
  </Grid>
  //   return <Grid className="ProductsGrid" container spacing={2}>
  //   <Grid xs={8}>
  //     <Product imgSrc="/">A</Product>
  //   </Grid>
  //   <Grid xs={4}>
  //     <Product>B</Product>
  //   </Grid>
  //   <Grid xs={4}>
  //     <Product>C</Product>
  //   </Grid>
  // </Grid>
}