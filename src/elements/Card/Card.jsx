import React, { useState } from 'react';
import './Card.css';
import heartIcon from '../../images/heart-icon.svg';
import userIcon from '../../images/person.svg';
import clockIcon from '../../images/clock.svg';
import cardImage from '../../images/card.jpeg';
import lecturerIcon from '../../images/person.svg';
import Button from '../Buttons/Button';
import arrow from '../../images/arrow-left.svg'
import bookIcon from '../../images/book.svg';
import { useNavigate } from 'react-router-dom';
const Card = ({ title, participants, duration, lecturer, status, image, onClick }) => {
    const Navigate = useNavigate();
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
        console.log(isFavorite);
    };

    return (
        <div className="card-one" dir='rtl' onClick={onClick}>
            <div className="card-header">
                {image ? <>
                    <img src={image} alt="Card" className="card-image" />
                </> : <>
                    <img src={cardImage} alt="Card" className="card-image" />
                </>}
                {status && <>

                    <button onClick={toggleFavorite} className={`heart-icon ${isFavorite ? 'is-favorite' : ''}`} disabled>
                        {/* <img src={heartIcon} alt="Favorite" /> */}
                        <div className="on-image-card">
                            <p>{status}</p>
                        </div>
                    </button>

                </>}
            </div>
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <div className="lecturer-info">
                    <span>{lecturer}</span>
                    <div className="icon-wrapper">
                        <img src={lecturerIcon} alt="Lecturer" className="lecturer-icon" />
                    </div>
                </div>

                <div className="card-info">
                    <div className="card-info-item">
                        <img src={bookIcon} alt="Participants" className="icon-t" />
                        <span> تاريخ أول جلسة : {participants}</span>
                    </div>
                    <div className="card-info-item">
                        <img src={clockIcon} alt="Duration" className="icon-t" />
                        <span> عدد الساعات : {duration}</span>
                    </div>



                </div>

            </div>
        </div>
    );
};

export default Card;
