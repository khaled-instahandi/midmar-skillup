import React, { useEffect, useState } from 'react';
import Modal from '../../../Modal';
import Checkbox from '../../../../elements/Checkbox/Checkbox';
import lineUnder from '../../../../images/under-title-opration.svg';
import sercheIcon from '../../../../images/serche-icon.svg';
import Pagination from '../../../../elements/Pagination/Pagination';
import Button from '../../../../elements/Buttons/Button';

const AddTrainees = ({ isOpen, onClose, onSave, label }) => {
    const initialTrainees = [
        { id: 1, fullNameEnglish: 'Khaled Ramazan Alahmad', fullNameArabic: 'خالد رمضان الاحمد', Email: 'eng.khaledalahmad@gmail.com', Education: "graduated", Type: "SysAdmin", select: true },
        { id: 2, fullNameEnglish: 'Omar Ramazan Alahmad', fullNameArabic: 'عمر رمضان الاحمد', Email: 'eng.omaralahmad@gmail.com', Education: "graduated", Type: "User", select: true },
        { id: 3, fullNameEnglish: 'Ahmnad Ramazan Alahmad', fullNameArabic: 'احمد رمضان الاحمد', Email: 'eng.ahmadalahmad@gmail.com', Education: "graduated", Type: "Staff", select: true },

        { id: 4, fullNameEnglish: 'Khaled Ramazan Alahmad', fullNameArabic: 'خالد رمضان الاحمد', Email: 'eng.khaledalahmad@gmail.com', Education: "graduated", Type: "SysAdmin", select: true },
        { id: 5, fullNameEnglish: 'Omar Ramazan Alahmad', fullNameArabic: 'عمر رمضان الاحمد', Email: 'eng.omaralahmad@gmail.com', Education: "graduated", Type: "User", select: true },
        { id: 6, fullNameEnglish: 'Ahmnad Ramazan Alahmad', fullNameArabic: 'احمد رمضان الاحمد', Email: 'eng.ahmadalahmad@gmail.com', Education: "graduated", Type: "Staff", select: true },

        { id: 7, fullNameEnglish: 'Khaled Ramazan Alahmad', fullNameArabic: 'خالد رمضان الاحمد', Email: 'eng.khaledalahmad@gmail.com', Education: "graduated", Type: "SysAdmin", select: true },
        { id: 8, fullNameEnglish: 'Omar Ramazan Alahmad', fullNameArabic: 'عمر رمضان الاحمد', Email: 'eng.omaralahmad@gmail.com', Education: "graduated", Type: "User", select: true },
        { id: 9, fullNameEnglish: 'Ahmnad Ramazan Alahmad', fullNameArabic: 'احمد رمضان الاحمد', Email: 'eng.ahmadalahmad@gmail.com', Education: "graduated", Type: "Staff", select: true },


        // ... more trainees
    ];
    
    const [trainees, setTrainees] = useState(initialTrainees);
    const [tags, setTags] = useState(initialTrainees.filter(t => t.attended).map(t => t.fullNameEnglish));
    const [searchQuery, setSearchQuery] = useState('');
    const itemsPerPage = searchQuery ? trainees.length : 4;
    const totalPages = Math.ceil(trainees.length / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentItems, setCurrentItems] = useState(trainees.slice(0, itemsPerPage));

    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
        setCurrentPage(1); // Reset to first page on search
    };

    const handleCheckboxChange = (traineeId) => {
        const updatedTrainees = trainees.map((trainee) =>
            trainee.id === traineeId ? { ...trainee, attended: !trainee.attended } : trainee
        );

        setTrainees(updatedTrainees);
        setCurrentItems(updatedTrainees.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(trainees);
    };

    useEffect(() => {
        let updatedTrainees = [...initialTrainees];

        if (searchQuery) {
            updatedTrainees = updatedTrainees.filter(trainee =>
                trainee.fullNameEnglish.toLowerCase().includes(searchQuery)
            );
        }

        setCurrentItems(updatedTrainees.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage));
    }, [searchQuery, currentPage, itemsPerPage]);

    useEffect(() => {
        // Update currentItems whenever trainees or currentPage changes
        setCurrentItems(trainees.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage));
    }, [trainees, currentPage, itemsPerPage]);

    if (!isOpen) return null;

    return (
        <Modal onClose={onClose} height={'auto'}>
            <h2 className='header-text-edit-project'>Add Trainees</h2>
            <img src={lineUnder} alt='' />
            <form onSubmit={handleSubmit} className="add-sub-activity">
                <div className="trainees-container">
                    {label && <label>{label}</label>}
                    <div className="scroll-x-container" style={{ overflow: 'hidden', minWidth: '100%' }}>
                        <div className="tag-input">
                            <img src={sercheIcon} alt="" style={{ marginLeft: '0.5rem' }} />
                            <input
                                type="text"
                                placeholder="Search for a name or email"
                                value={searchQuery}
                                onChange={handleSearchInputChange}
                            />
                        </div>
                    </div>
                    <div className="trainees-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Full Name (English)</th>
                                    <th>Full Name (Arabic)</th>
                                    <th>Email</th>
                                    <th>Education</th>
                                    <th>Type</th>
                                    <th>Select</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentItems.map((trainee) => (
                                    <tr key={trainee.id}>
                                        <td>{trainee.fullNameEnglish}</td>
                                        <td>{trainee.fullNameArabic}</td>
                                        <td>{trainee.Email}</td>
                                        <td>{trainee.Education}</td>

                                        <td>{trainee.Type}</td>
                                        <td>
                                            <Checkbox
                                                checked={trainee.attended}
                                                onChange={() => handleCheckboxChange(trainee.id)}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="pagination-table">
                        {searchQuery ? '' : (
                            <Pagination
                                itemsPerPage={itemsPerPage}
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={setCurrentPage}
                                totalItems={initialTrainees.length}
                            />
                        )}
                    </div>
                </div>
                <Button type="submit" label="Add Selected" className={'button-edit-project'} height={'3rem'} />

            </form>
        </Modal>
    );
};

export default AddTrainees;
