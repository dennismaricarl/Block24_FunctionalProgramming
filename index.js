//TAB1: First-class Function  

//#1
    //create variable 
    //assign a function to variable
    //use function to return another function that converts a string to uppercase

const convertString = () => (string) => {
    return string.toUpperCase();
 };

const toUpperCase = convertString();
const word = "welcome";
const word_in_uppercase = toUpperCase(word);

console.log(word_in_uppercase);


//#2 
    //create a variable 
    //assign a function to that variable that takes "inputNumber"
    //that function will return another function that multiplies inputNumber with number 
    //do partially apply 


const multiplyNumbers = (inputNumber) => (number) => {
    return inputNumber * number
};

const function_that_multiplies = multiplyNumbers();
const input_number = multiplyNumbers(3);
const product = input_number(7);

console.log(product)

//#3
const ObjectReturned = (num1, num2) => {
    const result1 = num1 + 2
    const result2 = num2 + 4
    const object = {
        result1: result1, 
        result2: result2
    }

    return object;
};

const result = ObjectReturned(1, 3)
console.log(result)


//TAB2: HIGHER-ORDER FUNCTION 
    //write array
    //function that takes array 
    //and modify each element in the input 
    //return a new array with modified elements

//#1
const animals  =  ['Hippopotamus', 'King Cobra', 'Giant Panda', 'Crocodile'];

const mappedArray = animals.map(function(animal){
    return animal.toLowerCase();
});

console.log(mappedArray)

//#2
    //write array
    //create variable, equal to function
    //use .map to iterate through list 
    //use if statement to find string that has more than 11 characs
    //return that item

const moreThan11 = animals.map(function(animal) {
    if(animal.length > 11) {
        return animal
    }
});

console.log(moreThan11);


//#3
    //write array
    //create function that takes a string 
    //use map to iterate over each item in array
    //split the string, reverse the order, and join back together

const reverseStrings = (animals) => animals.map((animal) => animal.split('').reverse().join(''));

const reversedAnimals = reverseStrings(animals)
console.log(reversedAnimals)

//#4
    // first function - 
        // takes speed and name
        // return an array, value:pairs? 
        //generate speed how? 


    // second function - 
        // takes runner1, runner2, and race distance
        // whoever is faster and has greater distance is winner 
        // if speed and distance are greater, return that runner
        // if equal, return 'It's a tie'

runners = ["mari", "vivian", "jnae", "alice"];
// const mapped_runners = runners.map(runners => {return runners});
// console.log(mapped_runners)
const function1 = () => {
    const speed = Math.random();
    const random_name_index = Math.floor(Math.random() * runners.length);
    const name = runners[random_name_index]
    return {speed, name}
}

const randomRunner = function1();
console.log(randomRunner)

// const function2 = 

//TAB 3: CURRYING FUNCTION

//separate parts of URL 
    //protocol = https
    //subdomain = www 
    //domain = fullstackacademy
    //top-level domain = .com 
    //endpoint = weather 

//create function that takes every part as paramter 
    //divide function into several ones. each will take one parameter
    //return will concatenate/add every part of the URL 
    //call by putting arguments side by side ()()()

const add = (protocol) => (subdomain) => (domain) => (topLevel) => (endpoint) =>
    `${protocol}${subdomain}.${domain}.${topLevel}${endpoint}`;

const concat = add('https://')('www')('fullstackacademy')('com')('/weather');
const concat2 = ('/stocks')
const concat2_URL = concat + concat2 
console.log(concat)
console.log(concat2_URL)





