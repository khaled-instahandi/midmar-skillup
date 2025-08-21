import React, { useState } from "react";
import InputField from "../DynamicInput/InputField";
import Dropdown from "../Dropdown/Dropdown";
import DatePicker from "../DatePicker/DatePicker";
import { BiTrash } from "react-icons/bi";
import styles from "./BudgetTableDetailsEmployee.module.css";

function BudgetTableDetailsEmployee() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "",
      unit: "Piece",
      quantity: 100,
      budget: 500,
      repetition: 5,
      totalPrice: 500,
      budgetCode: "A.1 Consultative Unit Consultants",
      location: "312",
      date: "17/7/2025",
      note: "",
    },
  ]);

  const handleInputChange = (value, index, fieldName) => {
    const newItems = [...items];
    newItems[index][fieldName] = value;
    if (
      fieldName === "quantity" ||
      fieldName === "budget" ||
      fieldName === "repetition"
    ) {
      newItems[index].totalPrice = calculateTotalPrice(newItems[index]);
    }
    setItems(newItems);
  };

  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length + 1,
        title: "",
        unit: "Piece",
        quantity: 100,
        budget: 500,
        repetition: 5,
        totalPrice: 500,
        budgetCode: "A.1 Consultative Unit Consultants",
        location: "312",
        date: "17/7/2025",
        note: "",
      },
    ]);
  };

  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const calculateTotalPrice = (item) => {
    return item.quantity * item.budget * item.repetition;
  };

  const getTotalCost = () => {
    return items.reduce((total, item) => total + item.totalPrice, 0);
  };

  return (
    <div className="budget-table-pur">
      <div className=" scrolled-table">
        <h2>Employment Requests Items</h2>
        <table className="budget-table">
          <thead>
            <tr>
              <th>#</th>
              <th className={styles.widthCustom}>Title</th>
              <th className={styles.widthCustom}>Unit</th>
              <th className={styles.widthCustom}>quantity</th>
              <th className={styles.widthCustom}>Budget</th>
              <th className={styles.widthCustom}>Repetition</th>
              <th className={styles.widthCustom}>Total Price</th>
              <th className={styles.widthCustom}>Budget Code</th>
              <th className={styles.widthCustom}>Location</th>
              <th className={styles.widthCustom}>date</th>
              <th className={styles.widthCustom}>Note</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td className="title-column">
                  <InputField
                    type="text"
                    Value={item.title}
                    onChange={(e) =>
                      handleInputChange(e.target.value, index, "title")
                    }
                    placeholder="Hour"
                  />
                </td>
                <td>
                  <InputField
                    type="text"
                    Value={item.unit}
                    onChange={(e) =>
                      handleInputChange(e.target.value, index, "unit")
                    }
                    placeholder="Piece"
                  />
                </td>
                <td>
                  <Dropdown
                    customClass="small-dropdown"
                    options={["Month"]}
                    defaultValue="Month"
                  />
                  {/* <InputField
                    type="number"
                    Value={item.quantity}
                    onChange={(e) =>
                      handleInputChange(e.target.value, index, "quantity")
                    }
                  /> */}
                </td>
                <td>
                  <InputField
                    type="number"
                    Value={item.budget}
                    onChange={(e) =>
                      handleInputChange(e.target.value, index, "budget")
                    }
                  />
                </td>
                <td>
                  <InputField
                    type="number"
                    Value={item.repetition}
                    onChange={(e) =>
                      handleInputChange(e.target.value, index, "repetition")
                    }
                  />
                </td>
                <td>{item.totalPrice}</td>
                <td>
                  <Dropdown
                    customClass="medium-dropdown"
                    options={[
                      "A.1 Consultative Unit Consultants",
                      "A.2 Other Option",
                      "A.3 Another Option",
                    ]}
                    defaultValue={item.budgetCode}
                    onChange={(value) =>
                      handleInputChange(value, index, "budgetCode")
                    }
                  />
                </td>
                <td>
                  <Dropdown
                    customClass="small-dropdown"
                    options={["312", "313", "314"]}
                    defaultValue={item.location}
                    onChange={(value) =>
                      handleInputChange(value, index, "location")
                    }
                  />
                </td>
                <td>
                  <DatePicker
                    selected={item.date}
                    onChange={(date) => handleInputChange(date, index, "date")}
                  />
                </td>
                <td>
                  <InputField
                    type="text"
                    Value={item.note}
                    onChange={(e) =>
                      handleInputChange(e.target.value, index, "note")
                    }
                    placeholder="Add note"
                  />
                </td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => removeItem(index)}
                  >
                    <BiTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="table-footer">
        <button className={styles.addRow} onClick={addItem}>
          + Add Row
        </button>
        <div className="total-cost">
          Total cost: <span className="cost-value">{getTotalCost()}$</span>
        </div>
      </div>
    </div>
  );
}
export default BudgetTableDetailsEmployee;
