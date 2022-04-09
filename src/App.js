import './App.css';

import data from './data.json';
import Book from "./Book"

function App() {

  let notRead =  9

  return (
   
    <div className="orders-container">
      <header className="App-header">
        <h1>Só livro pedrada do antonio</h1>
        {/* <div class="search">
          <input type="text" class="searchTerm" placeholder="Qual o livro?"/>
          <button type="submit" class="searchButton">
            <i class="fa fa-search"></i>
          </button>
        </div> */}
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
          <h2>Livros lidos: {data.length - notRead} / {data.length} </h2>
          
      </div>
    </div>
  );
}

export default App;
