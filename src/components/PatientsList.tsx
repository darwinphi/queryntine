import { IPatients } from "../App";

const PatientsList = ({ patients }: IPatients) => {
  const renderPatientsList = () => {
    return patients.map((patient, i) => {
      return (
        <li key={i}>
          {patient.name}, {patient.age} yrs old.
        </li>
      );
    });
  };
  return (
    <section className="patients">
      <h2>List of Patients</h2>
      <ul>{renderPatientsList()}</ul>
    </section>
  );
};

export default PatientsList;
