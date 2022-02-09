import { IPatients } from "../App";
import Status from "./Status";

const PatientsTable = ({ patients }: IPatients) => {
  const renderPatientsList = () => {
    return patients.map((patient, i) => {
      return (
        <tr key={i}>
          <td>{patient.name}</td>
          <td>{patient.age}</td>
          <td>{patient.address}</td>
          <td>{patient.disease}</td>
          <td>{new Date(patient.startDate).toDateString()}</td>
          <td>{new Date(patient.endDate).toDateString()}</td>
          <td>
            <Status startDate={patient.startDate} endDate={patient.endDate} />
          </td>
        </tr>
      );
    });
  };

  return (
    <section className="patients">
      <h2>List of Patients</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Disease</th>
            <th>Start</th>
            <th>End</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{renderPatientsList()}</tbody>
      </table>
    </section>
  );
};

export default PatientsTable;
