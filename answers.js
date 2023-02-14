//Easy Going
for (let i=1; i<=20;i++)
{
    console.log(`number ${i}`);
}
//Got Even
for(let i=0; i<=200;i++)
{
   if(i%2===0){
    console.log(`${i} is even number`);
   }
}
 

// // Fizz Buzz
 for (let i=1; i<=100;i++)
 {   if(i%3===0&&i%5===0)
     {
         console.log(`${i} FizzBuzz`)
     }
     else if(i%3===0){
         console.log(`${i} Fizz`)
     }
   else if(i%5===0){
         console.log(`${i} buzz`)
     }
 }
 // Wild Wild Life
   const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
   const sharky = ["Sharky", "shark", 20, "Left Coast"]
   const plantee = ["Plantee", "plant",  5000 , "Mordor"]
   const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
   const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

   plantee[2]+=1;
    
// console.log(plantee);
 wolfy[3]= "Gotham City";
 //console.log(wolfy);
 dart.push("Hawkins")
 //console.log(dart);
 wolfy.shift();
 wolfy.unshift("Gameboy")
 console.log(wolfy);


// // Yell at the Ninja Turtles
 let ninjaturtles=["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
 
 for (let x of ninjaturtles )
  {
   console.log(x.toUpperCase());
   }
  

// Methods, Revisited
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
console.log(favMovies[8])
console.log(favMovies.sort())
favMovies.pop();
favMovies.push("Guardians of the Galaxy")
favMovies.reverse();
favMovies.shift();
favMovies.splice(favMovies.indexOf("Django Unchained"),1,"Avatar")
console.log(favMovies)
let halfOfLength=favMovies.length/2;
let halfArray=favMovies.slice(halfOfLength-1)
//console.log(halfArray)
console.log(favMovies)
// Where is Waldo
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

whereIsWaldo.splice(1,1);
//Change "Neff" to "No One"
whereIsWaldo[1][2]= "NO One";
console.log(whereIsWaldo[2][1][1]);
//  Excited Kitten
for (let i=0;i<=20;i++)
{
    console.log( "Love me, pet me! HSSSSSS!" );
}
// let kittyTalk=[1,2,3,4,5,6,7,8,9,10];
// let meow=kittyTalk[Math.floor(Math.random()*kittyTalk.length)]
//  while(meow<kittyTalk.length){
//     if (meow%2===0){
//     console.log(` ...human...why you taking pictures of me?..., ...the catnip made me do it..., or ...why does the red dot always get away...`)
//     }
// }
//  Find the Median
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
const middleIndex = nums.length / 2;
console.log(nums.length);
if (nums.length % 2 !== 0) {
    console.log(nums[Math.floor(middleIndex)]);
}
else {
    console.log((nums[middleIndex - 1] + nums[middleIndex]) / 2);
}
//Fibonnacci 
let i=0
let j=1

while(i<=50)
  { 
    console.log(i);
    console.log(j);
    i+=j;
    j+=i;
}
//Return of the Closets
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];
 let kristynsShoe = (kristynsCloset.splice(0,1)).toString();
 thomsCloset[2].push(kristynsShoe);
 console.log(kristynsCloset);
 console.log(thomsCloset[2]);
 kristynsOutfit=[kristynsCloset[0],kristynsCloset[2],kristynsCloset[3]]
 thomOutfit=[thomsCloset[0][0],thomsCloset[1][1],thomsCloset[2][2]];
 console.log(`Kristyn is wearing ${kristynsOutfit} and Thom is wearing ${thomOutfit} `)
 kristynsCloset.forEach(function washing(item){
   console.log( `WHIRR: Now washing ${item}`)
 })
 console.log(`${thomsCloset}`)
