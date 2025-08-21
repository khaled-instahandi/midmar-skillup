import React, { useState } from 'react'
import ProfileBadge from '../../../components/ProfileCard/ProfileCard'
import userIcon from '../../../images/user-image.svg';

import Button from '../../../elements/Buttons/Button';
import editIcon from '../../../images/edit-2.svg'
import WorkProgressIndicatorAr from '../../../charts/ar/WorkProgressIndicatorAr/WorkProgressIndicator';
import DailyLeaveBalanceChartAr from '../../../charts/ar/DailyLeaveBalanceChartAr/DailyLeaveBalanceChartAr';
import EvaluationResultChartAr from '../../../charts/ar/EvaluationResultChartAr/EvaluationResultChartAr';
import EditPanelApprentice from './EditPanelApprentice';
function PanelApprentice() {
    const handleEdit = () => {
        // Handle the edit action (e.g., open a modal to edit the profile)
    };
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedProjectData, setSelectedProjectData] = useState(null);

    const handleEditClick = (item) => {
        console.log(`Edit Profile : ${item}`);

        setIsEditModalOpen(true);
    };

    const handleModalClose = () => {
        setIsEditModalOpen(false);
    };
    const handleSaveEditedProject = (editedData) => {
        console.log('Edited project data:', editedData);
        // handleModalClose(); 
    };
    const score = 85; // Example score
    const resultText = 'جيد جدًا'; // Example result text

    const milestones = [
        { id: 1, date: '01/01/2023', status: 'done', label: 'Project Kickoff' },
        { id: 2, date: '02/15/2023', status: 'done', label: 'Phase 1 Release' },
        { id: 3, date: '05/20/2023', status: 'done', label: 'Phase 2 Release' },
        { id: 4, date: '06/20/2023', status: 'done', label: 'Phase 2 Release' },

        { id: 5, date: '08/10/2023', status: 'pending', label: 'Testing Start' },
        { id: 6, date: '10/01/2023', status: 'pending', label: 'Final Review' },
    ];


    const startMonth = 0; // Assuming the work started in January
    const currentMonth = new Date().getMonth(); // Current month as an index (0-11)
    const endMonth = 11; // Assuming the end of the year is December
    const totalMonths = currentMonth - startMonth + 1; // Include the starting month in the count
    return (
        <div className='activity-page'>
            <div className="panel-page">
                <div className="profile-image-edit">
                    <ProfileBadge
                        name="عقيل بكور"
                        title="متدرب"
                        onEdit={handleEdit}
                        profileImage={userIcon}
                    />
                    <Button
                        className={'edit-btn-panel'}
                        label={'تعديل الملف الشخصي'}
                        Icon={editIcon}
                        iconPosition={'left'}
                        onClick={() => setIsEditModalOpen(true)}

                    />
                </div>

                <div className="panel-charts-top">
                    <EvaluationResultChartAr score={score} resultText={resultText} />
                    <DailyLeaveBalanceChartAr totalDays={20} bookedDays={14} />
                </div>
                <WorkProgressIndicatorAr monthsElapsed={8} totalMonths={12}
                />

            </div>

            <EditPanelApprentice
                isOpen={isEditModalOpen}

                onClose={handleModalClose}
                projectData={selectedProjectData}
                onSave={handleSaveEditedProject}
            />
        </div>
    )
}

export default PanelApprentice