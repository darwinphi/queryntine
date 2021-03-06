import { useState } from "react";
import { IPatients as Props, endDate } from "../App";

interface IProps {
  patients: Props["patients"];
  setPatients: (
    newValue:
      | {
          name: string;
          age: number;
          address: string;
          disease: string;
          startDate: Date;
          endDate: Date;
        }[]
      | null
  ) => void;
}

const PatientForm = ({ patients, setPatients }: IProps) => {
  const [patient, setPatient] = useState({
    name: "",
    age: "",
    address: "",
    disease: "",
  });
  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ): void => {
    setPatient({
      ...patient,
      [event.target.name]: event.target.value,
    });
  };

  const handleSave = (): void => {
    if (!patient.name || !patient.age || !patient.address || !patient.disease) {
      return;
    }

    setPatients([
      ...patients,
      {
        name: patient.name,
        age: parseInt(patient.age),
        address: patient.address,
        disease: patient.disease,
        startDate: new Date(),
        endDate: endDate,
      },
    ]);

    setPatient({
      name: "",
      age: "",
      address: "",
      disease: "",
    });
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h2>Add a Patient</h2>
      <label>Name</label>
      <input
        type="text"
        onChange={handleChange}
        name="name"
        value={patient.name}
        required
      ></input>
      <label>Age</label>
      <input
        type="number"
        onChange={handleChange}
        name="age"
        value={patient.age}
        required
      ></input>
      <label>Address</label>
      <textarea
        name="address"
        onChange={handleChange}
        value={patient.address}
        required
      ></textarea>
      <label>Disease</label>
      <select onChange={handleChange} name="disease" required>
        <option value="">Choose an option --</option>
        <option value="covid-19">Covid-19</option>
        <option value="sars">SARS</option>
        <option value="mers">MERS</option>
      </select>
      <button type="submit" onClick={handleSave}>
        Save
      </button>
    </form>
  );
};

export default PatientForm;
