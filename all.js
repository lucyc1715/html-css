/* modify text */
// const el = document.querySelector('.pic-img');
// el.textContent = "hello world!!";

/* .main class div new H1 tag */
/* remove origin content, replace to new content*/
// const main = document.querySelector('.main');
// main.innerHTML = `<h2 class="header"><span>menu</span></h2>`;

/* insert parameter */
// const list = document.querySelector('.list');
// let link = "https://www.google.com"
// list.innerHTML = `<li><a href="${link}">Google</a></li>`;

/** setAttribute*/
// const yLink = document.querySelector('a');
// yLink.setAttribute("href","https://www.yahoo.com.tw");
// yLink.setAttribute("class","test");

/** querySelectorAll */
// const oLink = document.querySelectorAll('a');
// console.log(oLink);
// oLink[0].setAttribute("href","https://www.books.com.tw");
// oLink[0].setAttribute("class","test");
// oLink[0].textContent = "Buy Books";

// oLink[1].setAttribute("href","http://www.eslite.com/");
// oLink[1].setAttribute("class","temp");

/** Get value */
// const vLink = document.querySelector("a");
// console.log(vLink.getAttribute("href"));
// console.log(vLink.getAttribute("class"));
// console.log(vLink.innerHTML);
// console.log(vLink.textContent);

/** get form value */
const txt = document.querySelector('.txt');
// console.log(txt.value);
// const sList = document.querySelector('.sList');
// console.log(sList.value);

// give new value to txt
txt.value = "Hello!";
const sList = document.querySelector('.sList');
sList.value = "London";

/** EventListener */
const btn = document.querySelector(".btn");
const title = document.querySelector("h3");
btn.addEventListener("click", (e) => {
  title.textContent = `It's clicked`;
})