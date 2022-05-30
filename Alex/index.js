function crystalGazer(children, partnerName, location, jobTitle) {
    return "You will be a " + jobTitle + " in " + location + " and married to " + partnerName + " with " + children + "."
}

console.log(crystalGazer(3, "Anna", "Vienna", "Baker"))


function ageCalculator(birthyear, currentyear) {
    let age1 = currentyear - birthyear;
    let age2 = currentyear - birthyear - 1;
    return "You are either " + age1 + " or " + age2
}

console.log(ageCalculator(1989, 2022))

function ageCalculator2(birthyearNew) {
    let year = new Date().getFullYear();
    let age3 = year - birthyearNew
    let age4 = year - birthyearNew - 1;
    return "You are either " + age3 + " or " + age4

}

console.log(ageCalculator2(1989))


function degreeToRadians(deg) {
    let result = deg * (Math.PI / 180);
    return result;
}

console.log(degreeToRadians(90))


function box(width, height, depth) {
    let area = width * height;
    let volume = width * height * depth;
    return "The area is " + area + "\nthe volume is" + volume
}

console.log(box(2, 7, 5))

let anonym = function() {
    let string1 = "i am a web developer"
    let string2 = string1.charAt(0).toUpperCase() + string1.slice(1);
    console.log(string2)
}

anonym();

function grades(math, physic, english) {
    let sum1 = math + physic + english;
    let average = sum1 / 3;
    return "The sum is" + sum1 + "\n The average is " + average
}

console.log(grades(3, 4, 5))