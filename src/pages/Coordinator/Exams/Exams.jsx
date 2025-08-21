import React, { useState } from 'react'
import './Exams.css'
import Button from '../../../elements/Buttons/Button';
import copyIcon from '../../../images/copy.svg'
import DynamicRadioSelect from './DynamicRadioSelect/DynamicRadioSelect'
function Exams() {
    const [title, setTitle] = useState('Test Title');
    const [description, setDescription] = useState('Test Description');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };
    return (
        <div className='activity-page'>
            <div className="exam-container">
                <Button
                    label="Copy the test link"
                    className="button-login"
                    iconPosition={'left'}
                    Icon={copyIcon}
                    width={'20%'}
                    height={'3rem'}
                    

                // fontSize={'1.125rem'}
                />
                <div className="header-exam-title">
                    <input
                        type="text"
                        className="title-exam"
                        value={title}
                        onChange={handleTitleChange}
                    />
                    <input
                        type="text"
                        className="description-exam"
                        value={description}
                        onChange={handleDescriptionChange}
                    />

                </div>
                <DynamicRadioSelect />
            </div>
        </div>
    )
}

export default Exams