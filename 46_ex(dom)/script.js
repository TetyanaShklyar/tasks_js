// console.log(document.querySelector('#current').parentElement)
// console.log(document.querySelector('[data-current="3"]').nextElementSibling)
// console.log(document.querySelector('[data-current="3"]').previousElementSibling)

// console.log(document.body.childNodes)

for (let node of document.body.childNodes) {
  if (node.nodeName == '#text') {
    continue
  }
  console.log(node)
}
