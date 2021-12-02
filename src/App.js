import './App.css';

import data from './data.json';
import Book from "./Book"

function App() {
  return (
    <div className="orders-container">
      <header className="App-header">
        <h1>So livro pedrada do antonio</h1>
      </header>
      <div className="orders-list-container">
            <div className="orders-list-items">
                {data.map(product => (
                    <Book
                        id={product.id}
                        name={product.title} 
                        imgUri={product.img}
                    />
                        
                ))}
            </div>
        </div>
        <div className="App-header">
          <h1>Contagem de livros: {data.length}/200</h1>
      </div>
    </div>
  );
}

export default App;
