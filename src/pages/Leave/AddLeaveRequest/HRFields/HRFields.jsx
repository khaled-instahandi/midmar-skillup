import React, { useState } from 'react';
import Checkbox from '../../../../elements/Checkbox/Checkbox';

function HRFields() {
    const [approvalA, setApprovalA] = useState(true); // State for checkbox A
    const [approvalB, setApprovalB] = useState(true); // State for checkbox B

    const handleCheckboxAChange = () => {
        setApprovalA(!approvalA); // Toggle approvalA state
    };

    const handleCheckboxBChange = () => {
        setApprovalB(!approvalB); // Toggle approvalB state
    };
    return (
        <div className='approval'>
            <div className="header-top-title">
                For HR use
            </div>
            <div className="approval-container">
                <Checkbox fontSize={'1.5rem'} name={'a'} label={'Employee entitled to the leave due to fulfillment of its conditions and attached the required documents'} onChange={() => handleCheckboxAChange()} checked={approvalA}/>

                <Checkbox fontSize={'1.5rem'} name={'a'} label={'The employee is not entitled to the leave and will be calculated in an unjustified absence due to'} onChange={() => handleCheckboxBChange()} checked={approvalB} />
                <input style={{ marginLeft: '0rem' }} type="text" className='description-leave width-important' placeholder="Enter description" />
            </div>
            <div className="header-buttom-title">
            Representative of HR Department
            </div>
        </div>
    );
}

export default HRFields;
