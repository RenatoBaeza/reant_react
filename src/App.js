import logo from "./logo.svg";
import "./App.css";

const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
}

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

const listItems = products.map(product =>
  <li key={product.id} style={{color: product.isFruit ? 'green' : 'red'}}>
    {product.title}
  </li>
);

function MyButton() {
  return <button>I'm a button</button>;
}

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <MyButton></MyButton>
        <h1>{user.name}</h1>
        <ul>{listItems}</ul>
      </header>
    </div>
  )
}