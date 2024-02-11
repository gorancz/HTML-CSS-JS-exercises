let Animal = {
    name: "",
    kind: "",
    speak: function(message) {
      console.log(`${this.name} ${this.kind} says: ${message}`);
    }
  };
  
  const animalName = prompt("Enter the animal's name:");
  const animalKind = prompt("Enter the animal's kind:");
  
  const myAnimal = Object.create(Animal);
  myAnimal.name = animalName;
  myAnimal.kind = animalKind;
  
  myAnimal.speak("Hey bro!!!");