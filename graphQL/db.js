export const people = [
  {
    id: 1,
    name: "Nicolas",
    age: 18,
    gender: "female",
  },
  {
    id: 2,
    name: "Jini",
    age: 36,
    gender: "male",
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === id);
  return filteredPeople[0];
};
