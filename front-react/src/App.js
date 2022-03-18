import search from './search.svg';
import './App.css';
import SearchBar from './Components/search'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={search} className="App-logo" alt="logo" />
        <p>L'indice de fragilité numérique, par sa représentation graphique, révèle les zones d'exclusion numérique sur un territoire donné. Cet outil permet, que vous soyez une commune, un département ou une région de comparer votre indice de fragilité numérique avec les autres territoires.</p>
          <p>Cherchez votre commune:</p>
          <SearchBar/>
      </header>
    </div>
  );
}

export default App;
