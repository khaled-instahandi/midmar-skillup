import React, { useState } from 'react'
import Button from '../../../elements/Buttons/Button';
import InputField from '../../../elements/DynamicInput/InputField';
import Dropdown from '../../../elements/Dropdown/Dropdown';
import DatePicker from '../../../elements/DatePicker/DatePicker';
import './Objectives.css'
import QuillEditor from '../../../components/QuillEditor/QuillEditor';
import ExcelUploadInput from '../../../elements/ImageUploadInput/ExcelUploadInput';
function Objectives() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // onSave(formData);
    };
    const [editorContent, setEditorContent] = useState('');

    const handleEditorData = (data) => {
        setEditorContent(data);
        console.log("data editor :", data);
        // You can perform any further actions here, such as sending the data to a server
    };
    return (
        <div className='activity-page'>
            <div className="activity-table-container">
                <form onSubmit={handleSubmit} className="edit-project-form">
                    <InputField
                        customClass='name-add-activity'

                        label="Activity Name"
                        placeholder={'Enter The Activity Name'}
                        type='text'
                        required={true}
                    />
                    <Dropdown
                        customClass={'objectives-input'}
                        label="Type"
                        placeHolder={'Select'}
                        options={['State 1', 'State 2']}

                        required={true}
                    />
                    <Dropdown
                        customClass={'objectives-input'}

                        label="Attendance"
                        placeHolder={'Select'}
                        options={['State 1', 'State 2']}

                        required={true}
                    />
                    <Dropdown
                        customClass={'objectives-input'}

                        label="Course"
                        placeHolder={'Select'}
                        options={['State 1', 'State 2']}

                        required={true}
                    />
                    <DatePicker
                        customClass={'objectives-input'}

                        lable="Start Date"
                        required={true}

                    />
                    <Dropdown
                        customClass={'objectives-input'}

                        label="Status"
                        placeHolder={'Select'}
                        options={['State 1', 'State 2']}

                        required={true}
                    />
                    <Dropdown
                        customClass={'objectives-input'}

                        label="Do trainees get any money if they attend?"
                        placeHolder={'Select'}
                        options={['State 1', 'State 2']}

                        required={true}
                    />
                    <QuillEditor
                        customClass={'objectives-input objectives-input-q'}
                        label={'Introducing the Instructors'}
                        onData={handleEditorData}
                        required />

                    <QuillEditor
                        customClass={'objectives-input objectives-input-q'}
                        label={'Detailed description'}
                        required />
                    <QuillEditor
                        customClass={'objectives-input objectives-input-q'}
                        label={'Objectives & Outcomes'}
                        required />
                    <QuillEditor
                        customClass={'objectives-input objectives-input-q'}
                        label={'Training Agendas'}
                        required />
                    <ExcelUploadInput
                        label={'Learning Material'}
                        className='important-width'
                        required
                        height="auto"
                        margin={'0.5rem'}
                   
                    />
                    <Button type="submit" label="Save" className={'button-edit-project'} />
                </form>
            </div>
        </div>
    )
}

export default Objectives