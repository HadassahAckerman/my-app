import React, { useState } from 'react'
import DateView from './dateView'
import DateInput from './dateInput1'
export default function AppDate() {
    const [deadline, setDeadline] = useState("2024-01-01")
    return (
        <div className='container'>
            <DateView deadline={deadline} />
            <DateInput setDeadline={setDeadline} />
        </div>
    )
}
