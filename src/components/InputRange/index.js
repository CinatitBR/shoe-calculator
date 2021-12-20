import { useEffect, useRef } from 'react'

import style from './style.module.css'

const InputRange = ({ label, name, min, max, value, unit, onChange }) => {
  const bubbleRef = useRef(null)

  // Update bubble position when input value changes
  useEffect(() => {
    const bubbleEle = bubbleRef.current

    if (bubbleEle) {
      const newValue = Number(((value - min) * 100) / (max - min))

      bubbleEle.style.left = `calc(${newValue}% + (${8 - newValue * 0.15}px))`
    }
  })

  return (
    <label className={style.wrapper}>
      {label}
      
      <div className={style.sliderWrapper}>
        <input 
          type="range" 
          min={min} 
          max={max}
          name={name}
          value={value} 
          onChange={onChange}
        />

        <div className={style.bubble} ref={bubbleRef}>
          {value} {unit}
        </div>
      </div>
    </label>
  )
}

export default InputRange