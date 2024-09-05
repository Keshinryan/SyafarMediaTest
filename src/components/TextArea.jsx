/* eslint-disable react/prop-types */
const TextArea = ({ id, name, value, onChange, label, rows, disabled }) => (
    <div className="mb-3">
        <label htmlFor={id}>{label}</label>
        <textarea
            id={id}
            name={name}
            className="form-control mt-2"
            value={value}
            onChange={onChange}
            rows={rows}
            disabled={disabled}
        />
    </div>
);

export default TextArea;