let header = document.createElement("header");
header.className = "someClass";
document.body.append(header);

let nav = document.createElement("nav");
header.append(nav);

let ul = document.createElement("ul");
nav.append(ul);

let headerLinks = [
  { name: "Google", myhref: "http://google.com" },
  { name: "VK", myhref: "https://vk.com" },
  { name: "YouTube", myhref: "http://youtube.com" },
  { name: "Instagram", myhref: "https://www.instagram.com"},
  { name: "Pinterest", myhref: "https://www.pinterest.com"},
  { name: "Wikipedia", myhref: "https://www.wikipedia.org"},
];

for (let i = 0; i < headerLinks.length; i++) {
  let li = document.createElement("li");
  let a = document.createElement("a");
  li.append(a);
  a.innerText = headerLinks[i].name;
  a.href = headerLinks[i].myhref;
  ul.append(li);
}



// footer


let footer = document.createElement("footer");
footer.className = "footer";
document.body.append(footer);

let navFooter = document.createElement("nav");
footer.append(navFooter);

let ul_1 = document.createElement("ul");
navFooter.append(ul_1);
let ul_2 = document.createElement("ul");
navFooter.append(ul_2);
let links = [
  { name: "Google", myhref: "http://google.com" },
  { name: "Onliner", myhref: "https://www.onliner.by" },
  { name: "VK", myhref: "http://Vkontakte.ru" },
  { name: "YouTybe", myhref: "http://youtybe.com" },
  { name: "YouTybe", myhref: "http://youtybe.com" },
  { name: "YouTybe", myhref: "http://youtybe.com" },
];

for (let i = 0; i < links.length; i++) {
	let liFooter = document.createElement("li");
	let aFooter = document.createElement("a");
	liFooter.append(aFooter);
	aFooter.innerText = links[i].name;
	aFooter.href = links[i].myhref;
	ul_1.append(liFooter);
}

links.forEach((item) => {
	let new_li = document.createElement("li");
	let new_a = document.createElement("a");
	new_li.append(new_a);
	new_a.innerText = item.name;
	new_a.href = item.myhref;
	ul_2.append(new_li);
})