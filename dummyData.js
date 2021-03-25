module.exports = {
  spaceships: [
    {
      id: 1,
      name: "SS Anne",
      color: "blue",
      fleet: "I have lots of secrets in trashcans."
    },
    {
      id: 2,
      name: "SS Pokemon",
      color: "red",
      fleet: "Starters"
    },
    {
      id: 3,
      name: "SS Pikachu",
      color: "yellow",
      fleet: "I choose you."
    }
  ]
}

/*
Another way to export data
var spaceships = [
  {
    id: 1,
    name: "SS Anne",
    color: "blue",
    fleet: "I have lots of secrets in trashcans."
  },
  {
    id: 2,
    name: "SS Pokemon",
    color: "red",
    fleet: "Starters"
  },
  {
    id: 3,
    name: "SS Pikachu",
    color: "yellow",
    fleet: "I choose you."
  }
]

module.exports = {
  spaceships
}
*/

/*
Yet another way to export data
(but be careful of data types)
const spaceships = [
  {
    id: 1,
    name: "SS Anne",
    color: "blue",
    fleet: "I have lots of secrets in trashcans."
  },
  {
    id: 2,
    name: "SS Pokemon",
    color: "red",
    fleet: "Starters"
  },
  {
    id: 3,
    name: "SS Pikachu",
    color: "yellow",
    fleet: "I choose you."
  }
]

export default spaceships
 */