import React, { useState } from 'react';
import './CompensativeVacationNote.css'; // Make sure the CSS file is in the same directory
import infoIcon from '../../../../images/info-circle.svg'
import documentIcon from '../../../../images/document-text.svg'


const CompensativeVacationNote = () => {
    const [note, setNote] = useState('');

    return (
        <div className="compensative-note-container">
            <div className='left-icon-cont'>
                <img src={documentIcon} alt="" />
            </div>
           <div className='right-content-cont'>
           <h4 className='note-title'>
                note for compensative vacation:
            </h4>
            <label htmlFor="compensative-note" className="note-label">
                <img src={infoIcon} alt="" />
                in this care the type of vacation is (paid)
            </label>
            <textarea
                id="compensative-note"
                placeholder="In this care the type of vacation is (paid)"
                value={note}
                onChange={(e) => setNote(e.target.value)}
            />
           </div>
        </div>
    );
};

export default CompensativeVacationNote;
