import React from 'react'

export const Small = React.memo(({ value }) => {

    console.log(':D');

    return (
        <small>
            { value }
        </small>
    )
})
