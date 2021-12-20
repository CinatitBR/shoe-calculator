import { useState, useEffect } from 'react'

import Sidebar from './components/Sidebar'
import ShoeForm from './components/ShoeForm'

import shoeSvg from './assets/shoe.svg'
import industrySvg from './assets/industry.svg'
// import shoeImg from './assets/shoe.png'
// import factoryImg from './assets/factory.png'

import './style.css'


const getSurvivalTime = (trailType) => {
  switch (trailType) {
    case 0: // Asphalt
      return 600
    case 1: // Foresnt and field
      return 1000
    default: // Mixed
      return 800
  }
}

const getWeeks = (holidayRun) => {
  switch (holidayRun) {
    case 0: // No
      return 52 - 6
    case 1: // Yes
      return 52
    default: // It depends
      return 52 - 3
  }
}

const getNumberOfShoes = ({ yearlyDistance, survivalTime }) => {
  return Math.round(Math.min(Math.max(1, yearlyDistance / survivalTime), 4))
}

const getSubscription = (numberOfShoes) => {
  switch (numberOfShoes) {
    case 1: 
      return {subscription: 'Run Easy', subscriptionLink: '#runeasy'}
    case 2:
      return {subscription: 'Run Pro', subscriptionLink: '#runpro'}
    case 3: 
      return {subscription: 'Run Ultra', subscriptionLink: '#runultra'}
    default: 
      return {subscription: 'Run Extreme', subscriptionLink: '#runextreme'}
  }
}

const InfoField = ({ title, value }) => {
  return (
    <div className="info-field">
      <h3 className="title">{title}</h3>
      <span className="value">{value}</span>
    </div>
  )
}

const InfoFieldList = ({ fields }) => {
  return (
    fields.map((field, index) => (
      <InfoField 
        key={index} 
        title={field.title} 
        value={field.value} 
      />
    ))
  )
}

const initialFormValues = {
  daysWeek: 1,
  distance: 1,
  holidayRun: 0, // 0 = no; 1 = yes; 2 = it depends
  trailType: 0 // 0 = asphalt; 1 = forest and field; 2 = mixed
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [shoeInfo, setShoeInfo] = useState({
    yearlyDistance: null,
    numberOfShoes: null,
    subscription: null,
    subscriptionLink: null,
    co2: null,
    shoeUnit: null
  })

  // Calculate shoeInfo values
  useEffect(() => {
    const survivalTime = getSurvivalTime(formValues.trailType)
    const weeks = getWeeks(formValues.holidayRun)
    const yearlyDistance = formValues.daysWeek * weeks * formValues.distance
    const numberOfShoes = getNumberOfShoes({ yearlyDistance, survivalTime })
    const { subscription, subscriptionLink} = getSubscription(numberOfShoes)

    const shoeUnit = 'pair(s)'
    const co2 = numberOfShoes * 28 // Kg

    setShoeInfo({  
      yearlyDistance,
      numberOfShoes,
      subscription,
      subscriptionLink,
      co2,
      shoeUnit
    })

  }, [formValues])

  return (
    <div className="app-wrapper">
      <Sidebar>
        <ShoeForm values={formValues} onChange={setFormValues} />
      </Sidebar>

      <section className="content-wrapper">

        <div className="info-wrapper">
          <h1>Running shoe calculator</h1>

          <div className="info-item-list">

            <div className="info-item">
              <div className="imageWrapper">
                <img src={shoeSvg} alt="Shoe" />
              </div>

              <InfoFieldList 
                fields={[
                  { 
                    title: 'Yearly distance', 
                    value: `${shoeInfo.yearlyDistance} km`
                  },
                  { 
                    title: 'Recommended number of', 
                    value: `${shoeInfo.numberOfShoes} ${shoeInfo.shoeUnit} per year`
                  },
                  {
                    title: 'Matching subscription', 
                    value: `${shoeInfo.subscription}` 
                  }
                ]}
              />
            </div>

            <div className="info-item">
              <div className="imageWrapper">
                <img src={industrySvg} alt="Factory" />
              </div>

              <div className="info-field-list">
                <InfoFieldList 
                  fields={[{ 
                    title: 'CO2 footprint', 
                    value: `${shoeInfo.co2} kg` 
                  }]}
                />

                <p className="message">...We reduce it!</p>
                <a className="subscribe-link" href={shoeInfo.subscriptionLink}>Subscribe</a>
              </div>
            </div>

          </div>
        </div>

      </section>
    </div>
  );
}

export default App;