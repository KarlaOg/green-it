import './App.css';
import SearchBar from './Components/search';
import Header from './Components/Header/Header';

function App() {
  const [isLoading, setIsLoading] = useState(true)

useEffect(()=> {
  const imgs = [
    search
  ];

  cacheImages(imgs);
}, [])

const cacheImages = async (srcArray) => {
  const promises = await srcArray.map((src)=> {
    return new Promise(function(resolve, reject){
      const img = new Image();

      img.src = src;
      img.onload = resolve();
      img.onerror = reject();
 });
  });

  await Promise.all(promises);
  setIsLoading(false);
};

  return (
<<<<<<< HEAD
    <div className="App">
      <header className="App-header">
        {isLoading
        ?
        <SpinnerCircular size={50} thickness={100} speed={100} color="rgba(57, 172, 163, 1)" secondaryColor="rgba(0, 0, 0, 0.44)" />
        :
        <img src={search} className="App-logo" alt="logo" width={255} height={255}/>
      }
        <p>L'indice de fragilité numérique, par sa représentation graphique, révèle les zones d'exclusion numérique sur un territoire donné. Cet outil permet, que vous soyez une commune, un département ou une région de comparer votre indice de fragilité numérique avec les autres territoires.</p>
          <p>Cherchez votre commune:</p>
          <SearchBar/>
      </header>
=======
    <div className='App'>
      <Header />
      <SearchBar />
>>>>>>> ad1918e (wip)
    </div>
  );
}

export default App;
