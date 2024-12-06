import React from 'react'
import { Textarea } from "@/components/ui/textarea"

const AdditionalReq = ({additionalReq}) => {
    return (
        <div className='mt-5'>
            <label className='text-gray-400'>Enter Additional Requirements (Optional)</label>
            <Textarea className='mt-3'  onChange={(e)=>additionalReq(e.target.value)}/>

        </div>
    )
}

export default AdditionalReq
