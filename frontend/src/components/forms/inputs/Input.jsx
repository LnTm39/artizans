import PropTypes from 'prop-types'

function Input ({ label, name, value, onChange, placeholder, type, error }) {
  return (
    <>
      <label>
        {label}
        <input name={name} type={type} value={value} onChange={onChange} placeholder={placeholder} />
      </label>
      {
            error && (<p className='error'>{error}</p>)
        }
    </>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  type: PropTypes.string
}

export default Input
