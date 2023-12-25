// 1)შექმენით ერთ განზომილებიანი მსაივი საიდანაც for ციკლის მეშვებოთ დაბეჭდავთ მასივში არსებულ ყველა ელემენტს

let arr = [21, "Teo", "swimming", 2015]
for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
}

// 2)პრომპტით შეიყვანე ხელფასი რომელიც უდრის (salary) ამ salary ზე უნდა ადგეთ და
// გაუკეთოT if else კონსტრუქცია სადაც გავიგებთ ხელფასია კაია საშუალოა თუ გააგდე სახლიდან

let salary = prompt("how much money you make?: ")

if(isNaN(salary)){
    alert("You have to enter number!")
}

// console.log(typeof(salary))

if(salary <= 500){
    console.log("not good")
} else if(salary > 500 && salary <= 2000){
    console.log("You can do better")
} else if(salary > 2000){
    console.log("Good job")
}

//3) მოცემული მასივიდან [ 15,53,22,198,10,28,16,70,33,951 ] დაბეჭდეთ მხოლოდ კენტი რიცხვები 

let arrOfNumbers = [15,53,22,198,10,28,16,70,33,951]

for(let i = 0; i < arrOfNumbers.length; i++){
    if(arrOfNumbers[i] % 2 != 0){
        console.log(arrOfNumbers[i])
    }
}
