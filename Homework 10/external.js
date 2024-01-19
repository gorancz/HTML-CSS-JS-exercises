function chineseZodiac(year) {
  
    const animals = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"];
    const formula = (year - 4) % 12;
    return animals[formula];
  }
  const birthYear = prompt("Enter a year:");
  const year = Number(birthYear);
  
  var zodiac = chineseZodiac(year);
  console.log(`You're a ${zodiac}`);