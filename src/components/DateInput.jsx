
// eslint-disable-next-line react/prop-types
const DateInput = ({ id, name, value, onChange, label }) => (
    <div className="mb-3">
        <label htmlFor={id}>{label}</label>
        <input
            type="date"
            id={id}
            name={name}
            className="form-control"
            value={value}
            onChange={onChange}
            required
        />
    </div>
);

export default DateInput;
