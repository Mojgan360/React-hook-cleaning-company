import React from 'react'
import ServiceItem from './ServiceItem'
import { MdDelete } from 'react-icons/md'

const ServiceList = ({
  services,
  handelClearServices,
  handelDeleteService,
  handelUpdateService,
}) => {
  return (
    <>
      <ul className='list'>
        {services.map((item) => {
          return (
            <ServiceItem
              handelDeleteService={handelDeleteService}
              handelUpdateService={handelUpdateService}
              key={item.id}
              services={item}
            />
          )
        })}
      </ul>
      {services.length > 0 && (
        <button onClick={handelClearServices} className='btn '>
          clear list <MdDelete />
        </button>
      )}
    </>
  )
}

export default ServiceList
