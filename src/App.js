import "./App.css";
let name="Tarun5"
function App() {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>List</li>
      </nav>
      <div className="contaier">
        <h1>Hello {name}</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore illum
          quae cupiditate nihil. Aliquid magni corporis velit dicta libero
          repellendus nam ea? Laboriosam sint soluta placeat, possimus quidem
          aliquid quia.
        </p>
      </div>
    </>
  );
}

export default App;
