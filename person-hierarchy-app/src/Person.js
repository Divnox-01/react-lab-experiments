// Base Class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Student Class (Inheritance)
class Student extends Person {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }

  // Method Overriding
  getDetails() {
    return `Student Name: ${this.name}, Course: ${this.course}`;
  }
}

// Teacher Class (Inheritance)
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  // Method Overriding
  getDetails() {
    return `Teacher Name: ${this.name}, Subject: ${this.subject}`;
  }
}

// Export Classes
export { Person, Student, Teacher };
