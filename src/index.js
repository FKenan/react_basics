import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div>
      <Component1 />
      <Component2 />
      <ProductList />
    </div>
  );
}

function Component1() {
  // component tanımlama
  return <h1>Component 1</h1>;
}

const Component2 = () => {
  // ananymous fonksiyon ile component tanımlayabiliriz.
  return <h1>Component 2</h1>;
};

const Product = (props) => {
  return (
    <div >
      <h5>{props.name}</h5>
      <h5>{props.price}</h5>
    </div>
  );
};

function ProductList() {
  const array = [
    { id: 1, name: "Iphone 5", price: 100160 },
    { id: 2, name: "Iphone 6", price: 100120 },
    { id: 3, name: "Iphone 7", price: 100710 },
    { id: 4, name: "Iphone 8", price: 100160 },
    { id: 5, name: "Iphone 9", price: 100530 },
    { id: 6, name: "Iphone 10", price: 101200 }
  ];

  return (
    <div className="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-4">
      {array.length > 0 ? (
        array.map((item) => (
          <Product key={item.id} name={item.name} id={item.id} price={item.price} />
        ))
      ) : (
        <h1>Şuan satışta olan ürün yok</h1>
      )}
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
