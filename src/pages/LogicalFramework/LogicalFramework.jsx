import React from 'react'
import LogicalFrameworkTree from './LogicalFrameworkTree'
import LogicalFrameworkTable from './LogicalFrameworkTable/LogicalFrameworkTable'
import ActualValueTable from './ActualValueTable/ActualValueTable'
import TestAlert from '../../elements/AlertMessage/TestAlert'

function LogicalFramework() {
  // Usage
  const dataFromJSON = [
    {
      "type": "goal",
      "statement": "Contributing to improving the living conditions and income of young people",
      "indicator": "By the third year, the unemployment rate among youth will decrease",
      "target": "3%",
      "mov": "Ministry of Labor report",
      "assumption": "N/A",
      "id": "goal1",
      "children": [
        {
          "type": "result",
          "statement": "Enhancing the capabilities and skills of young job seekers",
          "indicator": "The number of young people who have practical and technical skills required",
          "target": "-4%",
          "mov": "Ministry of Labor report",
          "assumption": "Stability of the inflation rate in the region",
          "id": "result1",
          "children": [
            {
              "type": "output",
              "statement": "Enhancing the capabilities and skills",
              "indicator": "Enhancing the capabilities and skills",
              "target": "3%",
              "mov": "Ministry of Labor report",
              "assumption": "Stability of the inflation rate in the region",
              "id": "output1",
              "children": [
                {
                  "type": "activity",
                  "statement": "Activity 1",
                  "indicator": "N/A",
                  "target": "N/A",
                  "mov": "N/A",
                  "assumption": "Stability of the inflation rate in the region",
                  "id": "activity1"
                },
                {
                  "type": "activity",
                  "statement": "Activity 2",
                  "indicator": "N/A",
                  "target": "N/A",
                  "mov": "N/A",
                  "assumption": "Stability of the inflation rate in the region",
                  "id": "activity2"
                }
              ]
            }
            // ...other outputs
          ]
        }
        // ...other results
      ]
    }
    // ...other goals
  ]
  const dataFromJSONActual = [
    {
      "type": "goal",
      "statement": "Contributing to improving the living conditions and income of young people",
      "indicator": "By the third year, the unemployment rate among youth will decrease",
      "date": "01/01/2024",
      "Baseline": "0",
      "Target": "10%",
      "Actual": "5%",
      "varianceRate": "5%",
      "id": "goal1",
      "children": [
        {
          "type": "result",
          "statement": "Enhancing the capabilities and skills of young job seekers",
          "indicator": "The number of young peo ple who have practical and technical skills required ",
          "date": "01/03/2024",
          "Baseline": "0",
          "Target": "-4%",
          "Actual": "5%",
          "varianceRate": "5%",
          "id": "result1",
          "children": [
            {
              "type": "output",
              "statement": "Enhancing the capabilities and skills ",
              "indicator": "Enhancing the capabilities and skills ",
              "date": "01/04/2024",
              "Baseline": "0",
              "Target": "3%",
              "Actual": "5%",
              "varianceRate": "5%",
              "id": "output1",
              "children": [
                {
                  "type": "activity",
                  "statement": "N/A",
                  "indicator": "N/A",
                  "date": "N/A",
                  "Baseline": "N/A",
                  "Target": "N/A",
                  "Actual": "N/A",
                  "varianceRate": "N/A",
                  "id": "activity1"
                },
                {
                  "type": "activity",
                  "statement": "N/A",
                  "indicator": "N/A",
                  "date": "N/A",
                  "Baseline": "N/A",
                  "Target": "N/A",
                  "Actual": "N/A",
                  "varianceRate": "N/A",
                  "id": "activity2"
                }
              ]
            }
            // ...other outputs
          ]
        }
        // ...other results
      ]
    }
    // ...other goals
  ]
  const frameworkData = {
    overallObjective: "Contributing to improving the living conditions and income of young people",
    outcomes: [
      {
        title: "Enhancing the capabilities and skills of young...",
        outputs: ["Practical exercises", "Practical exercises", /* ... more outputs ... */],
      },
      {
        title: "Increasing the number of new and sustainable...",
        outputs: ["Practical exercises", /* ... more outputs ... */],
      },
      // ... other outcomes ...
    ],
  };


  return (
    <div>
      <LogicalFrameworkTree
        overallObjective="Contributing to improving the living conditions and income of young people"
        outcomes={[
          "Enhancing the capabilities and skills of young...",
          "Increasing the number of new and sustainable...",
        ]}
        exercises={[
          "Practical exercises",
          "Practical exercises",
          "Practical exercises",
          "Practical exercises",
          "Practical exercises",
          "Qualification of trainers",
        ]}
      />
      <LogicalFrameworkTable data={dataFromJSON} />
      <ActualValueTable data={dataFromJSONActual} />
      {/* <TestAlert /> */}
    </div>
  )
}

export default LogicalFramework