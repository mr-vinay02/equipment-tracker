import { useEffect, useState } from "react";
import "./App.css";
import EquipmentForm from "./components/EquipmentForm";
import EquipmentTable from "./components/EquipmentTable";
import * as api from "./services/api";

function App() {
  const [equipment, setEquipment] = useState([]);
  const [selected, setSelected] = useState(null);

  const loadData = async () => {
    const res = await api.getEquipment();
    setEquipment(res.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSubmit = async (data) => {
    if (selected) {
      await api.updateEquipment(selected.id, data);
    } else {
      await api.addEquipment(data);
    }
    setSelected(null);
    loadData();
  };

  const handleDelete = async (id) => {
    await api.deleteEquipment(id);
    loadData();
  };

  return (
    <div className="container">
      <h2>Equipment Tracker</h2>

      {/* FORM */}
      <EquipmentForm onSubmit={handleSubmit} selected={selected} />

      {/* TABLE */}
      <EquipmentTable
        equipment={equipment}
        onEdit={setSelected}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
