import React, { useState } from 'react';
import './DetailsActivity.css';
import closeCircle from '../../../images/close-circle.svg';
import { Link } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';
import TagRight from '../../../images/tag-right.svg';
import InputField from '../../../elements/DynamicInput/InputField';
import DatePicker from '../../../elements/DatePicker/DatePicker';
import Button from '../../../elements/Buttons/Button';

function DetailsActivity() {
    const [notifaction, setNotifaction] = useState(true);
    const handleSubmit = (event) => {
        event.preventDefault();
        // Submit form data
        console.log('hi');
    };
    return (
        <div className="activity-table-container">
            {notifaction ? (
                <div className="notifaction-details">
                    <span>
                        <strong>Update activity: </strong> Keep Your activity Up-to-Date: Enhance Your Experience with the Latest Information
                    </span>
                    <img src={closeCircle} alt="" onClick={() => setNotifaction(false)} />
                </div>
            ) : null}

            <div className="header-details">
                <p>Project Name:</p>
                <div className="content-details">
                    <h1>
                        <img src={TagRight} />
                        Community Cohesion as a Driver for Sustainable Development
                    </h1>
                    <span className="project-code">Project code:<span className="value-p"> M00165</span></span>
                </div>

            </div>
            <div className="form-details">
                <form onSubmit={handleSubmit} className="detail-form">
                    <InputField required={true} label="Activity name" type="text" id="name" placeholder="Activity name" />
                    <InputField required={true} label="Planned beneficiaries " type="number" id="planned" placeholder="Planned beneficiaries " />
                    <DatePicker lable={'Start date'} required={true} />
                    <DatePicker lable={'End date'} required={true} />
                    <InputField required={true} label="Planned value"  id="value" placeholder="Planned value" />
                    <InputField isTextarea={true} label="description"  id="description" placeholder="description" required={true} />
                    <Button
                        typeBtn={'submit'}
                        label="Save"
                        onClick={() => console.log('Clicked button')}
                        className="button-login"
                        width={'100%'}
                        fontSize={'24px'}
                    />
                </form>
            </div>
        </div>
    );
}

export default DetailsActivity;
