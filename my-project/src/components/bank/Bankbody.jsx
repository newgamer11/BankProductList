import React from 'react'
import Bankbodyitem from './Bankbodyitem'

const Bankbody = ({ arrays }) => {

    return (
        <div>
            {arrays.map(array =>
                <Bankbodyitem key={array.id} array={array} />
            )}
        </div>
    )
}

export default Bankbody