import InputRange from '../InputRange'
import InputRadio from '../InputRadio'

import './style.css'

const ShoeForm = ({ values, onChange }) => {
  
  // Handle input value change
  const handleChange = (e) => {
    const { value, name } = e.target

    // Update input value
    onChange({ 
      ...values, 
      [name]: parseInt(value) 
    })
  }

  return (
    <div className="shoeForm">
      <div className="field-list">
        <InputRange 
          label="How many days per week do you run approximately?"
          min="1" 
          max="7" 
          name="daysWeek"
          value={values.daysWeek} 
          onChange={handleChange}
        />

        <InputRange 
          label="What is your typical distance?"
          min="1" 
          max="30" 
          name="distance"
          value={values.distance} 
          onChange={handleChange}
        />

        <div className="field">
          Do you run during holidays?

          <div className="input-group">
            <InputRadio 
              label="Yes"
              name="holidayRun" 
              value={1}
              defaultChecked={values.holidayRun === 1}
              onChange={handleChange}
            />

            <InputRadio 
              label="No"
              name="holidayRun" 
              value={0}
              defaultChecked={values.holidayRun === 0}
              onChange={handleChange}
            />

            <InputRadio 
              label="It depends"
              type="radio" 
              name="holidayRun" 
              value={2}
              defaultChecked={values.holidayRun === 2}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="field">
          Where do you run typically?

          <div className="input-group">
            <InputRadio
              label="Asphalt"
              type="radio" 
              name="trailType" 
              value={0} 
              defaultChecked={values.trailType === 0}
              onChange={handleChange}
            />

            <InputRadio
              label="Forest and field"
              type="radio" 
              name="trailType" 
              value={1}
              onChange={handleChange}
            />

            <InputRadio
              label="Mixed"
              type="radio" 
              name="trailType" 
              value={2}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShoeForm