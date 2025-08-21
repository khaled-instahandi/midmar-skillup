import React, { useState } from 'react';
import './ActualValueTable.css'; // Your CSS file path here
import Button from '../../../elements/Buttons/Button';
import trachIcon from '../../../images/trash-icon.svg'
import wordIcon from '../../../images/word-icon.svg'
import addIcon from '../../../images/add-square.svg'
import arrowRightIcon from '../././../../images/right-logical.svg'

const ArrowIcon = ({ isPositive }) => {
    return isPositive ? <span>&uarr;</span> : <span>&darr;</span>;
};
const ArrowIconType = ({ isPositive }) => {
    return isPositive ? <div className={`arrow-name-table `} style={{ marginRight: '0.5rem' }}>
        <img src={arrowRightIcon} alt='' /></div>
        :
        <div className={`arrow-name-table down`} style={{ marginRight: '0.5rem' }}>
            <img src={arrowRightIcon} alt='' /></div>;


};
const Row = ({ data }) => {
    const { type, statement, indicator, date, Baseline, Target, Actual, varianceRate, children } = data;

    const [editableBaseline, setEditableBaseline] = useState(Baseline || '');
    const [editableTarget, setEditableTarget] = useState(Target || '');
    const [editableActual, setEditableActual] = useState(Actual || '');
    const handleBaselineEdit = () => {
        console.log('Baseline edited:', editableBaseline);
    };

    const handleTargetEdit = (e) => {
        const newValue = e.target.innerText;

        console.log('Target edited:', newValue);
    };

    const handleActualEdit = (e) => {
        const newValue = e.target.innerText;

        console.log('Actual edited:', newValue);
    };
    const isNA = (value) => value === 'N/A';

    const [childrenVisible, setChildrenVisible] = useState(false);

    const toggleChildren = () => {
        setChildrenVisible(!childrenVisible);
    };

    const isPercentagePositive = (value) => {
        const numericValue = parseFloat(value?.replace('%', '') || 0);
        return numericValue > 0;
    };

    const isPercentageNegative = (value) => {
        const numericValue = parseFloat(value?.replace('%', '') || 0);
        return numericValue < 0;
    };


    return (
        <>
            <tr className={`row-${type}`} >
                <td className={`logical-content first-cl ${isNA(type) ? 'na-value' : ''} ${!childrenVisible ? '' : 'border-right-logical'}`} onClick={toggleChildren}>
                    {type && <ArrowIconType isPositive={!childrenVisible} />}

                    {type}
                </td>
                <td className={`logical-content ${isNA(statement) ? 'na-value' : ''}`}>{statement}</td>
                <td className={`logical-content ${isNA(indicator) ? 'na-value' : ''}`}>{indicator}</td>
                <td className={`logical-content ${isNA(date) ? 'na-value' : ''}`}>{date}</td>
                <td
                    className={`logical-content ${isNA(Baseline) ? 'na-value' : ''}`}
                    onClick={() => setEditableBaseline(Baseline || '')}
                    onBlur={handleBaselineEdit}
                    contentEditable={true}
                >
                    {editableBaseline}
                </td>
                <td
                    className={`logical-content ${isNA(Target) ? 'na-value' : ''} ${isPercentagePositive(editableTarget) ? 'positive' : isPercentageNegative(editableTarget) ? 'negative' : ''}`}
                    onClick={() => setEditableTarget(Target || '')}
                    onInput={handleTargetEdit}  // Change onBlur to onInput
                    contentEditable={true}
                >
                    {!isNA(editableTarget) ? (
                        <>
                            {editableTarget} <ArrowIcon isPositive={isPercentagePositive(editableTarget)} />
                        </>
                    ) : editableTarget}
                </td>
                <td
                    className={`logical-content ${isNA(Actual) ? 'na-value' : ''}`}
                    onClick={() => setEditableActual(Actual || '')}
                    onBlur={handleActualEdit}
                    contentEditable={true}
                >
                    {editableActual}
                </td>
                <td className={`logical-content ${isNA(varianceRate) ? 'na-value' : ''}`}>{varianceRate}</td>
            </tr>
            {children && childrenVisible && (
                <>
                    {children.map((child) => (
                        <Row key={child.id} data={child} />
                    ))}
                </>
            )}
        </>
    );
};

const ActualValueTable = ({ data }) => {
    return (
        <div className="logical-framework-table-container">
            <h1>Actual value of indicators</h1>
            <div className="header-logical-table">
                <div className="export-buttons">
                    <span>Data Export</span>
                    <button className='export-button' onClick={() => console.log('csv')}>CSV</button>
                    <button className='export-button' onClick={() => console.log('excel')}>Excel</button>
                    <button className='export-button' onClick={() => console.log('pdf')}>Pdf</button>
                </div>
                <div className="opration-buttons-actual">
                    <Button
                        label="Import Indicators table"
                        onClick={() => console.log('Clicked button')}
                        className="button-import"
                        Icon={wordIcon}
                        iconPosition={'left'}
                        width={'40%'}
                        height={'3rem'}
                        fontSize={'1.125rem'}
                    />


                </div>
            </div>
            <div className="table-container">

                <table className="logical-framework-table">
                    <thead>
                        <tr>
                            <th className='heder-logical'></th>
                            <th className='heder-logical'>Statement</th>
                            <th className='heder-logical'>Indicator</th>
                            <th className='heder-logical'>date</th>
                            <th className='heder-logical'>Baseline</th>
                            <th className='heder-logical'>target</th>
                            <th className='heder-logical'>Actual</th>
                            <th className='heder-logical'>varianceRate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <Row key={item.id} data={item} />
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ActualValueTable;