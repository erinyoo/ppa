const bmi = (feet, inches, weight) => {
    const totalInches = (feet * 12) + inches;
    const convertedHeight = totalInches * .025;
    const convertedWeight = weight * .45;
    const heightSquared = convertedHeight * convertedHeight;
    const dividedAnswer = convertedWeight / heightSquared;

    let bmiCategory = '';
    if(dividedAnswer <= 18.5) {
        bmiCategory = 'UNDERWEIGHT';
    } else if(dividedAnswer > 25 && dividedAnswer <= 29.9) {
        bmiCategory = 'OVERWEIGHT';
    } else if(dividedAnswer >= 30) {
        bmiCategory = 'OBESE';
    }
    else {
        bmiCategory = 'NORMAL';
    }

    return 'Category: ' + bmiCategory + ', BMI: ' + dividedAnswer;
};

module.exports = bmi;