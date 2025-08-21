import React, { useState } from 'react';
import './DelegationFormCoordinator.css'; // Make sure the CSS file is in the same directory
import Dropdown from '../../../../elements/Dropdown/Dropdown';
import Button from '../../../../elements/Buttons/Button';

const DelegationFormCoordinator = () => {
    const [delegationDetails, setDelegationDetails] = useState([
        {
            delegatedEmployee: '',
            delegatedTasks: '',
            deployDelegation: '',
            delegatedSignature: ''
        },
        {
            delegatedEmployee: '',
            delegatedTasks: '',
            deployDelegation: '',
            delegatedSignature: ''
        },
        {
            delegatedEmployee: '',
            delegatedTasks: '',
            deployDelegation: '',
            delegatedSignature: ''
        }
    ]);

    const handleInputChange = (event, index) => {
        const { name, value } = event.target;
        const updatedDelegationDetails = [...delegationDetails];
        updatedDelegationDetails[index][name] = value;
        setDelegationDetails(updatedDelegationDetails);
    };

    return (
        <div className="delegation-form">
            <h2>Delegation of work if the leave period exceeds 5 days</h2>
            <table className="delegation-table">
                <thead>
                    <tr>
                        <th>Delegated Employee</th>
                        <th>Delegated Tasks</th>
                        <th>Deploy delegation</th>
                        <th>Delegated signature</th>
                    </tr>
                </thead>
                <tbody>
                    {delegationDetails.map((row, index) => (
                        <tr key={index}>
                            <td>
                                <Dropdown
                                    customClass={'dropdown-delegated-employee'}
                                    placeHolder={'Select an employee'}
                                    options={['Evaluation 1', 'Evaluation 2']}
                                    onChange={(event) => handleInputChange(event, index)}
                                />
                            </td>
                            <td><input type="text" name="delegatedTasks" value={row.delegatedTasks} onChange={(event) => handleInputChange(event, index)} /></td>
                            <td><input type="text" name="deployDelegation" value={row.deployDelegation} onChange={(event) => handleInputChange(event, index)} /></td>
                            <td>

                                {/* <input type="text" name="delegatedSignature" value={row.delegatedSignature} onChange={(event) => handleInputChange(event, index)} /> */}
                                <div className="btn-signatures">
                                    <Button width={'40%'} label="Sign" className="sign-button" height={'2.5REM'} onChange={(event) => handleInputChange(event, index)} />
                                </div>

                            </td>
                        </tr>
                    ))}
                    <tr aria-colspan={4} className='buttom-table'>
                        <td colSpan={2}>Name, signature & date</td>
                        <td colSpan={2}>Clearance (if the leave exceeds 5 days)</td>
                    </tr>
                    <tr aria-colspan={4}>
                        <td colSpan={2} style={{ height: '10rem' }} ><input style={{ width: '100%', height: '100%' }} type="text" name="deployDelegation" /></td>
                        <td colSpan={2} style={{ height: '10rem' }} ><input style={{ width: '100%', height: '100%' }} type="text" name="delegatedSignature" /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default DelegationFormCoordinator;
