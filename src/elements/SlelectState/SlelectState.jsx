import React from 'react'
import Dropdown from '../Dropdown/Dropdown'
import Button from '../Buttons/Button'
import './SlelectState.css'
function SlelectState() {
    return (
        <div className='select-state '>
            <h2>State</h2>
            <div className="select-state-content">
                <Dropdown options={['1', '2']} value={'Pending'} width={'100%'} />
                <Button width={'35%'} type="submit" label="Update" className={'button-edit-project m-left-1'} height={'3rem'} />
            </div>
        </div>
    )
}

export default SlelectState