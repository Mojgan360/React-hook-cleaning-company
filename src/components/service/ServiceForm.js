import React from 'react'
import { MdSend } from 'react-icons/md'

const ServiceForm = ({
  typeOfService,
  size,
  handleTypeOfService,
  handleSize,
  handleSubmit,
  city,
  edit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className='form-center'>
        <div className='form-group'>
          <label htmlFor='typeOfService'>Service</label>
          <select
            name='typeOfService'
            id='typeOfService'
            className='form-control'
            value={typeOfService}
            onChange={handleTypeOfService}
          >
            <option value='typeOfService'>Type Of Services:</option>
            <option className='btn' value='Städning'>
              Städning
            </option>
            <option className='btn' value='Fönsterputs'>
              Fönsterputs
            </option>
            <option value='Balkongstädning'>Balkongstädning</option>
            {city && (
              <option value='Bortforsling av skräp'>
                Bortforsling av skräp
              </option>
            )}{' '}
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor='size'>Size</label>
          <input
            className='form-control'
            type='number'
            id='size'
            name='size'
            placeholder='kvm'
            value={size}
            onChange={handleSize}
          ></input>
        </div>
      </div>
      <button type='submit' className='btn'>
        {edit ? 'Edit' : 'Submit'} <MdSend />
      </button>
    </form>
  )
}

export default ServiceForm
