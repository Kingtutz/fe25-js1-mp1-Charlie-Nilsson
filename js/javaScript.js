//första delen

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
// andra delen
// huvud div
const mainDiv = document.createElement('div')
document.body.appendChild(mainDiv)
mainDiv.classList.add('maindiv')
// 3xdivloop
for (let i = 0; i < 3; i++) {
  const pDiv = document.createElement('div')
  mainDiv.appendChild(pDiv)
  pDiv.classList.add('pdiv')
  // pdiv1
  if (i === 0) {
    for (let j = 0; j < 10; j++) {
      const p1 = document.createElement('p')
      pDiv.appendChild(p1)
      p1.innerText = j
      if (j % 2 === 0) {
        p1.classList.add('bw')
        console.log(j)
      }
      if (j === 4) {
        p1.style.backgroundColor = 'purple'
      }
    }
  }
  // pDiv2
  if (i === 1) {
    for (let j = 9; j > -1; j--) {
      const p2 = document.createElement('p')
      pDiv.appendChild(p2)
      p2.innerText = j
      p2.classList.add('p2')
      if (j % 2 === 0) {
        p2.classList.add('bw')
        console.log(j)
      }
      if (j === 8) {
        p2.style.backgroundColor = 'purple'
      }
    }
  }
  // pdiv 3
  if (i === 2) {
    const valörer = [
      'ett',
      'två',
      'tre',
      'fyra',
      'fem',
      'sex',
      'sju',
      'åtta',
      'nio',
      'tio'
    ]

    for (let j = 0; j < 10; j++) {
      const p3 = document.createElement('p')
      pDiv.appendChild(p3)
      p3.innerText = valörer[j]
      p3.classList.add('p3')
      if (j % 2 === 0) {
        p3.classList.add('bw')
        console.log(j)
      }
      if (valörer[j] === 'sex') {
        p3.style.backgroundColor = 'purple'
      }
    }
  }
}
