import { useState } from "react";
import { CardContainer, Card } from "../UI/Card.jsx";
import "./Students.scss";

function Students() {
  //Initialisation
  const newStudent = {
    UserFirstname: "Sholeh",
    UserLastname: "ABBAS",
    UserEmail: "K2955214@kingston.ac.uk",
    UserRegistered: 0,
    UserLevel: 4,
    UserYearID: 1,
    UserUsertypeID: 2,
    UserImageURL:
      "https://images.generated.photos/evdpMs0ZUOoMA0ACfCy98zzmy347YQxRmrPCWHp3v0g/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzUzMTEyLmpwZw.jpg",
    UserUsertypeName: "Student",
    UserYearName: "2022-23",
  };
  const loggedInUserGroup = 14;
  const apiURL = `http://softwarehub.uk/unibase/api`;
  const myGroupEndpoint = `${apiURL}/users/groups/${loggedInUserGroup}`;

  //State
  const [students, setStudents] = useState(null);

    const apiGet = async (endpoint) => {
    const response = await fetch(endpoint);
    const result = await response.json();
    setStudents(result);
  };

  apiGet(myGroupEndpoint);
  //Handlers
  const handleAdd = (student) => {
    student.userID = Math.floor(10000 * Math.random());
    setStudents([...students, newStudent]);
    console.log(`Length of students: ${students.length}`);
  };
  //View

  return (
    <>
      <h1>Students</h1>

      {!students ? (
        <p>Loading Records...</p>
      ) : (
        <>
          <CardContainer>
            {students.map((student) => {
              return (
                <div className="studentCard" key={student.UserEmail}>
                  <Card>
                    <p>{student.UserEmail.substring(0, 8)}</p>
                    <p>{`${student.UserFirstname} ${student.UserLastname}`}</p>
                    <img src={student.UserImageURL} />
                  </Card>
                </div>
              );
            })}
          </CardContainer>
          <button onClick={() => handleAdd(newStudent)}>Add Student</button>
        </>
      )}
    </>
  );
}

export default Students;
