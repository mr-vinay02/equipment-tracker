const express = require("express");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const router = express.Router();
const filePath = "./data/equipment.json";


const readData = () =>
    JSON.parse(fs.readFileSync(filePath, "utf-8"));

const writeData = (data) =>
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));


router.get("/", (req, res) => {
    res.json(readData());
});


router.post("/", (req, res) => {
    const equipment = { id: uuidv4(), ...req.body };
    const data = readData();
    data.push(equipment);
    writeData(data);
    res.status(201).json(equipment);
});


router.put("/:id", (req, res) => {
    const data = readData();
    const index = data.findIndex(e => e.id === req.params.id);

    if (index === -1) return res.status(404).json({ message: "Not found" });

    data[index] = { ...data[index], ...req.body };
    writeData(data);
    res.json(data[index]);
});


router.delete("/:id", (req, res) => {
    const data = readData().filter(e => e.id !== req.params.id);
    writeData(data);
    res.json({ message: "Deleted successfully" });
});

module.exports = router;
