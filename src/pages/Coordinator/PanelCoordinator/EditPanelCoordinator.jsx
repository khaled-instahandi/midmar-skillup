import React, { useState } from 'react';
import Modal from '../../Modal';
import InputField from '../../../elements/DynamicInput/InputField';
import Dropdown from '../../../elements/Dropdown/Dropdown';
import DatePicker from '../../../elements/DatePicker/DatePicker';
import Button from '../../../elements/Buttons/Button';
import lineUnder from '../../../images/under-title-opration.svg'
import TimePicker from '../../../elements/TimePicker/TimePicker';
import './PanelCoordinator.css'
import ExcelUploadInput from '../../../elements/ImageUploadInput/ExcelUploadInput';
import fileExcel from '../../../files/example.xlsx'
import filePdf from '../../../files/example.pdf'

const EditPanelCoordinator = ({ isOpen, onClose, projectData, onSave }) => {


    const [formData, setFormData] = useState(projectData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    if (!isOpen) return null;

    return (
        <Modal onClose={onClose} height={'100%'}>
            <h2 className='header-text-edit-project'>Edit Training Sessions</h2>
            <img src={lineUnder} alt='' />
            <form onSubmit={handleSubmit} className="edit-panel">


                <InputField
                    type='text'
                    customClass='two-col-element'
                    label="First Name (Ar)"
                    Value={'خالد'}
                    required={true}
                    disable
                />
                <InputField
                    type='text'
                    customClass='two-col-element'

                    label="Last Name (Ar)"
                    Value={'الاحمد'}
                    required={true}
                    disable
                />
                <InputField
                    type='text'
                    customClass='two-col-element'

                    disable
                    label="First Name (En)"
                    Value={'khaled'}
                    required={true}
                />
                <InputField
                    type='text'
                    customClass='two-col-element'

                    disable
                    label="Last Name (En)"
                    Value={'alahmad'}
                    required={true}
                />
                <DatePicker
                    lable="Date of birth"
                    customClass='two-col-element'

                    required={true}
                    value={'01/01/1993'}
                    disabled
                />
                <Dropdown
                    label="Gender"
                    customClass='two-col-element'

                    placeHolder={'Who would you like to add?'}
                    options={['Male', 'Female']}
                    disable
                    required={true}
                    value={'Male'}
                />
                <InputField
                    customClass='two-col-element'

                    type='text'
                    disable
                    label="Workplace"
                    Value={'Turkey'}
                    placeholder={'alahmad'}
                    required={true}
                />
                <InputField
                    customClass='two-col-element'

                    type='text'
                    disable
                    label="job position"
                    Value={'Project officer'}
                    placeholder={'alahmad'}
                    required={true}
                />
                <DatePicker
                    lable="Work start date"
                    customClass='two-col-element'

                    required={true}
                    value={'01/01/2023'}
                    disabled
                />
                <InputField
                    customClass='two-col-element'

                    type='text'
                    disable
                    label="Country"
                    Value={'Turkey'}
                    placeholder={'alahmad'}
                    required={true}
                />
                <InputField
                    type='text'
                    customClass='two-col-element'

                    disable
                    label="City of birth"
                    Value={'Aleppo'}
                    placeholder={'alahmad'}
                    required={true}
                />
                <InputField
                    type='text'
                    customClass='two-col-element'

                    disable
                    label="ID photo"
                    Value={'ID photo - Nour.png'}
                    placeholder={'alahmad'}
                    required={true}
                />
                <InputField
                    type='text'
                    customClass='two-col-element'

                    // disable
                    label="Phone"
                    Value={'+90 531 808 45 96'}
                    placeholder={'alahmad'}
                    required={true}
                />
                <InputField
                    type='email'
                    // disable
                    customClass='two-col-element'

                    label="Email"
                    Value={'m.nour.eng@gmail.com'}
                    placeholder={'alahmad'}
                    required={true}
                />

                <InputField
                    customClass='two-col-element'

                    type='password'
                    // disable
                    label="Password"
                    Value={'123456789'}
                    placeholder={'alahmad'}
                    required={true}
                />
                {/* <div className="text-width-for-col"> */}
                <InputField
                    customClass='three-col-element'

                    type='text'
                    // disable
                    label="Educational level"
                    Value={'Bachelor of Science in Management'}
                    placeholder={'alahmad'}
                    required={true}
                />
                {/* </div> */}
                <InputField
                    type='text'
                    customClass='three-col-element'

                    // disable
                    label="Place of residence"
                    Value={'Türkiye - Gaziantep - opposite Al Amal School'}
                    placeholder={'alahmad'}
                    required={true}
                />

                <ExcelUploadInput
                    label={'CV'}
                    className='important-width'
                    required
                    value={{ name: 'example.xlsx' }}

                    // height="auto"
                    margin={'0.5rem'}
                    forEdit

                />
                <ExcelUploadInput
                    label={'Certificate'}
                    className='important-width'
                    required
                    value={{ name: 'example.pdf' }}
                    margin={'0.5rem'}
                    forEdit

                />

                <Button type="submit" label="Save edit" className={'button-edit-project btn-one-row'} />
            </form>
        </Modal>
    );
};

export default EditPanelCoordinator;
