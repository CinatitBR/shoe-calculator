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
          label="An wie vielen Tagen in der Woche läufst du ungefähr?"
          min="1" 
          max="7" 
          name="daysWeek"
          value={values.daysWeek} 
          unit="Tage"
          onChange={handleChange}
        />

        <InputRange 
          label="Wie lang ist deine übliche Strecke?"
          min="1" 
          max="30" 
          name="distance"
          value={values.distance} 
          unit="km"
          onChange={handleChange}
        />

        <div className="field-group">
          <div className="field">
            Läufst du auch im Urlaub?

            <div className="input-group">
              <InputRadio 
                label="Ja"
                name="holidayRun" 
                value={1}
                defaultChecked={values.holidayRun === 1}
                onChange={handleChange}
              />

              <InputRadio 
                label="Nein"
                name="holidayRun" 
                value={0}
                defaultChecked={values.holidayRun === 0}
                onChange={handleChange}
              />

              <InputRadio 
                label="Mal so mal so"
                type="radio" 
                name="holidayRun" 
                value={2}
                defaultChecked={values.holidayRun === 2}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="field">
            Wo läufst du typischerweise?

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
                label="Wald und Feld"
                type="radio" 
                name="trailType" 
                value={1}
                onChange={handleChange}
              />

              <InputRadio
                label="Gemischt"
                type="radio" 
                name="trailType" 
                value={2}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ShoeForm