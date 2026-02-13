import React from "react";
import "./App.css";
import { Person, Student, Teacher } from "./Person";

function App() {

  // Creating Objects (Polymorphism)
  const people = [
    new Person("John Smith", 40),
    new Student("Alice Johnson", 20, "Computer Science"),
    new Teacher("Dr. James Wilson", 45, "Mathematics")
  ];

  return (
    <div className="container">
      <h1>Person Class Hierarchy</h1>

      <div className="card-container">
        {people.map((person, index) => {

          let role = "Person";
          let extra = "";

          if (person instanceof Student) {
            role = "Student";
            extra = `Course: ${person.course}`;
          }
          else if (person instanceof Teacher) {
            role = "Teacher";
            extra = `Teaching: ${person.subject}`;
          }

          return (
            <div className="card" key={index}>
              <h2>
                {person.name} <span className="role">({role})</span>
              </h2>

              <p><b>Age:</b> {person.age}</p>

              <p className="intro">
                {person.introduce()}
              </p>

              {extra && <p><b>{extra}</b></p>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
