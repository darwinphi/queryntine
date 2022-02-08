import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import PatientForm from "./components/PatientForm";
import PatientsList from "./components/PatientsList";

const daysQuarantine = 14;
export const endDate = new Date(
  Date.now() + daysQuarantine * 24 * 60 * 60 * 1000
);

const patientsList = [
  {
    name: "John Doe",
    age: 22,
    address: "Manila",
    disease: "covid-19",
    dateStarted: new Date(),
    dateEnded: endDate,
  },
  {
    name: "Jane Doe",
    age: 18,
    address: "Cavite",
    disease: "covid-19",
    dateStarted: new Date(),
    dateEnded: endDate,
  },
];

export interface IPatients {
  patients: {
    name: string;
    age: number;
    address: string;
    disease: string;
    dateStarted: Date;
    dateEnded: Date;
  }[];
}

function App() {
  const [patients, setPatients] = useState<IPatients["patients"]>(patientsList);

  patients.map((patient) => console.log(patient.name));

  return (
    <main>
      <Header />
      <PatientsList patients={patients} />
      <PatientForm patients={patients} setPatients={setPatients} />
    </main>
  );
}

export default App;
