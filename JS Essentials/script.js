 const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*
//===Destructuring====
// const book=getBook(2)
const book=getBook(3)
// const book=getBook(1)

// ===without destructuring===
// const title=books.title;
// const auther=books.author;

//==with destrucuturing===
//extract specific data from object
//hints :actually we give variable name which is available in object also
const {title,author,genres,pages,publicationDate,hasMovieAdaptation}=book
// title;
// author;
genres;
console.log(title,author,genres)

//===without destructuing array===
// const primaryGenre=genres[0]
// const secondaryGenre=genres[1];

// ===with destructuing array===

// const[primaryGenre,secondaryGenre]=genres
const[primaryGenres,secondaryGenres,...otherGenres]=genres

console.log(primaryGenres,secondaryGenres,otherGenres);
//===without spread operators==
// const newGen=['epic-sifi',genres]
// newGen

// ===spread operators===
//take all the elements from out of the array and add them one after one
const newGenres=['epic Fantasy',...genres]
newGenres;


const updateBook={...book,
  // adding a new propery
  moviePublicationDate:'2002-12-17',
  // overriding existing property
  pages:1210}
updateBook


// ====template literals====

const summary=`${title}, a ${pages}-pages long book, was written by ${author}  and published in ${publicationDate.split('-')[0]}.The book has ${hasMovieAdaptation?'':'not'} been adapted as a Movie `
summary;


// ===ternaries instead of if/else===

const pg=pages > 1000? "over a thousand ":"less than thousand";
pg;
console.log(`the book has ${pg} pages`);


// ===without arrow functions===
// function getYear(str){
// return str.split('-')[0]
// }

// ===with arrow functions===
const getYear=str=>str.split('-')[0]

console.log(getYear(publicationDate ));


// ===short circuting and Logical Operators====

// ====And(&&) operators===
// hint -> if first operants is false then immediately return false

console.log(true&&'some String');
console.log(false&&'some String');//it doesn't look at the second value it will immediately return false
console.log(hasMovieAdaptation&&'This book has  a Moviee');

//truthy and falshy value
//false values==> null,'',undefined,false,0
console.log('saravanan' &&'some String');
console.log('' &&'some String');

// ====OR(||) operators===
//if first operants is true then it execute the first one(it doen't look at the next value) if not then second one will be execute
//hint -> it exact opposite of And circuite
// why we use it because it has huge advantage if we want to set default value then we can use it

console.log(true ||'Some String');
console.log(false ||'Some String');
console.log('hello'||'Some String');


//example
console.log(book.translations.spanish);//undefined -> also one of the falsy value

const spanishTranslation=book.translations.spanish||"NOT TRANSLATED"
spanishTranslation

// console.log(book.reviews.librarything.reviewsCount); 

//set default value

// const countWrong=book.reviews.librarything.reviewsCount||'No Data'

// console.log(countWrong);

//nullish coalesing operator a logically added new operator in javascript
//it works very similarly OR   operator
//but it does also short circuit for falsy values

// const count=book.reviews.librarything.reviewsCount??"no data"
// count
//HINTS:
// the nullish coalish operator only return  the second value when the first value is null or undefined
//but not when it's zero or an empty string


//===optional chaining===
function getTotalReviewCount(book){
  const goodreads=book.reviews?.goodreads?.reviewsCount
  const librarything=book.reviews?.librarything?.reviewsCount??0
  librarything;
  return goodreads +librarything;

}

console.log(getTotalReviewCount(book));



function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  librarything;
  return goodreads + librarything;
}

// ===the array map method===
const books=getBooks();
// book

// map(required call back function)
const x=[1,2,3,4,5].map(el=>el*2);
console.log(x);
//the map method basically create a new array based on the original  array with  some operation applied to each element  of the original array

const titles=books.map(book=>book.title)
console.log(titles);

//we can get object in 2 ways 
//way 1 manually writing return 
// const essentialData=books.map(book=>{
//   return {
//     title:book.title,
//     author:book.author
//   }
// })

function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  librarything;
  return goodreads + librarything;
}

//way 2 we can use ({}) to get objects we don't need to speciify the return type
const essentialData=books.map(book=>({
  titles:book.title,
  author:book.author,
  // we can do some computations also
  reviewsCount:getTotalReviewCount(book)
}))
console.log(essentialData);

//hint :when we use return type don't need to use {} braces with we use no return type statment then we have to use curly braces
// const validAge=age=>{
//   if(age>18){
//     console.log('eligible for vote');
//   }
// }

// validAge(8)

//====the filter method===
//filtering some elements on the array based on a condition

//without method chaining
// const longBooks=books.filter(book=>book.pages>500)
//with method chaining still it return an new array so we can filter again
const longBooksWithMovie=books
.filter(book=>book.pages>500)
.filter(book=>book.hasMovieAdaptation)
console.log(longBooksWithMovie);

//now filtering adventure books
const adventureBooks=books
.filter((book)=>book.genres.includes('adventure'))
.filter((book)=>book.title)
adventureBooks;
console.log(adventureBooks);


//====the reduce method====
//it required two paramters one is function and another one is started value
//reduce(callbakfunction,started value)

//acc--> stands for accumulator
//then what is accumulator , the accumulator is basically the current value of the final value that we want to boil the array down to
const pagesAllBooks=books.reduce((acc,book)=>acc+book.pages,0)
console.log(pagesAllBooks);

// ===the array sort method===

// unlike map filter and reduce this sort method will mutate the original array
//this is not a functional method so this is actually a method that mutates the original array
//in order to copy a array and do some performance we can use slice() first copy a array and do something whatever we want in real world we never play with original data
const arr=[3,2,6,7,5,98,1,65]
//a and b are current value a=3, b=2 
// const sorted=arr.sort((a,b)=>b-a); //for reverse order (decending)
const sorted=arr.slice().sort((a,b)=>a-b); //for assending order
console.log(sorted);//now it won't affect the original one
console.log(arr);


const sortedByPages=books.slice().sort((a,b)=>b.pages-a.pages)
console.log(sortedByPages);

// ====working with immutable array===
// 1) add book object to array
const newBook={
  id:6,
  title:'Harry patter and Chamber of Secrets',
  author:'J. K. Rowling',

};
const booksAfterAdd=[...books,newBook]
booksAfterAdd

//2) Delete book object from array

const booksAfterDelete=booksAfterAdd.filter(book=>book.id!==3)
booksAfterDelete


// 3) Update the book object in the array

const bookAfterUpdate=booksAfterDelete.map(book=>
  book.id===1?{...book,pages:1210}:book)
  bookAfterUpdate

  */

  // javascript immediately move on next line bydefault we have to write some logic to to wait untill the function is finish
 // console.log(fetch("https://jsonplaceholder.typicode.com/todos"))
 /*
 fetch("https://jsonplaceholder.typicode.com/todos")
 .then(res=>res.json())
 .then(data=>console.log(data))
  console.log("saravanan");
  */

  // now javascript won't immediately next line it will wait for finish the function
  // hint await is only work inside the async function
async function getTodos(){
    const res=await fetch("https://jsonplaceholder.typicode.com/todos");
    const data=await res.json();
    console.log(data);
    return data
  }
  const todos=getTodos();
  console.log(todos);

  console.log("saravanan");