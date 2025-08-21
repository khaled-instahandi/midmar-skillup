import React, { useState } from 'react';
import Modal from '../../Modal';
import InputField from '../../../elements/DynamicInput/InputField';
import Dropdown from '../../../elements/Dropdown/Dropdown';
import Button from '../../../elements/Buttons/Button';
import lineUnder from '../../../images/under-title-opration.svg'
import DatePicker from '../../../elements/DatePicker/DatePicker';

import BudgetTableDetails from '../../../elements/BudgetTableDetails/BudgetTableDetails';
import PrintPage from '../../../elements/PrintPage/PrintPage';
import SlelectState from '../../../elements/SlelectState/SlelectState';
import SignaturesTable from '../../../elements/SignaturesTable/SignaturesTable';

import Checkbox from '../../../elements/Checkbox/Checkbox';
import moneyIcon from '../../../images/mony-icon.svg'
import boyIcon from '../../../images/boy-icon.svg'

import clockIcon from '../../../images/clock-icon.svg'
import waletIcon from '../../../images/empty-wallet.svg'
import badIcon from '../../../images/bad-icon.svg'
import mairedIcon from '../../../images/maired-icon.svg'
import moonIcon from '../../../images/moon-icon.svg'
import midecenIcon from '../../../images/midecen-icon.svg'

import CustomCheckbox from '../../../elements/Checkbox/CustomCheckbox';
import { MoonIcon } from 'lucide-react';
import CompensativeVacationNote from '../../../pages/Leave/AddLeaveRequest/CompensativeVacationNote/CompensativeVacationNote';

import HRFields from '../../../pages/Leave/AddLeaveRequest/HRFields/HRFields';
import DelegationFormCoordinator from './DelegationFormCoordinator/DelegationFormCoordinator';

import ApprovalFieldsCoordinator from './ApprovalFieldsCoordinator/ApprovalFieldsCoordinator';
import DirectManagerSignature from './DirectManagerSignature/DirectManagerSignature';
const AddLeaveRequestCoordinator = ({ isOpen, onClose, projectData, onSave, hederText, scale }) => {

    const [leaveType, setLeaveType] = useState({
        paid: false,
        maternity: false,
        hours: false,
        unpaid: false,
        death: false,
        marriage: false,
        religion: false,
        sick: false
    });

    const [description, setDescription] = useState('');

    const handleCheckboxChange = (event) => {
        const { name } = event.target;
        setLeaveType({ ...leaveType, [name]: !leaveType[name] });
    };
    const initialFormData = {
        id: "MID143",
        name: "Akeel Bakkoor",
        department: "Project",
        position: "Senior Project Officer",
        startDate: "21/ Oct/2019",
        applicationDate: "21/ Oct/2019"
    };
    const [formData, setFormData] = useState(initialFormData);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);

        // Submit this data to your server or API endpoint
    };
    const [leaveDetails, setLeaveDetails] = useState({
        leaveType: '',
        description: '',
        compensativeNote: '',
        isHourly: true,
        fromTime: '',
        toTime: '',
        fromDate: '',
        toDate: '',
        numberOfHours: '',
        numberOfDays: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLeaveDetails({ ...leaveDetails, [name]: value });
    };

    const handleLeaveTypeChange = (type) => {
        setLeaveDetails({ ...leaveDetails, leaveType: type });
    };
    if (!isOpen) return null;

    return (
        <Modal onClose={onClose} scale={scale} height={'100%'} width={'100%'}>
            <h2 className='header-text-edit-project'>{hederText}</h2>
            <img src={lineUnder} alt='' />
            <form onSubmit={handleSubmit} className="leave-request-form">
                <table className="info-table">
                    <tbody>
                        <tr>
                            <td className="head-request-table">ID</td>
                            <td>{formData.id}</td>
                            <td className="head-request-table">Department</td>
                            <td><input type="text" name="department" value={formData.department} onChange={handleInputChange} /></td>

                            <td className="head-request-table">Position</td>
                            <td>{formData.position}</td>
                        </tr>
                        <tr>
                            <td className="head-request-table">Name</td>
                            <td><input type="text" name="name" value={formData.name} onChange={handleInputChange} /></td>
                            <td className="head-request-table">Start Date</td>
                            <td>{formData.startDate}</td>
                            <td className="head-request-table">Application date</td>
                            <td>{formData.applicationDate}</td>
                        </tr>
                    </tbody>
                </table>

                <div className="absence-type">
                    <h3>Type of Absence</h3>
                    <div className="leave-request">
                        <div className="leave-type-section">
                            <div className="inline-row">
                                <div className="leave-type-checkboxes">
                                    <Checkbox label="Paid" icon={moneyIcon} fontSize={'1.76rem'} />
                                    <Checkbox label="Maternity" icon={boyIcon} fontSize={'1.75rem'} />
                                    <Checkbox label="Hours" icon={clockIcon} fontSize={'1.75rem'} />
                                    <Checkbox label="Unpaid" icon={waletIcon} fontSize={'1.75rem'} />

                                </div>
                                <div className="leave-type-checkboxes">
                                    <Checkbox label="Death" icon={badIcon} fontSize={'1.75rem'} />
                                    <Checkbox label="Marriage" icon={mairedIcon} fontSize={'1.75rem'} />
                                    <Checkbox label="Religion" icon={moonIcon} fontSize={'1.75rem'} />
                                    <Checkbox label="Sick" icon={midecenIcon} fontSize={'1.75rem'} />

                                </div>
                                <div className="time-selection-section">
                                    <h2>Date and time</h2>

                                    <div className="date-inputs">
                                        <div className="inline-row">
                                            <label htmlFor="fromDate">from</label>
                                            <input type="datetime-local" name="fromDate" value={leaveDetails.fromDate} onChange={handleChange} />
                                        </div>
                                        <div className="inline-row">
                                            <label htmlFor="toDate"> to</label>
                                            <input type="datetime-local" name="toDate" value={leaveDetails.toDate} onChange={handleChange} />
                                        </div>
                                        <input type="number" name="numberOfHours" placeholder="Number of hours" value={leaveDetails.numberOfHours} onChange={handleChange} />

                                        <input type="number" name="numberOfDays" placeholder="Number of days" value={leaveDetails.numberOfDays} onChange={handleChange} />
                                    </div>
                                </div>
                            </div>
                            <div className="inline-row" style={{ marginTop: '4rem' }}>
                                <input type="text" className='description-leave ' placeholder="Enter description" value={description} onChange={(e) => setDescription(e.target.value)} />
                            </div>
                            <CompensativeVacationNote />
                        </div>


                    </div>

                </div>

                <DelegationFormCoordinator />


                <ApprovalFieldsCoordinator />
                <DirectManagerSignature onClose={onClose} />

                <HRFields />
                <Button
                    label="send"
                    onClick={() => console.log('Clicked button')}
                    className="button-add-logical-framework mb-3"
                    width={'100%'}
                    height={'3rem'}
                    fontSize={'1.125rem'}
                />


            </form>

        </Modal>
    );
};

export default AddLeaveRequestCoordinator;
