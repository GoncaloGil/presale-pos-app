import { Grid } from '@mui/material';
import React from 'react';
import './App.scss';
import HeaderTabs from './components/HeaderTabs';
import { ProductsGrid } from './components/ProductsGrid'
import ShoppingCart from './components/ShoppingCart'

function App() {
  return (
    <div className="App">
      <Grid container>
        <Grid item xs={12}>
          <HeaderTabs />
        </Grid>
        <Grid item xs={12} md={8}>
          <ProductsGrid />
        </Grid>
        <Grid item xs={12} md={4}>
          <ShoppingCart />
        </Grid>
      </Grid>
      {/* <div className="AppHeader">
        <HeaderTabs />
      </div> */}
      {/* <div className="AppContainer container">
        <div className="row">
          <div className="col-8">
            <ProductsGrid />
          </div>
          <div className="col-4">
            <ShoppingCart />
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default App;
