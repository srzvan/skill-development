var justine = {
    name: "Justine",
    age: 23,
};
function isAdult(user) {
    return user.age >= 18;
}
console.log("Is Justine an adult? ".concat(isAdult(justine) ? "Of course she is." : "Definitely not!"));
