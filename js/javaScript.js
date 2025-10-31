for (let i = 0; i < 5; i++) {
  const h1 = document.createElement('h1')
  document.body.appendChild(h1)
  h1.classList.add('head')
  const hue = 120 + i * 15
  h1.innerText = 'Rad' + (i + 1)
  h1.style.fontSize = `${(i + 1) * 10}px`
  h1.style.backgroundColor = `hsla(${hue}, 100%, 74%, 1.00)`
  console.log(hue)
  console.log(i)
}

const tableDiv = document.createElement('div')
document.body.appendChild(tableDiv)
tableDiv.classList.add('tablediv')

const ol = document.createElement('ol')
tableDiv.appendChild(ol)
ol.classList.add('ol')
for (let i = 0; i < 10; i++) {
  const li = document.createElement('li')
  ol.appendChild(li)
  li.innerText = `${i}`
  const hue = i * 10
  if (i % 2 === 0) {
    li.style.background = 'black'
    li.style.color = 'white'
  }
}
for (let i = 0; i < 10; i++) {
  const li = document.createElement('li')
  ol.appendChild(li)
  li.innerText = `${i}`
  const hue = i * 10
  if (i % 2 === 0) {
    li.style.background = 'black'
    li.style.color = 'white'
  }
}
