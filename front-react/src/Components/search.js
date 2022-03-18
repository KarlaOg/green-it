import React, {useState} from 'react'


function SearchBar(props) {
    const [searchInput, setSearchInput] = useState("");

    const data_city = "../../../backend/data.json"

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };
    if (searchInput.length > 0) {
        data_city.filter((value_city) => {
        return value_city.Libcom.match(searchInput);
    });
    }

  return(
  <div id="search-div"> 

    <input
       type="search"
       placeholder="Cherchez ici"
       onChange={handleChange}
       value={searchInput} />
    <table>
      <tr>
        <th>Commune</th>
        <th>Score global</th>  
      </tr>
    {Object.values(data_city).map((city, index) => (
    <div>
      <tr>
        <td>{city.Libcom}</td>
        <td>{city.Libdep}</td>
      </tr>
    </div>
    ))}
    </table>
    </div>
   );
}

export default SearchBar;