import React from 'react'

import './styles.css'

type Props = {
    children: string
    onPress: () => void
}

const IButton = ({ children, onPress }: Props) => {
    return (
        <button
            className='i-btn'
            onClick={onPress}
        >
            {children}
        </button>
    )
}

export default IButton