import React from 'react'
import './Policies.css'
const policies = [
  {
    id: 1,
    title: "Personal information",
    content: `He needs a big smile. Mauris flatters the elit, needs the tincidunt nibh pulvinar a. 
    Everyone wants to except, the price as a lacinia in the element for that. It's a wise mass, 
    the valley is not even from the kids, it's only necessary. To-morrow the gate was said to be 
    small but large. Curabitur is not the best time for the players who have read the book. The 
    building and the yard is more important than the vehicle element but it is important to the 
    owner. Until then, I need to do my homework. Until then, I need to do my homework. Children 
    enter the very door of the clinic. The classroom is more than that, so it's an element of that. 
    It is a wise mass, the valley is not full of people`
  },
  {
    id: 2,
    title: "Collecting personal information",
    content: `He needs a big smile. Mauris flatters the elit, needs the tincidunt nibh pulvinar a. 
    Everyone wants to except, the price as a lacinia in the element for that. It's a wise mass, 
    the valley is not even from the kids, it's only necessary. To-morrow the gate was said to be 
    small but large. Curabitur is not the best time for the players who have read the book. The 
    building and the yard is more important than the vehicle element but it is important to the owner.`
  },
  {
    id:3,
    title:"Using and disclosing your personal information"
    ,content:`  a. Everyone wants to except, the price as a lacinia in the element for that. It's a wise mass,
     t he valley is not even from the kids, it's only necessary. To-morrow the gate was said to be small but large.
      Curabitur is not the best time for the players who have read the book. The building and the yard is more
       important than the vehicle element but it is important to the `
  } 
  // ... Add more sections as needed
];

function Policies() {
  return (

    <div className="policies-container">
      <h1>Policies and procedures</h1>
      {policies.map(policy => (
        <div key={policy.id} className="policy-section">
          <h2>{policy.id}. {policy.title}:</h2>
          <p>{policy.content}</p>
        </div>
      ))}
    </div>
  )
}

export default Policies