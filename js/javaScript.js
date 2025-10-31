for (let i = 0; i < 5; i++) {
  const h1 = document.createElement('h1')
  document.body.appendChild(h1)
  h1.innerText = 'Rad' + (i + 1)
  console.log(i)
}
