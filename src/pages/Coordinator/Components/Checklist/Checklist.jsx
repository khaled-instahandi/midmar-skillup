import React, { useState } from 'react';
import './Checklist.css'; // Make sure to create a CSS file with this name

const Checklist = () => {
    const [items, setItems] = useState([
        { id: 1, text: 'Training Report', checked: true, color: '#4caf50' },
        { id: 2, text: 'Trainee attendance schedule', checked: false, color: '#03a9f4' },
        { id: 3, text: 'Instructor attendance schedule', checked: true, color: '#9c27b0' },
        { id: 4, text: 'Payment receipt', checked: false, color: '#ffeb3b' },
        { id: 5, text: 'NRS', checked: false, color: '#ff9800' }
    ]);

    const toggleItem = (id) => {
        setItems(items.map(item =>
            item.id === id ? { ...item, checked: !item.checked } : item
        ));
    };

    return (
        <div className="checklist">
            <h2>Check List</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id} className={item.checked ? 'checked' : ''}>
                        <label className="checklist-item">
                            <input
                                type="checkbox"
                                checked={item.checked}
                                onChange={() => toggleItem(item.id)}
                                style={{ accentColor: item.color }}
                            />
                            <span className="checklist-custom-checkbox" style={{ backgroundColor: item.color }}></span>
                            {item.text}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Checklist;
