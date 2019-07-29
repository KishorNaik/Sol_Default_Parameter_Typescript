function onDisplay(firstName: string, lastName: string, age: number = 0) {
  console.log(`${firstName} ${lastName} ${age}`);
}

onDisplay("Kishor", "Naik", 34);
onDisplay("Kishor", "Naik");
