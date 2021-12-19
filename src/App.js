import { useState } from 'react'

import Sidebar from './components/Sidebar'
import ShoeForm from './components/ShoeForm'

import shoeImg from './assets/shoe.png'
import factoryImg from './assets/factory.png'

import './style.css'

const InfoField = ({ title, value }) => {
  return (
    <div className="info-field">
      <h3 class="title">{title}</h3>
      <span class="value">{value}</span>
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
  holidaysRun: 0, // 0 = no; 1 = yes; 2 = it depends
  runLocation: 0 // 0 = asphalt; 1 = forest and field; 2 = mixed
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues)

  console.log(formValues)

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
                  { title: 'Yearly distance', value: '10290 km' },
                  { title: 'Recommended number of', value: '4 pair(s) per year' },
                  { title: 'Matching subscription', value: 'Run Extreme' }
                ]}
              />
            </div>

            <div className="info-item">
              <img src={factoryImg} alt="Factory" />

              <div className="info-field-list">
                <InfoFieldList 
                  fields={[{ title: 'CO2 footprint', value: '112kg' }]}
                />

                <p className="message">...We reduce it!</p>
              </div>
            </div>

          </div>
        </div>


      </section>
    </div>
  );
}

export default App;
