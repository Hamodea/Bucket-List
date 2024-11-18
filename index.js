const listContainer = document.querySelector(".list");

const newItem1 = document.createElement("p");
newItem1.innerHTML = "Add item1 to the list.";
listContainer.appendChild(newItem1);

// creat anthoer <p> element

const  newItem2 = document.createElement("p");
newItem2.innerHTML = "Add item2 to the list";

// Insert it after the first <p> using 'afterend'
newItem1.insertAdjacentElement("afterend", newItem2);
console.log(listContainer.innerHTML);


// create a new HTML string
const newHtmlItem = "<p>New String</p>";
// This would replace all content in the container
// listContainer.innerHTML = newHtmlItem;

// to add new html to the beginning instead, 
listContainer.insertAdjacentHTML("afterbegin", newHtmlItem);


const newItems = ["Java Script", "HTML", "CSS"];

newItems.forEach(item =>{
    const newItem = document.createElement("p");
    newItem.innerHTML = item;
    listContainer.appendChild(newItem);
});

//console log the number of child elements
console.log(listContainer.children.length); //output 7


// change the h2 content

const heading = document.querySelector("h2");
heading.innerText = "Mohmad 's Bucket List";

//create a new  item
const  newFirstItem = document.createElement("p");
newFirstItem.innerHTML = "Full stack developer";
listContainer.replaceChild(newFirstItem, listContainer.children[0]);

// Find the middle of the list
const middleItem = listContainer.children[2];
const newMiddleItem = document.createElement("p");
newMiddleItem.innerText = "Front End";
//replace
listContainer.replaceChild(newMiddleItem, middleItem);
// remove last child
const lastitem = listContainer.lastElementChild;
listContainer.removeChild(lastitem);
