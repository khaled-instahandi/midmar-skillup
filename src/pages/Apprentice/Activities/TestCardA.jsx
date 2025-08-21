import React from 'react';

const TestCardA = ({ question, options, type }) => {
    const handleLabelClick = (id) => {
        const input = document.getElementById(id);
        if (input) {
            input.checked = !input.checked; // Toggle the checked attribute of the input
            // handleOptionSelect(input.value); // Update the selected answer based on the input value
        }
    };

    return (
        <div className="test-card">
            <p>{question}</p>
            <div className="items-answer-test">
                {options.map((option, index) => (
                    <div className="item-answer" key={index}>
                        {type === 'radio' && (
                            <>
                                <input type="radio" id={option.id} name={option.id} value={option.value} />
                                <label htmlFor={option.id} onClick={() => handleLabelClick(option.id)}>{option.label}</label><br />
                            </>
                        )}{type === "text" && (
                            <>
                                <input type="text" style={{ width: '100%' }} className='description-exam' id={option.id} name={option.id} placeholder={option.placeholder} />
                            </>
                        )}
                        {type === 'range' && (
                            <>
                                <div className="range-no" style={{ display: 'block' }}>

                                    <div className="range-label">
                                        <span>1</span>
                                        <span>2</span>
                                        <span>3</span>
                                        <span>4</span>
                                        <span>5</span>
                                    </div>
                                    <input type="range" style={{ width: '50%' }} className='mt-8' id={option.id} name={option.name} min={'1'} max={'5'} step={'1'} />
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestCardA;