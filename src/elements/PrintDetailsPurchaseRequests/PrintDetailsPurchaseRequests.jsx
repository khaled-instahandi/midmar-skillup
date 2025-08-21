import React from 'react'
import Dropdown from '../Dropdown/Dropdown'
import Button from '../Buttons/Button'
import printerIcon from '../../../../images/printer-icon.svg'
function PrintDetailsPurchaseRequests() {
    return (
        <div className='select-state budget-table-pur '>
            <h2>Print</h2>
            <div className="select-state-content">
                <Button Icon={printerIcon} iconPosition={'right'} width={'50%'} type="submit" label="Click here to print" className={'button-edit-project '} height={'3rem'} />
            </div>
        </div>
    )
}

export default PrintDetailsPurchaseRequests