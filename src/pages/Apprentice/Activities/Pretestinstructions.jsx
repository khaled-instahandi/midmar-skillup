import React, { useState } from 'react';
import Modal from '../../Modal';
import Checkbox from '../../../elements/Checkbox/Checkbox';
import Button from '../../../elements/Buttons/Button';
import speechBubble from '../../../images/speech-bubble 1.svg'

const Pretestinstructions = ({ isOpen, onClose, headerText, instructions, handleBtn, height, width }) => {
    const [randomize, setRandomize] = useState(false); // State for randomization checkbox

    const handleCheckboxChange = () => {
        setRandomize(!randomize); // Toggle randomize state
    };

    if (!isOpen) return null;

    return (
        <Modal onClose={onClose} height={height} width={width} scale={'0.8'}>
            <img src={speechBubble} alt="" />

            <h2 className='header-text-pretest-instructions'>
                {headerText}
            </h2>
            <div className="activity-details-pretest-instructions">
                <ul>
                    {instructions.map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                    ))}
                </ul>
                <Checkbox label="قرأت وفهمت التعليمات" onChange={handleCheckboxChange} checked={randomize} />
                <Button
                    label="صفحة الاختبار"
                    onClick={handleBtn}
                    className="button-login mt-9 mb-5"
                    fontSize={'1.5rem'}
                    width={'100%'}
                    height={'auto'}
                />
            </div>
        </Modal>
    );
};

export default Pretestinstructions;
