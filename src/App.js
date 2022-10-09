import './App.css';
import HeaderTabs from './components/HeaderTabs';
import ProductsGrid from './components/ProductsGrid'
import ShoppingCart from './components/ShoppingCart'

function App() {
  return (
    <>
      <HeaderTabs />
      <div class="container">
        <div class="row">
          <div class="col-8">
            <ProductsGrid />
          </div>
          <div class="col-4">
            <ShoppingCart />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
