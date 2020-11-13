const assert = require('assert');

const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser = (callback) => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
//   const { firstName, lastName, nationality } = userToReturn
  return callback(userToReturn);
};
console.log(getUser((resultGetUser) => {
    // const { firstName, lastName, nationality } = resultGetUser
    return userFullName(resultGetUser);
}))
assert.equal(getUser((resultGetUser) => {
    // const { firstName, lastName } = resultGetUser
    return userFullName(resultGetUser);
}), "Hello! My name is Ivan Ivanovich"); // complete a chamada da função de getUser
assert.equal(getUser((resultGetUser) => {
    // const { firstName, nationality } = resultGetUser
    return userNationality(resultGetUser);
}), "Ivan is Russian"); // complete a chamada da função de getUser