import React from 'react';
import PropTypes from 'prop-types';
import './styles/modal.scss'

const Modal = ({ character, onClose }) => {
    return (
        <div className="modalContainer">
            {character &&
                <div className="modal">
                    <button onClick={onClose}>X</button>
                    <div className="characterDisplay">
                        <h1>{character.name}</h1>
                        <img alt="heroeImg"
                            src={`${character.thumbnail.path}/portrait_fantastic.${character.thumbnail.extension}`}
                        />
                    </div>
                    {character.comics.items.length === 0 ? <h3>No comics</h3> :
                        <div className="comicList">
                            <h2>List of comics {character.comics.available}</h2>
                            <ul>
                                {character.comics.items.map((hero, index) =>
                                    <li key={`${index}${hero.name}${index}`}> {hero.name} </li>)
                                }
                            </ul>
                        </div>
                    }
                </div>}
        </div>
    )
}

Modal.propTypes = {
    character: PropTypes.object,
    onClose: PropTypes.func
}
export default Modal;
