import React, { useState } from 'react';
import './ApprovalFields.css';
import Checkbox from '../../../../elements/Checkbox/Checkbox';

function ApprovalFields() {
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
            </div>
            <div className="approval-container">
                <Checkbox fontSize={'1.5rem'} name={'a'} label={'with approval and the work of the department will not be affected by the employee’s absence period '} onChange={() => handleCheckboxAChange()} checked={approvalA}/>

                <Checkbox fontSize={'1.5rem'} name={'b'} label={'with rejection because'} />
                <input style={{ marginLeft: '0rem' }} type="text" className='description-leave width-important' placeholder="Enter description" onChange={() => handleCheckboxBChange()} checked={approvalB}/>
            </div>
        </div>
    );
}

export default ApprovalFields;
