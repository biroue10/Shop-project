import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Loader = () => {
    return (
        <FontAwesomeIcon icon={faSpinner} className="mx-auto container flex items-center text-blue-600  mt-24 w-24 h-24	" />
    )
}
