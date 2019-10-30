import React from 'react';
import './styles/card.scss'
import PropTypes from 'prop-types';

const Card = ({ character, selectModal }) => {
    return (
        <div className="card" onClick={() => selectModal(character)}>
            <img alt="heroeImg" src={`${character.thumbnail.path}/portrait_fantastic.${character.thumbnail.extension}`} />
            <p>{character.name}</p>
        </div>
    )
}

Card.propTypes = {
    character: PropTypes.object,
    selectModal: PropTypes.func
}
export default Card;
