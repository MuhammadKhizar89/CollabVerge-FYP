import Test from '@/components/Test'
import { useTestHook } from '@/hooks/useTestHook';
import React from 'react'

function page() {
    const name = useTestHook();
    return (
        <div>
            <Test />
        </div>
    )
}

export default page