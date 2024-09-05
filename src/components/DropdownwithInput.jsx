/* eslint-disable react/prop-types */
const DropdownWithLabel = ({
    id,
    name,
    value,
    options,
    onChange,
    dropdownOpen,
    setDropdownOpen,
    label,
    label2,
    textValue
}) => (
    <div className='row'>
        <div className="col-6 mb-3">
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
                    <option value="" disabled>{label}</option>
                    {options.map((option) => (
                        <option key={option.value} value={JSON.stringify(option)}>
                            {option.value}
                        </option>
                    ))}
                </select>
                <i className={`icon fa ${dropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            </div>
        </div>

        <div className="col-6 mb-3">
            <label htmlFor={`${id}-text`}>{label2}</label>
            <input
                type="text"
                id={`${id}-text`}
                name={`${name}-text`}
                className="form-control mt-2"
                value={textValue}
                readOnly
            />
        </div>
    </div>
);

export default DropdownWithLabel;
