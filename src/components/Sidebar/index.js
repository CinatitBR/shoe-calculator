import './style.css'

const Sidebar = ({ children }) => {

  return (
    <section className="sidebar">
      {children}
    </section>
  )
}

export default Sidebar