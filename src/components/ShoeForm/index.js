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
        <label className="field">
          How many days per week do you run approximately?

          <input 
            type="range" 
            min="1" 
            max="7" 
            name="daysWeek"
            value={values.daysWeek} 
            onChange={handleChange}
          />
        </label>

        <label className="field">
          What is your typical distance?

          <input 
            type="range" 
            min="1" 
            max="30" 
            name="distance"
            value={values.distance} 
            onChange={handleChange}
          />
        </label>

        <div className="field">
          Do you run during holidays?

          <div className="input-group">
            <label className="radio-wrapper">
              <input 
                type="radio" 
                name="holidayRun" 
                value={1}
                defaultChecked={values.holidayRun === 1}
                onChange={handleChange}
              />
              Yes
            </label>

            <label className="radio-wrapper">
              <input 
                type="radio" 
                name="holidayRun" 
                value={0}
                defaultChecked={values.holidayRun === 0}
                onChange={handleChange}
              />
              No
            </label>

            <label className="radio-wrapper">
              <input 
                type="radio" 
                name="holidayRun" 
                value={2}
                defaultChecked={values.holidayRun === 2}
                onChange={handleChange}
              />
              It depends
            </label>
          </div>
        </div>

        <div className="field">
          Where do you run typically?

          <div className="input-group">
            <label className="radio-wrapper">
              <input 
                type="radio" 
                name="trailType" 
                value={0} 
                defaultChecked={values.trailType === 0}
                onChange={handleChange}
              />
              Asphalt
            </label>

            <label className="radio-wrapper">
              <input 
                type="radio" 
                name="trailType" 
                value={1}
                onChange={handleChange}
              />
              Forest and field
            </label>

            <label className="radio-wrapper">
              <input 
                type="radio" 
                name="trailType" 
                value={2}
                onChange={handleChange}
              />
              Mixed
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShoeForm