import React, { useContext, useState } from 'react';
import { UserContext } from './App'
import Card from './Card'
import Modal from './Modal'
import './styles/cards.scss'

const Cards = () => {
    const { characters } = useContext(UserContext);
    const [modal, setModal] = useState(null);

    const setHero = (heroe) => {
        setModal(heroe)
    }
    const onClose = () => {
        setModal(null)
    }
    const charactersCard = characters.map((character, index) => {
        return <Card character={character} selectModal={setHero} key={`${index}hero`} />
    })
    return (
        <div className="cardsContainer">
            {!modal ? <div className="cards">
                {characters.length !== 0 ? charactersCard : <h1>NO RESULTS</h1>}
            </div>
                : <Modal character={modal} onClose={onClose} />}
        </div>
    )
}

export default Cards;
