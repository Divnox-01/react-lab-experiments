import "./App.css";
import { Person, Student, Teacher } from "./Person";

function App() {

  // Creating Objects (Polymorphism)
  const people = [
    new Person("Rahul", 25),
    new Student("Amit", 20, "Computer Science"),
    new Teacher("Dr. Sharma", 45, "Mathematics")
  ];

  return (
    <div className="container">

      <h1>Person Class Hierarchy</h1>

      <div className="card-container">

        {people.map((person, index) => (
          <div key={index} className="card">

            <p>{person.getDetails()}</p>

            <p>
              Type:{" "}
              {person instanceof Student
                ? "Student"
                : person instanceof Teacher
                ? "Teacher"
                : "Person"}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}

export default App;
