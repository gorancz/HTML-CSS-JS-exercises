function Subject (title, isElective, academy) {
    this.title = title || "---";
    this.isElective = isElective || true;
    this.academy = academy || null;
    this.numberOfClasses = 10;
    this.students = [];

    this.overrideClasses = function(number) {
      if (number >= 3) {
        this.numberOfClasses = number;
      } else {
        console.error("Number of classes can't be smaller than 3.");
      }
  }
}

function Student(firstName, lastName, age) {
  this.firstName = firstName || "---";
  this.lastName = lastName || "---";
  this.age = Number(age) || 0;
  this.completedSubjects = [];
  this.academy = null;
  this.currentSubject = null;

  this.startAcademy = function(academy) {
    this.academy = academy;
    academy.students.push(this);
  }

  this.startSubject = function(subject) {
    if (this.academy) {
      if(this.currentSubject) {
        this.completedSubjects.push(this.currentSubject);
      }
      this.currentSubject = subject;
      subject.students.push(this);
    } else {
      console.log('The student must be part of an academy to start a subject.');
    }
  }
}

function Academy(name, start, end) {
  this.name = name || "---";
  this.start = new Date(start) || new Date();
  this.end = new Date(end) || new Date();
  this.students = [];
  this.subjects = [];

  this.NumberOfClasses = function() {
    return this.subjects.length * 10;
  };

  this.PrintStudents = function() {
    this.students.forEach(function(student) {
      console.log(`${student.firstName} ${student.lastName}`);
    });
  };
  
  this.PrintSubjects = function() {
    this.subjects.forEach(function(subject) {
      console.log(subject.title);
    });
  };
}

function createAcademyAndStudents() {
  const academy1 = new Academy("SEDC", new Date("2024-01-01"), new Date("2024-12-31"));

  const subject1 = new Subject("JS Basic", false, academy1);
  const subject2 = new Subject("JS Advanced", true, academy1);

  academy1.subjects.push(subject1, subject2);

  const student1 = new Student("Pera", "Peric", 30);
  const student2 = new Student("Mika", "Mikic", 26);

  // academy1.students.push(student1, student2);

  student1.startAcademy(academy1);
  student2.startAcademy(academy1);

  student1.startSubject(subject1); 
  student2.startSubject(subject2);

  console.log(`Academy Name: ${academy1.name}`);
  console.log(`Start Date: ${academy1.start.toDateString()}`);
  console.log(`End Date: ${academy1.end.toDateString()}`);
  console.log(`Number of Classes ${academy1.NumberOfClasses()}`);

  academy1.PrintStudents();
  academy1.PrintSubjects();
}

createAcademyAndStudents();



