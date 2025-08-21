import React, { useState } from 'react';

import Button from '../Buttons/Button';

import closeIcon from '../../images/close-circle-red.svg'

import './SignaturesTable.css'

function SignaturesTable() {
    const [signatures, setSignatures] = useState([
        { id: 1, jobTitle: 'Direct Manager', userName: 'Admin user', privilege: 'Officer', signed: 'a5c9a7522cdfb45b68c986851a79fa66', signedAt: '7:17 PM 12/14/2023' },
        { id: 2, jobTitle: 'Procurement Department', userName: 'Admin user', privilege: 'Officer', signed: 'Not appropriate', signedAt: '7:17 PM 12/14/2023' },
        { id: 3, jobTitle: 'Accounting Department', userName: 'Admin user', privilege: 'Officer', signed: '', signedAt: '7:17 PM 12/14/2023' },
        { id: 4, jobTitle: 'Budget Holder', userName: 'Admin user', privilege: 'Officer', signed: '', signedAt: '7:17 PM 12/14/2023' },
    ]);
    return (
        <div className='budget-table-pur'>
            <div className=' scrolled-table'>

                <h2>Signatures</h2>
                <table className="budget-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Job title</th>
                            <th>User Name</th>
                            <th>Privilege</th>
                            <th>Signed</th>
                            <th>Signed at</th>
                        </tr>
                    </thead>
                    <tbody>
                        {signatures.map((signature, index) => (
                            <tr key={index}>
                                <td>{signature.id}</td>
                                <td>{signature.jobTitle}</td>
                                <td>{signature.userName}</td>
                                <td>{signature.privilege}</td>
                                <td className='btn-signatures'>
                                    {signature.signed === 'Not appropriate' ? (
                                        <span className="not-appropriate">Not appropriate <img src={closeIcon} alt="" /> </span>
                                    ) : (
                                        signature.signed || (
                                            <>
                                                <Button width={'40%'} label="Sign" className="sign-button" />
                                                <Button width={'40%'} label="Reject" className="reject-button" />
                                            </>
                                        )
                                    )}
                                </td>
                                <td>{signature.signedAt}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>

        </div>
    );
}
export default SignaturesTable