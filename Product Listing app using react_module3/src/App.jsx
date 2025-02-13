import productsJson from "./assets/products.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import CategoryFilter from "./components/CategoryFilter";

function App() {
  return (
    <>
      <div style={{ backgroundColor: "lightblue" }}>
        <h1 className='p-3 text-center' style={{ color: "#AA336A" }}>Products</h1>
      </div>

      <div className="pt-1" style={{paddingBottom:"30px"}}>
        <CategoryFilter productsList={productsJson} />
      </div>
    </>
  )
}

export default App
