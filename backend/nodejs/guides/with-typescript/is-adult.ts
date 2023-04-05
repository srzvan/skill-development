type User = {
  name: string;
  age: number;
};

const justine = {
  name: "Justine",
  age: 23,
};

function isAdult(user: User) {
  return user.age >= 18;
}

console.log(`Is Justine an adult? ${isAdult(justine) ? "Of course she is." : "Definitely not!"}`);
