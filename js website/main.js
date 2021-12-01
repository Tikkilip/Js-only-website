let footer = document.createElement("header");
footer.className = "someClass";
document.body.append(footer);

let nav = document.createElement("nav");
footer.append(nav);

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