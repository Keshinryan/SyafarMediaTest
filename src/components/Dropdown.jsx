/* eslint-disable react/prop-types */
const Dropdown = ({ id, name, value, options, onChange, dropdownOpen, setDropdownOpen, label, placeholder }) => (
    <div className="mb-3">
        <label htmlFor={id}>{label}</label>
        <div className="mt-2" style={{ position: 'relative' }}>
            <select
                id={id}
                name={name}
                className="form-control"
                value={value}
                onChange={onChange}
                onClick={() => setDropdownOpen(!dropdownOpen)}  
                required
            >
                <option value="" disabled>{placeholder}</option>  
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.value}
                    </option>
                ))}
            </select>
            <i className={`icon fa ${dropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
        </div>
    </div>
);

export default Dropdown;
