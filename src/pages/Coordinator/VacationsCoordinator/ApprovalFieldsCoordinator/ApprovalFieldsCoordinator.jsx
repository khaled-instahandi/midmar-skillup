import React, { useState } from 'react';
import './ApprovalFieldsCoordinator.css';
import Checkbox from '../../../../elements/Checkbox/Checkbox';

function ApprovalFieldsCoordinator() {
    const [approvalA, setApprovalA] = useState(true); // State for checkbox A
    const [approvalB, setApprovalB] = useState(true); // State for checkbox B

    const handleCheckboxAChange = () => {
        setApprovalA(!approvalA); // Toggle approvalA state
    };

    const handleCheckboxBChange = () => {
        setApprovalB(!approvalB); // Toggle approvalB state
    };
    const [description, setDescription] = useState('');

    return (
        <div className='approval'>
            <div className="header-top-title">
                Direct Manager Authorization
            </div>
            <div className="approval-container">
                <Checkbox fontSize={'1.5rem'} name={'a'} label={'with approval and the work of the department will not be affected by the employee’s absence period '} onChange={() => handleCheckboxAChange()} checked={approvalA} />

                <Checkbox fontSize={'1.5rem'} name={'b'} label={'with rejection because'} onChange={() => handleCheckboxBChange()} checked={approvalB} />
                <input type="text" className='description-leave' placeholder="Enter description" value={description} onChange={(e) => setDescription(e.target.value)} />

            </div>
        </div>
    );
}

export default ApprovalFieldsCoordinator;
