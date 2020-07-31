import React, { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import ServiceList from '../service/ServiceList'
import ServiveForm from '../service/ServiceForm'
import Alert from '../layout/Alert'
const servicesInitial = localStorage.getItem('services')
  ? JSON.parse(localStorage.getItem('services'))
  : []

let newPrice = 0
const Services = ({ city }) => {
  //*******    state valuees  *******//
  //all services, add services
  const [services, setServive] = React.useState(servicesInitial)
  // single type of service
  const [typeOfService, setTypeOfService] = React.useState('')
  // single size
  const [size, setSize] = React.useState('')
  //single price
  const [price, setPrice] = React.useState('')
  // alert
  const [alert, setAlert] = React.useState({ show: false })
  //   edit
  const [edit, setEdit] = React.useState(false)
  //   edit item
  const [id, setId] = React.useState(0)
  //*******   useEfect   *******//
  useEffect(() => {
    localStorage.setItem('services', JSON.stringify(services))
  })

  //*******    functionality   *******//
  //  handle type of service
  const handleTypeOfService = (e) => {
    setTypeOfService(e.target.value)
  }
  //   handle size
  const handleSize = (e) => {
    setSize(e.target.value)
  }
  //   handle price
  const handlePrice = (e) => {
    setPrice(e.target.value)
    setPrice(price)
  }
  //   handle Alert
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text })
    setTimeout(() => {
      setAlert({ show: false })
    }, 3000)
  }
  //   handle submit
  const handleSubmit = (e) => {
    e.preventDefault()

    if (typeOfService !== '' && size > 0) {
      switch (typeOfService) {
        case 'Fönsterputs':
          newPrice = 300
          break
        case 'Balkongstädning':
          newPrice = 150
          break
        case 'Bortforsling av skräp':
          newPrice = 400
          break
        case 'Städning':
          newPrice = 65
          break
        default:
          break
      }
      if (edit) {
        let tempService = services.map((item) => {
          return item.id === id
            ? { ...item, typeOfService, size, price: size * newPrice }
            : item
        })
        setServive(tempService)
        handleAlert({ type: 'success', text: ' Services Updeted!' })

        setEdit(false)
      } else {
        const singleServive = {
          id: uuidv4(),
          typeOfService,
          size,
          price: size * newPrice,
        }
        setServive([...services, singleServive])
        handleAlert({ type: 'success', text: 'Service Added.' })
      }
    } else {
      handleAlert({ type: 'danger', text: 'Please choice a service and size' })
    }
    setTypeOfService('')
    setSize('')
  }
  //  clear all services
  const handelClearServices = () => {
    setServive([])
    handleAlert({ type: 'danger', text: 'All Services Deleted!' })
  }
  // delete a srvice
  const handelDeleteService = (id) => {
    console.log(`DELETE id: ${id}`)
    let tempServices = services.filter((item) => {
      return item.id !== id
    })
    setServive(tempServices)
    handleAlert({ type: 'danger', text: 'Service Deleted!' })
  }

  //  updadte a service
  const handelUpdateService = (id) => {
    let service = services.find((item) => item.id === id)
    let { typeOfService, size, price } = service
    setTypeOfService(typeOfService)
    setSize(size)

    setPrice(price)
    console.log(`PRICE UPDATE: ${price}`)
    console.log(price)

    setEdit(true)
    setId(id)
  }
  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}

      <main className='App'>
        <ServiveForm
          typeOfService={typeOfService}
          size={size}
          price={price}
          handleTypeOfService={handleTypeOfService}
          handleSize={handleSize}
          handlePrice={handlePrice}
          handleSubmit={handleSubmit}
          city={city}
          edit={edit}
        />
        <ServiceList
          services={services}
          handelClearServices={handelClearServices}
          handelDeleteService={handelDeleteService}
          handelUpdateService={handelUpdateService}
        />
        <h4 className='total  '>
          total:{' '}
          <span>
            {services.reduce((acc, curr) => {
              return (acc = acc + parseInt(curr.price))
            }, 0)}
          </span>{' '}
          kr
        </h4>
      </main>
    </>
  )
}

export default Services
