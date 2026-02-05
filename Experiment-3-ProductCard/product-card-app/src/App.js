import ProductCard from "./ProductCard";

function App() {
  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px", flexWrap: "wrap" }}>

      <ProductCard
        name="Wireless Mouse"
        price="799"
        image="/mouse.jpg"
        inStock={true}
      />

      <ProductCard
        name="Bluetooth Headphones"
        price="1499"
        image="/headphones.jpg"
        inStock={false}
      />

      <ProductCard
        name="Smart Watch"
        price="2499"
        image="/watch.jpg"
        inStock={true}s
      />

      <ProductCard
        name="Keyboard"
        price="999"
        image="/keyboard.jpg"
        inStock={true}
      />

    </div>
  );
}

export default App;
