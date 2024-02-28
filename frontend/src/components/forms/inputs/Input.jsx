import PropTypes from "prop-types"

function Input ({label, name, value, onChange, placeholder}) {
    return ( 
        <label>
            {label}
            <input name={name} value={value} onChange={onChange} placeholder={placeholder} />
        </label>
     );
}

Input.propTypes = {
    lavel: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func
}

export default Input ;