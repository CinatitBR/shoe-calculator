import { useState, useEffect } from 'react'

import Sidebar from './components/Sidebar'
import ShoeForm from './components/ShoeForm'

import shoeImg from './assets/shoe.png'
import factoryImg from './assets/factory.png'

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
  return Math.min(Math.max(1, yearlyDistance / survivalTime), 4)
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
  daysWeek: 0,
  distance: 0,
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
              <img src={shoeImg} alt="Shoe" />

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
              <img src={factoryImg} alt="Factory" />

              <div className="info-field-list">
                <InfoFieldList 
                  fields={[{ 
                    title: 'CO2 footprint', 
                    value: `${shoeInfo.co2} kg` 
                  }]}
                />

                <p className="message">...We reduce it!</p>
                <a href={shoeInfo.subscriptionLink}>Subscribe</a>
              </div>
            </div>

          </div>
        </div>


      </section>
    </div>
  );
}

export default App;

// Calculations
// if trailtype == 'asphalt':
// survivaltime = 600
// elif trailtype == 'forest and field':
// survivaltime = 1000
// else:
// survivaltime = 800

// if holiday == 'yes':
// weeks = 52
// elif holiday == 'no':
// weeks = 52-6
// else:
// weeks = 52-3

// yearlydistance = days*distance*weeks
// numberofshoes = min(max(1, int(yearlydistance / survivaltime)), 4)

// unit_shoe = 'pair(s)'

// if numberofshoes == 1:
// subscription = 'Run Easy'
// subscriptionlink = '#runeasy'
// elif numberofshoes == 2:
// subscription = 'Run Pro'
// subscriptionlink = '#runpro'
// elif numberofshoes == 3:
// subscription = 'Run Ultra'
// subscriptionlink = '#runultra'
// else:
// subscription = 'Run Extreme'
// subscriptionlink = '#runextreme'

// co2 = numberofshoes * 28 # kg

// # Left side
// col1.metric(label='Yearly distance', value=str(yearlydistance)+' km')
// col1.metric(label='Recommended number of ', value=str(numberofshoes)+' ' + unit_shoe + ' per year')
// col1.metric(label='Matching subscription', value=subscription)


// # Right side
// col2.metric(label='CO2 footprint', value=str(co2)+' kg')
// col2.markdown('<p style="color:#1ba640; font-weight:bold">...we reduce it!</p>', unsafe_allow_html=True)
// col2.markdown('[Subscribe]('+subscriptionlink+')')
