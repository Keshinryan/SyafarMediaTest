// eslint-disable-next-line react/prop-types
const TextInput = ({ id, name, value, onChange, label }) => (
    <div className="mb-3">
        <label htmlFor={id}>{label}</label>
        <input
            type="text"
            id={id}
            name={name}
            className="form-control mt-2"
            value={value}
            onChange={onChange}
            readOnly
        />
    </div>
);

export default TextInput;
