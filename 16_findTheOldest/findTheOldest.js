const findTheOldest = function(people) {
    const date = new Date();
    const currentYear = date.getFullYear();
    return people.map(person => {
        if (!person.yearOfDeath) {
            person.yearOfDeath = currentYear;
        }
        return person;
    }).sort((a, b) => (a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth) ? -1 : 1)[0];
};
// Do not edit below this line
module.exports = findTheOldest;
