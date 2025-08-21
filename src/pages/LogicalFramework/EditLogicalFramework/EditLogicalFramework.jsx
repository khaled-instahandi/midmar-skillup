import React, { useState } from "react";
import Modal from "../../Modal";
import InputField from "../../../elements/DynamicInput/InputField";
import Dropdown from "../../../elements/Dropdown/Dropdown";
import DatePicker from "../../../elements/DatePicker/DatePicker";
import Button from "../../../elements/Buttons/Button";
import Add from "../../../images/add-icon.svg";
import ArrowRight from "../../../images/arrow-right.svg";
import "./../AddLogicalFramework/AddLogicalFramework.css";
import lineUnder from "../../../images/under-title-opration.svg";
import AddComponent from "../../../elements/AddComponent/AddComponent";

const initialIndicator = {};

const EditLogicalFramework = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({});
  const [outputs, setOutputs] = useState([{ indicators: [initialIndicator] }]);

  const [addedData, setAddedData] = useState([]);

  if (!isOpen) return null;

  const addIndicator = (outputIndex) => {
    setOutputs((prevOutputs) => {
      const newOutputs = [...prevOutputs];
      newOutputs[outputIndex].indicators.push({ ...initialIndicator });
      return newOutputs;
    });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleIndicatorChange = (
    value,
    outputIndex,
    indicatorIndex,
    fieldName
  ) => {
    setOutputs((prevOutputs) => {
      const newOutputs = [...prevOutputs];
      const newIndicator = {
        ...newOutputs[outputIndex].indicators[indicatorIndex],
        [fieldName]: value,
      };
      newOutputs[outputIndex].indicators[indicatorIndex] = newIndicator;
      return newOutputs;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = { formData, outputs };
    setAddedData((prevData) => [...prevData, newData]);
    onSave(newData);
    onClose();
  };
  const handleAddComponentChange = (value, outputIndex, fieldName) => {
    setOutputs((prevOutputs) => {
      const newOutputs = [...prevOutputs];
      newOutputs[outputIndex] = {
        ...newOutputs[outputIndex],
        [fieldName]: value,
      };
      return newOutputs;
    });
  };

  return (
    <Modal onClose={onClose} height={'100%'}>
      <h2 className="header-text-add-logical-framework">
        Edit Logical Framework
      </h2>
      <img src={lineUnder} alt="" />
      <form onSubmit={handleSubmit} className="add-logical-framework-form">
        {outputs.map((output, outputIndex) => (
          <>
            <InputField
              customClass="my-2"
              name={`objectiveStatement-${outputIndex}`}
              label="Objective statement"
              id="Objectivestatement"
              placeholder="Enter the Objective statement"
              required={true}
              onChange={handleFormChange}
            />
            <div key={outputIndex} style={{ width: "100%" }}>
              {output.indicators.map((indicator, indicatorIndex) => (
                <div key={indicatorIndex}>
                  <InputField
                    customClass="my-2"
                    name={`indicator-${outputIndex}-${indicatorIndex}`}
                    label="Indicator and MoV"
                    required={true}
                    id="Indicator-and-MoV"
                    placeholder="Enter the indicator"
                    onChange={(e) =>
                      handleIndicatorChange(
                        e.target.value,
                        outputIndex,
                        indicatorIndex,
                        `indicator-${outputIndex}-${indicatorIndex}`
                      )
                    }
                  />
                  <Dropdown
                    customClass="my-2"
                    name={`targetType-${outputIndex}-${indicatorIndex}`}
                    options={["1", "2"]}
                    placeHolder={"Select the target type"}
                    onChange={(e) =>
                      handleIndicatorChange(
                        e.target.value,
                        outputIndex,
                        indicatorIndex,
                        `targetType-${outputIndex}-${indicatorIndex}`
                      )
                    }
                  />
                  <Dropdown
                    customClass="my-2"
                    name={`targetDirection-${outputIndex}-${indicatorIndex}`}
                    options={["1", "2"]}
                    placeHolder={"Select the target direction"}
                    onChange={(e) =>
                      handleIndicatorChange(
                        e.target.value,
                        outputIndex,
                        indicatorIndex,
                        `targetDirection-${outputIndex}-${indicatorIndex}`
                      )
                    }
                  />
                  <Dropdown
                    customClass="my-2"
                    name={`targetNumber-${outputIndex}-${indicatorIndex}`}
                    options={["1", "2"]}
                    placeHolder={"Enter the target number, percentage, or text"}
                    onChange={(e) =>
                      handleIndicatorChange(
                        e.target.value,
                        outputIndex,
                        indicatorIndex,
                        `targetNumber-${outputIndex}-${indicatorIndex}`
                      )
                    }
                  />
                  <DatePicker
                    name={`date-${outputIndex}-${indicatorIndex}`}
                    onChange={(e) =>
                      handleIndicatorChange(
                        e.target.value,
                        outputIndex,
                        indicatorIndex,
                        `date-${outputIndex}-${indicatorIndex}`
                      )
                    }
                  />
                  <InputField
                    customClass="my-2"
                    name={`Mov-${outputIndex}-${indicatorIndex}`}
                    id="Indicator-and-MoV"
                    placeholder="Enter the MoV"
                    isTextarea={true}
                    onChange={(e) =>
                      handleIndicatorChange(
                        e.target.value,
                        outputIndex,
                        indicatorIndex,
                        `Mov-${outputIndex}-${indicatorIndex}`
                      )
                    }
                  />
                </div>
              ))}
              <button
                type="button"
                className="add-btn-container"
                onClick={() => addIndicator(outputIndex)}
              >
                <span className="add-btn">
                  <img src={Add} alt="" />
                </span>{" "}
                Add another indicator and MoV
              </button>
            </div>
          </>
        ))}

        <AddComponent
          lableText={"Add Outcome"}
          isEdit={true}
          buttonEdit={"Delete this outcome"}
          buttonText={"Add another outcome"}
          isOutCome={false}
          onChange={(value, outputIndex, indicatorIndex, fieldName) =>
            handleAddComponentChange(
              value,
              outputIndex,
              indicatorIndex,
              fieldName
            )
          }
        />
        <AddComponent
          lableText={"Add Output"}
          buttonText={"Add another output"}
          isEdit={true}
          buttonEdit={"Delete this output"}
          isOutCome={true}
          onChange={(value, outputIndex, indicatorIndex, fieldName) =>
            handleAddComponentChange(
              value,
              outputIndex,
              indicatorIndex,
              fieldName
            )
          }
        />

        <Button
          type="submit"
          label="Edit logical framework"
          className={"button-add-logical-framework"}
        />
      </form>
      {addedData.map((data, index) => (
        <div key={index}>
          <h2>Added Data #{index + 1}</h2>
          <p>formData:</p>
          <pre>{JSON.stringify(data.formData, null, 2)}</pre>
          <p>outputs:</p>
          {data.outputs.map((output, outputIndex) => (
            <div key={outputIndex}>
              <p>Output #{outputIndex + 1}:</p>
              <pre>{JSON.stringify(output, null, 2)}</pre>
            </div>
          ))}
        </div>
      ))}
    </Modal>
  );
};

export default EditLogicalFramework;
