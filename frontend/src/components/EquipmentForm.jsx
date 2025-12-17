import { useState, useEffect } from "react";

const initialState = {
    name: "",
    type: "",
    status: "",
    lastCleaned: ""
};

export default function EquipmentForm({ onSubmit, selected }) {
    const [form, setForm] = useState(initialState);

    
    useEffect(() => {
        if (selected) {
            setForm(selected);
        }
    }, [selected]);

    
    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }


    function handleSubmit(e) {
        e.preventDefault();

        if (form.name === "" || form.type === "" || form.status === "") {
            alert("All fields are required");
            return;
        }

        onSubmit(form);
        setForm(initialState); // clear form
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="name"
                placeholder="Equipment Name"
                value={form.name}
                onChange={handleChange}
            />

            <select name="type" value={form.type} onChange={handleChange}>
                <option value="">Select Type</option>
                <option>Machine</option>
                <option>Vessel</option>
                <option>Tank</option>
                <option>Mixer</option>
            </select>

            <select name="status" value={form.status} onChange={handleChange}>
                <option value="">Select Status</option>
                <option>Active</option>
                <option>Inactive</option>
                <option>Under Maintenance</option>
            </select>

            <input
                type="date"
                name="lastCleaned"
                value={form.lastCleaned}
                onChange={handleChange}
            />

            <button type="submit">
                {selected ? "Update Equipment" : "Add Equipment"}
            </button>
        </form>
    );
}
