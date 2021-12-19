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
        <label class="field">
          How many days per week do you run approximately?

          <input 
            type="range" 
            min="2" 
            max="7" 
            name="daysWeek"
            value={values.daysWeek} 
            onChange={handleChange}
          />
        </label>

        <label class="field">
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
            <label class="radio-wrapper">
              <input 
                type="radio" 
                name="holidaysRun" 
                value={1}
                defaultChecked={values.holidaysRun === 1}
                onChange={handleChange}
              />
              Yes
            </label>

            <label class="radio-wrapper">
              <input 
                type="radio" 
                name="holidaysRun" 
                value={0}
                defaultChecked={values.holidaysRun === 0}
                onChange={handleChange}
              />
              No
            </label>

            <label class="radio-wrapper">
              <input 
                type="radio" 
                name="holidaysRun" 
                value={2}
                defaultChecked={values.holidaysRun === 2}
                onChange={handleChange}
              />
              It depends
            </label>
          </div>
        </div>

        <div className="field">
          Where do you run typically?

          <div className="input-group">
            <label class="radio-wrapper">
              <input 
                type="radio" 
                name="runLocation" 
                value={0} 
                onChange={handleChange}
              />
              Asphalt
            </label>

            <label class="radio-wrapper">
              <input 
                type="radio" 
                name="runLocation" 
                value={1}
                onChange={handleChange}
              />
              Forest and field
            </label>

            <label class="radio-wrapper">
              <input 
                type="radio" 
                name="runLocation" 
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