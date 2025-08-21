import React from "react";
import Tag from "../../elements/Tag/Tag";
import "./LogicalFrameworkTree.css";

const defaultData = {
  overallObjective: {
    title: "Contributing to improving the living",
    description: "conditions and income of young people",
  },
  outcomes: [
    {
      title: "Enhancing the capabilities",
      description: "and skills of young...",
    },
    {
      title: "Enhancing the capabilities",
      description: "and skills of young...",
    },
    {
      title: "Increasing the number of",
      description: "new and sustainable...",
    },
  ],
  outputs: [
    { title: "Practical", description: "exercises" },
    { title: "Practical", description: "exercises" },
    { title: "Practical", description: "exercises" },
    { title: "Practical", description: "exercises" },
    { title: "Practical", description: "exercises" },
    { title: "Practical", description: "exercises" },
    { title: "Practical", description: "exercises" },
    { title: "Practical", description: "exercises" },
    { title: "Practical", description: "exercises" },
  ],
};

export default function LogicalFrameworkTree({ data = defaultData }) {
  return (
    <div className="tree-frame-work">
      <h1 className="text-overall2">Logical framework tree</h1>
      <div className="tree-container">
        <div className="tree-level overall-objective">
          <CheckCircleIcon className="level-icon" />
          <h3 className="level-label">Overall Objective</h3>
          <div className="level-content">
            <Tag
              infoAdditional="Strategic objective"
              infoContent={`${data.overallObjective.title} ${data.overallObjective.description}`}
              widthContent="100%"
              heightContent="auto"
            />
          </div>
        </div>

        <div className="tree-level outcomes">
          <ClipboardIcon className="level-icon" />
          <h3 className="level-label">Outcomes</h3>
          <div className="level-content outcomes-container">
            {data.outcomes.map((outcome, index) => (
              <div key={index} className="outcome-item">
                <Tag
                  infoAdditional="Qualification of trainers"
                  infoContent={`${outcome.title} ${outcome.description}`}
                  widthContent="100%"
                  heightContent="auto"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="tree-level outputs">
          <LightbulbIcon className="level-icon" />
          <h3 className="level-label">Outputs</h3>
          <div className="level-content outputs-container">
            {data.outputs.map((output, index) => (
              <div key={index} className="output-item">
                <Tag
                  infoAdditional="Qualification of trainers"
                  infoContent={`${output.title} ${output.description}`}
                  widthContent="100%"
                  heightContent="auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckCircleIcon(props) {
  return (
    <svg
      {...props}
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle opacity="0.1" cx="16.5" cy="16.5" r="16.5" fill="#158B7F" />
      <path
        d="M23.0165 17.275L21.9998 16.2584C21.878 16.1508 21.7801 16.0188 21.7127 15.8709C21.6452 15.723 21.6096 15.5626 21.6082 15.4C21.6018 15.2102 21.6347 15.0212 21.705 14.8448C21.7753 14.6684 21.8814 14.5084 22.0165 14.375L23.0165 13.375C23.8832 12.5084 24.2082 11.675 23.9332 11.0167C23.6582 10.3584 22.8415 10.0084 21.6248 10.0084H12.9165V9.29169C12.9154 9.12626 12.8492 8.96793 12.7322 8.85095C12.6153 8.73398 12.4569 8.66778 12.2915 8.66669C12.1261 8.66778 11.9677 8.73398 11.8508 8.85095C11.7338 8.96793 11.6676 9.12626 11.6665 9.29169V24.7084C11.6676 24.8738 11.7338 25.0321 11.8508 25.1491C11.9677 25.2661 12.1261 25.3323 12.2915 25.3334C12.4569 25.3323 12.6153 25.2661 12.7322 25.1491C12.8492 25.0321 12.9154 24.8738 12.9165 24.7084V20.6417H21.6248C22.8248 20.6417 23.6332 20.275 23.9082 19.6167C24.1832 18.9584 23.8665 18.1334 23.0165 17.275Z"
        fill="#158B7F"
      />
    </svg>
  );
}

function ClipboardIcon(props) {
  return (
    <svg
      {...props}
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle opacity="0.1" cx="16.5" cy="16.5" r="16.5" fill="#FFC800" />
      <path
        d="M26.56 15.739L25.205 14.159C24.9216 13.7978 24.7574 13.3575 24.735 12.899V11.197C24.7329 10.6858 24.5289 10.1961 24.1674 9.83461C23.8059 9.47312 23.3162 9.26911 22.805 9.267H21.105C20.6468 9.24289 20.2071 9.07885 19.845 8.797L18.26 7.439C17.9025 7.15255 17.4581 6.99646 17 6.99646C16.5419 6.99646 16.0975 7.15255 15.74 7.439L14.17 8.809C13.8048 9.08374 13.3663 9.24385 12.91 9.269H11.18C10.6691 9.2711 10.1798 9.47484 9.81833 9.8359C9.45689 10.197 9.25265 10.6861 9.25001 11.197V12.907C9.22476 13.3602 9.06456 13.7955 8.79001 14.157L7.44001 15.749C7.15822 16.1047 7.00488 16.5452 7.00488 16.999C7.00488 17.4528 7.15822 17.8933 7.44001 18.249L8.79001 19.839C9.06456 20.2005 9.22476 20.6358 9.25001 21.089V22.797C9.25212 23.3082 9.45614 23.7979 9.81763 24.1594C10.1791 24.5209 10.6688 24.7249 11.18 24.727H12.905C13.3632 24.7511 13.803 24.9152 14.165 25.197L15.745 26.557C16.1025 26.8435 16.5469 26.9995 17.005 26.9995C17.4631 26.9995 17.9075 26.8435 18.265 26.557L19.845 25.197C20.2062 24.9136 20.6465 24.7494 21.105 24.727H22.805C23.3162 24.7249 23.8059 24.5209 24.1674 24.1594C24.5289 23.7979 24.7329 23.3082 24.735 22.797V21.097C24.7591 20.6388 24.9232 20.199 25.205 19.837L26.565 18.257C26.8479 17.8981 27.0013 17.4541 27.0004 16.9971C26.9995 16.5401 26.8443 16.0968 26.56 15.739ZM21.16 15.109L16.33 19.939C16.2605 20.0088 16.1779 20.0642 16.087 20.1019C15.996 20.1397 15.8985 20.1592 15.8 20.1592C15.7015 20.1592 15.604 20.1397 15.5131 20.1019C15.4221 20.0642 15.3395 20.0088 15.27 19.939L12.85 17.519C12.7268 17.3758 12.6622 17.1914 12.669 17.0026C12.6758 16.8139 12.7537 16.6346 12.8869 16.5007C13.0202 16.3668 13.199 16.2882 13.3878 16.2804C13.5765 16.2727 13.7612 16.3365 13.905 16.459L15.795 18.349L20.095 14.049C20.2372 13.9165 20.4252 13.8444 20.6195 13.8478C20.8138 13.8513 20.9992 13.93 21.1366 14.0674C21.274 14.2048 21.3528 14.3902 21.3562 14.5845C21.3596 14.7788 21.2875 14.9668 21.155 15.109H21.16Z"
        fill="#FFC800"
      />
    </svg>
  );
}

function LightbulbIcon(props) {
  return (
    <svg
      {...props}
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle opacity="0.1" cx="16.5" cy="16.5" r="16.5" fill="#AF52DE" />
      <path
        d="M20.4915 8.66663H13.5082C10.4748 8.66663 8.6665 10.475 8.6665 13.5083V20.4833C8.6665 23.525 10.4748 25.3333 13.5082 25.3333H20.4832C23.5165 25.3333 25.3248 23.525 25.3248 20.4916V13.5083C25.3332 10.475 23.5248 8.66663 20.4915 8.66663ZM14.0582 14.4833L16.5582 11.9833C16.6159 11.9267 16.6838 11.8815 16.7582 11.85C16.833 11.817 16.9139 11.8 16.9957 11.8C17.0774 11.8 17.1583 11.817 17.2332 11.85C17.3076 11.8815 17.3754 11.9267 17.4332 11.9833L19.9332 14.4833C20.0494 14.6009 20.1146 14.7596 20.1146 14.925C20.1146 15.0903 20.0494 15.249 19.9332 15.3666C19.8753 15.4248 19.8064 15.4709 19.7306 15.5024C19.6548 15.5339 19.5736 15.5501 19.4915 15.5501C19.4094 15.5501 19.3282 15.5339 19.2524 15.5024C19.1766 15.4709 19.1078 15.4248 19.0498 15.3666L17.6165 13.9333V19.0916C17.6165 19.2574 17.5507 19.4164 17.4334 19.5336C17.3162 19.6508 17.1573 19.7166 16.9915 19.7166C16.8257 19.7166 16.6668 19.6508 16.5496 19.5336C16.4324 19.4164 16.3665 19.2574 16.3665 19.0916V13.9333L14.9332 15.3666C14.8752 15.4241 14.8064 15.4695 14.7308 15.5004C14.6553 15.5313 14.5744 15.547 14.4927 15.5466C14.4111 15.5462 14.3303 15.5298 14.255 15.4982C14.1798 15.4666 14.1115 15.4205 14.054 15.3625C13.9966 15.3045 13.9511 15.2357 13.9202 15.1601C13.8893 15.0846 13.8736 15.0037 13.874 14.922C13.8744 14.8404 13.8909 14.7596 13.9225 14.6843C13.9541 14.6091 14.0002 14.5407 14.0582 14.4833ZM22.1998 21.35C20.523 21.908 18.7671 22.1922 16.9998 22.1916C15.2326 22.1922 13.4767 21.908 11.7998 21.35C11.6434 21.2963 11.5145 21.183 11.4411 21.0347C11.3678 20.8865 11.3559 20.7152 11.4082 20.5583C11.434 20.4803 11.4751 20.4082 11.529 20.3462C11.5829 20.2842 11.6486 20.2335 11.7222 20.1971C11.7958 20.1607 11.876 20.1392 11.958 20.134C12.04 20.1288 12.1222 20.1398 12.1998 20.1666C15.3193 21.2 18.6887 21.2 21.8082 20.1666C21.9651 20.1144 22.1363 20.1262 22.2846 20.1996C22.4328 20.2729 22.5461 20.4018 22.5998 20.5583C22.6494 20.7164 22.6354 20.8875 22.5607 21.0354C22.486 21.1832 22.3565 21.2961 22.1998 21.35Z"
        fill="#AF52DE"
      />
    </svg>
  );
}
