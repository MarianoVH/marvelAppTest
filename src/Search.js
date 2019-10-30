import React, { useContext } from 'react'
import { UserContext } from './App'
import './styles/search.scss'
import icon from './iconSearch.png';

const Search = () => {
    const { searchChar, handleChange, handleSubmit } = useContext(UserContext);

    return (
        <form onSubmit={handleSubmit} className="formSearch">
            <img src={icon} alt="iconSearch" className="iconSearch" />
            <input placeholder="Buscar" value={searchChar} onChange={handleChange} />
        </form>
    )
}

export default Search;
