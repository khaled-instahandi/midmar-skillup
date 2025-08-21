import React, { useState } from 'react';
import InputField from '../DynamicInput/InputField';
import Dropdown from '../Dropdown/Dropdown';

function BudgetTableDetails() {
    const [items, setItems] = useState([
        { id: 1, name: 'Laptop', unit: 'Piece', quantity: 5, unitPrice: 1000 },
    ]);

    const handleInputChange = (event, index, fieldName) => {
        const newItems = [...items];
        newItems[index][fieldName] = event.target.value;
        setItems(newItems);
    };

    const addItem = () => {
        setItems([...items, { id: items.length + 1, name: '', unit: '', quantity: 0, unitPrice: 0 }]);
    };

    const removeItem = (index) => {
        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
    };

    const getTotalPrice = (item) => {
        return (item.quantity * item.unitPrice).toFixed(2);
    };

    const getTotalCost = () => {
        return items.reduce((total, item) => total + item.quantity * item.unitPrice, 0).toFixed(2);
    };

    return (

        <div className='budget-table-pur'>
            <div className=' scrolled-table'>
                <h2>Add items</h2>
                <table className="budget-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item</th>
                            <th>Unit</th>
                            <th>Quantity</th>
                            <th>Unit Price</th>
                            <th>Total Price</th>
                            <th>Price in dollars</th>
                            <th>Budget Code</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>
                                    <InputField
                                        type='text'
                                        Value={item.name} onChange={(e) => handleInputChange(e, index, 'name')}
                                        placeholder={'Enter the Description'}
                                        disable
                                    />

                                    {/* <input type="text" value={item.name} onChange={(e) => handleInputChange(e, index, 'name')} /> */}
                                </td>
                                <td>
                                    <InputField
                                        disable
                                        type='text'
                                        Value={item.unit} onChange={(e) => handleInputChange(e, index, 'unit')}
                                    />
                                    {/* <input type="text" value={item.unit} onChange={(e) => handleInputChange(e, index, 'unit')} /> */}
                                </td>
                                <td>
                                    <InputField
                                        disable
                                        type='number'
                                        Value={item.quantity} onChange={(e) => handleInputChange(e, index, 'quantity')}
                                    />
                                    {/* <input type="number" value={item.quantity} onChange={(e) => handleInputChange(e, index, 'quantity')} /> */}
                                </td>
                                <td>
                                    <InputField
                                        disable
                                        type='number'
                                        Value={item.unitPrice} onChange={(e) => handleInputChange(e, index, 'unitPrice')}
                                    />
                                    {/* <input type="number" value={item.unitPrice} onChange={(e) => handleInputChange(e, index, 'unitPrice')} /> */}
                                </td>
                                <td>{getTotalPrice(item)}</td>
                                <td>{getTotalPrice(item)}</td>
                                <td>
                                    <Dropdown
                                        disable={true}
                                        placeHolder={'Select'}
                                        options={['Category 1', 'Category 2']}
                                    />
                                    {/* <select>
                  <option value="select">Select</option>
                </select> */}
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>


            </div>
            <div className="buttom-budget-table-details">

                {/* <button onClick={addItem}>Add another item</button> */}
                <div className="total-cost">Total cost: <span> ${getTotalCost()}</span></div>

            </div>
        </div>
    );
}
export default BudgetTableDetails