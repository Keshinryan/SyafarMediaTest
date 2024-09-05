/* eslint-disable react/prop-types */
const TextInputWithCheckbox = ({ id, name, value, placeholder, label, checkboxLabel, checkboxChecked, onCheckboxChange }) => (
    <div className="mb-3" style={{ position: 'relative' }}>
        {label && <label htmlFor={id}>{label}</label>}
        
        <div className="input-group mt-2">
            <input
                type="text"
                id={id}
                name={name}
                className="form-control"
                placeholder={placeholder}
                value={value}
                readOnly
            />
            <span className="input-group-text" id={`${id}-addon`}>1 Free Tour Leader</span>
        </div>
        
        {checkboxLabel && (
            <div className="checkbox-container" style={{ position: 'absolute', top: 0, right: 0 }}>
                <label>
                    <input
                        type="checkbox"
                        checked={checkboxChecked}
                        onChange={onCheckboxChange}
                    />
                    {checkboxLabel}
                </label>
            </div>
        )}
    </div>
);

export default TextInputWithCheckbox;