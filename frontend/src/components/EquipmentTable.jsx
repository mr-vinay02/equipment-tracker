export default function EquipmentTable({ equipment, onEdit, onDelete }) {
    return (
        <table border="1">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Last Cleaned</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {equipment.map(e => (
                    <tr key={e.id}>
                        <td>{e.name}</td>
                        <td>{e.type}</td>
                        <td>{e.status}</td>
                        <td>{e.lastCleaned}</td>
                        <td>
                            <button className="action-btn edit-btn" onClick={() => onEdit(e)}>
                                Edit
                            </button>

                            <button className="action-btn delete-btn" onClick={() => onDelete(e.id)}>
                                Delete
                            </button>

                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
