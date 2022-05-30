function crystalGazer(children, partner_name, location, job_title) {

    return "You will be a " + job_title + " in " + location + " and married to " + partner_name + " with " + children + " children.";
}
console.log(crystalGazer(3, "Name", "Vienna", "Web Developer"))

function ageCalculator(birthYear, currentYear) {
    let age1 = currentYear - birthYear;
    let age2 = currentYear - birthYear - 1;
    return "You are either " + age1 + " or " + age2 + " years old.";
}

console.log(ageCalculator(1997, 2022))

function ageCalculatorImproved(birthYear2) {
    let year = new Date().getFullYear();
    let age3 = year - birthYear2;
    let age4 = year - birthYear2 - 1;
    return "You are either " + age3 + " or " + age4 + " years old.";
}
console.log(ageCalculatorImproved(1997))

function conversion(deg) {
    let radians = deg * (Math.PI / 180);
    return radians;
}
console.log(conversion(90))

function box(width, height, depth) {
    let area = width * height;
    let volume = width * height * depth;
    return "The area of your box is " + area + "\nThe volume of your box is " + volume
}

console.log(box(2, 7, 5))

let capitalize = function() {
    const str = 'i am a web developer';
    const str2 = str.charAt(0).toUpperCase() + str.slice(1);
    console.log(str2);
};
capitalize();

function grades(math, english, physics) {
    let sum = math + english + physics;
    let avg = sum / 3;
    return "Your Sum: " + sum + "\nYour Average: " + avg;
}

console.log(grades(1, 2, 3))