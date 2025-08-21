import React from 'react';
import './CardTwo.css';
import shareIcon from '../../images/date-icon.svg';
import cardImage from '../../images/card-image.jpeg';
import Button from '../Buttons/Button';
import arrow from '../../images/arrow-left.svg'
import { ReactComponent as LuctuerIcon } from '../../images/luctuer.svg'
import { ReactComponent as ClockIcon } from '../../images/clock-card.svg'
import { ReactComponent as CalendarIcon } from '../../images/clander-card.svg'
import { ReactComponent as FlashIcon } from '../../images/flash-card.svg'

const CardTwo = ({ data }) => {
    const { title, trainer, hours, sessionDate, trainingMethod, trainingStatus } = data;

    return (
        <div className="card-two">
            <img src={cardImage} alt="Card" className="card-two-image" />
            <div className="card-two-content">
                <p className="card-two-title">{title}</p>

                <div className="card-two-data">
                    <div className="item-card-tow">
                        <div className="value-card-tow">{trainer}</div>
                        <div className="title-card-tow">
                            <LuctuerIcon />
                            المدرب
                        </div>
                    </div>
                    <div className="item-card-tow">
                        <div className="value-card-tow">{hours}</div>
                        <div className="title-card-tow">
                            <ClockIcon />
                            عدد الساعات
                        </div>
                    </div>
                    <div className="item-card-tow">
                        <div className="value-card-tow">{sessionDate}</div>
                        <div className="title-card-tow">
                            <CalendarIcon />
                            تاريخ أول جلسة
                        </div>
                    </div>
                    <div className="item-card-tow">
                        <div className="value-card-tow">{trainingMethod}</div>
                        <div className="title-card-tow">
                            <CalendarIcon />
                            منهجية التدريب
                        </div>
                    </div>
                    <div className="item-card-tow">
                        {trainingStatus == "مكتملة" ? <>       <div className="value-card-tow-s">{trainingStatus}</div></> :<>                        <div className="value-card-tow">{trainingStatus}</div>
</>}
                        <div className="title-card-tow">
                            <FlashIcon />
                            حالة التدريب
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardTwo;
