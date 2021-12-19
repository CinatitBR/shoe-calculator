import style from './style.module.css'

const InputRange = ({ label, name, min, max, value, onChange }) => {
  return (
    <label className={style.wrapper}>
      {label}

      <input 
        type="range" 
        min={min} 
        max={max}
        name={name}
        value={value} 
        onChange={onChange}
      />
    </label>
  )
}

export default InputRange