// var balance = 30000;

// function withdraw() {
//   var amount = parseInt(prompt("Koliko novca želite da podignete?"));

//   if (isNaN(amount) || amount <= 0) {
//     alert(`Molimo vas unesite pozitivan broj.`);
//     return;
//   }

//   if (amount > balance) {
//     alert(`Nemate dovoljno novca na računu.`);
//     return;
//   }

//   balance = balance - amount;

//   alert(`Uspešno ste podigli ${amount} dinara. Vaše trenutno stanje je ${balance} dinara.`);
// }

// withdraw();


// var mesec = prompt("Unesite naziv meseca");
// var brojDana;

// switch (mesec.toLowerCase()) {
//   case "januar":
//   case "mart":
//   case "maj":
//   case "jul":
//   case "avgust":
//   case "oktobar":
//   case "decembar":
//     brojDana = 31;
//     break;
//   case "april":
//   case "jun":
//   case "septembar":
//   case "novembar":
//     brojDana = 30;
//     break;
//   case "februar":
//     var godina = parseInt(prompt("Unesite godinu"));
//     if ((godina % 4 == 0 && godina % 100 != 0) || godina % 400 == 0) {
//       brojDana = 29;
//     } else {
//       brojDana = 28;
//     }
//     break;
//   default:
//     brojDana = -1;
// }

// if (brojDana == -1) {
//   alert(`Niste uneli validan naziv meseca.`);
// } else {
//   alert(`Mesec ${mesec} ima ${brojDana} dana.`);
// }


