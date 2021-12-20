import style from './style.module.css'

const InputRadio = ({ label, name, value, defaultChecked, onChange }) => {
  return (
    <label 
      className={style.wrapper}
    >
      <input 
        type="radio" 
        name={name} 
        value={value} 
        defaultChecked={defaultChecked}
        onChange={onChange}
      />
      <span className={style.checkmark}></span>

      {label}
    </label>
  )
}

export default InputRadio