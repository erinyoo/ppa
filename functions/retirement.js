const retirement = (age, annualsalary, percentage, desiredgoal) => {
    var totalSaved = annualsalary * (percentage / 100);
    var employerSaved = totalSaved * .35;
    var total = totalSaved + employerSaved;
    var yearsTaken = Math.round(desiredgoal / total);
    if(age + yearsTaken >= 100) {
        return -1;
    }
    return age + yearsTaken;
};

module.exports = retirement;