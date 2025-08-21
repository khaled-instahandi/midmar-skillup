import React from 'react'
import InstructorsAttendance from './InstructorsAttendance/InstructorsAttendance'
import InstructorsTable from './InstructorsTable'

function Instructors() {
    return (
        <>
            <InstructorsTable />
            <InstructorsAttendance />
        </>
    )
}

export default Instructors