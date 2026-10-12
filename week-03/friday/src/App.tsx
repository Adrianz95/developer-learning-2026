import './App.css'

import { UserTitle } from './components/UserTitle';
import { ProductFilter } from './components/ProductFilter';

import { mockProducts } from './data/products';

const products = mockProducts;

function App() {

  return(
    <div>
      <UserTitle username='Adrián'/>
      <ProductFilter products={products}/>
    </div>
  );
}

export default App
