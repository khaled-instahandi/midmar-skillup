import React, { useEffect, useState } from "react";
import InputField from "../DynamicInput/InputField";
import Dropdown from "../Dropdown/Dropdown";
import DatePicker from "../DatePicker/DatePicker";
import "./AddComponent.css";
import Button from "../Buttons/Button";
import Add from "../../images/add-icon.svg";
import ArrowRight from "../../images/arrow-right.svg";

const initialIndicator = {
  indicator: "",
  targetType: "",
  targetDirection: "",
  targetNumber: "",
  targetNumber: "",
  date: "",
  Mov: "",
};

const initialOutput = {
  Outcome: "",
  OutputStatement: "",
  Assumption: "",
  indicators: [{ ...initialIndicator }],
};

const AddComponent = ({
  lableText,
  buttonText,
  isOutCome = false,
  onChange,
  isEdit = false,
  buttonEdit,
}) => {
  const [outputs, setOutputs] = useState([{ indicators: [initialIndicator] }]);
  const [fieldsVisible, setFieldsVisible] = useState(false);

  const toggleFields = () => {
    if (!fieldsVisible && outputs.length === 0) {
      setOutputs([initialOutput]);
    }
    setFieldsVisible(!fieldsVisible);
  };

  const addIndicator = (outputIndex) => {
    const newOutputs = [...outputs];
    newOutputs[outputIndex].indicators.push({ ...initialIndicator });
    setOutputs(newOutputs);
  };

  const handleFieldChange = (e, outputIndex, indicatorIndex, fieldName) => {
    const value = e.target ? e.target.value : e;
    const uniqueFieldName = `${fieldName}-${outputIndex}-${indicatorIndex}`;
    onChange(value, outputIndex, indicatorIndex, uniqueFieldName);
  };

  const handleOutputChange = (value, outputIndex, fieldName) => {
    const uniqueFieldName = `${fieldName}-${outputIndex}`;

    setOutputs((prevOutputs) => {
      const newOutputs = [...prevOutputs];
      newOutputs[outputIndex] = {
        ...newOutputs[outputIndex],
        [uniqueFieldName]: value,
      };
      return newOutputs;
    });
  };

  return (
    <div className="dynamic-fields-form">
      <h2 onClick={toggleFields}>
        <span className={`arrow ${fieldsVisible ? "up" : "down"}`}>
          <img src={ArrowRight} alt="" />
        </span>
        {lableText}:
      </h2>
      {fieldsVisible && (
        <>
          {outputs.map((output, outputIndex) => (
            <div key={outputIndex}>
              {isOutCome ? (
                <Dropdown
                  name={`Outcome`}
                  label={"Outcome"}
                  options={["1", "2"]}
                  placeHolder={"Select"}
                  onChange={(e) =>
                    handleOutputChange(e.target.value, outputIndex, "Outcome")
                  }
                />
              ) : (
                ""
              )}
              <InputField
                customClass="my-2"
                label="Output statement"
                id="output-statement"
                name={`OutputStatement-${outputIndex}`}
                placeholder="Enter the Output description"
                onChange={(e) =>
                  handleOutputChange(
                    e.target.value,
                    outputIndex,
                    "OutputStatement"
                  )
                }
                isTextarea={true}
              />
              <InputField
                customClass="my-2"
                label="Assumption"
                name={`Assumption-${outputIndex}`}
                onChange={(e) =>
                  handleOutputChange(e.target.value, outputIndex, "Assumption")
                }
                id="Assumption"
                placeholder="Enter assumptions"
                isTextarea={true}
              />

              {output.indicators.map((indicator, indicatorIndex) => (
                <div key={indicatorIndex}>
                  <InputField
                    customClass="my-2"
                    name={`indicator`}
                    label="Indicator and MoV"
                    required={true}
                    id="Indicator-and-MoV"
                    placeholder="Enter the indicator"
                    onChange={(value) =>
                      handleFieldChange(
                        value,
                        outputIndex,
                        indicatorIndex,
                        "indicator"
                      )
                    }
                  />
                  <Dropdown
                    customClass="my-2"
                    name={`targetType`}
                    options={["1", "2"]}
                    placeHolder={"Select the target type"}
                    onChange={(value) =>
                      handleFieldChange(
                        value,
                        outputIndex,
                        indicatorIndex,
                        "targetType"
                      )
                    }
                  />
                  <Dropdown
                    customClass="my-2"
                    name={`targetDirection`}
                    options={["1", "2"]}
                    placeHolder={"Select the target direction"}
                    onChange={(value) =>
                      handleFieldChange(
                        value,
                        outputIndex,
                        indicatorIndex,
                        "targetDirection"
                      )
                    }
                  />
                  <Dropdown
                    customClass="my-2"
                    name={"targetNumber"}
                    options={["1", "2"]}
                    placeHolder={"Enter the target number, percentage, or text"}
                    onChange={(value) =>
                      handleFieldChange(
                        value,
                        outputIndex,
                        indicatorIndex,
                        "targetNumber"
                      )
                    }
                  />
                  <DatePicker
                    name={"date"}
                    onChange={(value) =>
                      handleFieldChange(
                        value,
                        outputIndex,
                        indicatorIndex,
                        "date"
                      )
                    }
                  />
                  <InputField
                    customClass="my-2"
                    id="Indicator-and-MoV"
                    placeholder="Enter the MoV"
                    name={"Mov"}
                    onChange={(value) =>
                      handleFieldChange(
                        value,
                        outputIndex,
                        indicatorIndex,
                        "Mov"
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

              <Button
                label={buttonText}
                onClick={() => console.log("Clicked button")}
                className="button-login-out"
                fontSize={"1rem"}
                width={"100%"}
                height={"3rem"}
              />
              {isEdit && (
                <Button
                  label={buttonEdit}
                  onClick={() => console.log("Clicked button")}
                  className="button-edit-Logical"
                  fontSize={"1rem"}
                  width={"100%"}
                  height={"3rem"}
                />
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default AddComponent;
