import './App.css';
import ProductCard from './components/ProductCard';

const product = {
  name: "Sample Product",
  price: 29.99,
  description: "This is a sample product description.",
  stockStatus: "In Stock",
};

function App() {
  return (
    <div>
      <ProductCard product={product} />
    </div>
  );
}

export default App;
