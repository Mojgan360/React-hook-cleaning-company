import React from 'react'
import { MdDelete, MdEdit } from 'react-icons/md'
const ServiceItem = ({
  services,
  handelDeleteService,
  handelUpdateService,
}) => {
  const { id, typeOfService, size, price } = services
  return (
    <>
      <li className='item'>
        <div className='info'>
          <span className='typOfServive'>{typeOfService}</span>
          <span className='size'>{size} kvm</span>
          <span className='amount'>{price} kr</span>
        </div>
        <div>
          <button
            onClick={() => handelUpdateService(id)}
            aria-label='edit button'
            className='edit-btn'
          >
            <MdEdit />
          </button>
          <button
            onClick={() => handelDeleteService(id)}
            aria-label='delete button'
            className='clear-btn'
          >
            <MdDelete />
          </button>
        </div>
      </li>
    </>
  )
}

export default ServiceItem
