const shortestdistance = (firstX, firstY, secondX, secondY) => {
    var differenceX = secondX - firstX;
    var squaredX = differenceX * differenceX;
    var differenceY = secondY - firstY;
    var squaredY = differenceY * differenceY;
    return Math.sqrt(squaredX + squaredY);
};

module.exports = shortestdistance;