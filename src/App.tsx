import "./App.css";
import Header from "./components/Header";
import PatientForm from "./components/PatientForm";
import PatientsTable from "./components/PatientsTable";
import { useLocalStorage } from "@rehooks/local-storage";

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
    startDate: new Date(),
    endDate: endDate,
  },
  {
    name: "Jane Doe",
    age: 18,
    address: "Cavite",
    disease: "covid-19",
    startDate: new Date(),
    endDate: endDate,
  },
];

export interface IPatients {
  patients: {
    name: string;
    age: number;
    address: string;
    disease: string;
    startDate: Date;
    endDate: Date;
  }[];
}

function App() {
  const [patients, setPatients] = useLocalStorage("patientsKey", patientsList);

  return (
    <main>
      <Header />
      <PatientsTable patients={patients} />
      <PatientForm patients={patients} setPatients={setPatients} />
    </main>
  );
}

export default App;
