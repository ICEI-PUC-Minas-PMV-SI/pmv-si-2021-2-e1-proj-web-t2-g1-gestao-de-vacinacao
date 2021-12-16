// astrazeneca
document.getElementById('adicionar').addEventListener('click', adicionar)
document.getElementById('apagar').addEventListener('click', apagar)
document.addEventListener('DOMContentLoaded', function (event) {
  if (localStorage.getItem('vacina') != null) {
    document.getElementById('resultado').innerHTML = localStorage.getItem('vacina')
  }
})
 
function adicionar () {
 
  let vacina = parseFloat(document.getElementById('vacina').value)
  if (isNaN(vacina)) {
    vacina = 0
  }
 
  let vacinaAlmacenada = parseFloat(localStorage.getItem('vacina'))
  if (isNaN(vacinaAlmacenada)) {
    vacinaAlmacenada = 0
  }
 
  const suma = vacina + vacinaAlmacenada
  
  document.getElementById('resultado').innerHTML = suma
 
  localStorage.setItem('vacina', suma)
}
 
function apagar () {
 
  localStorage.setItem('vacina', 0)
}











// Coronavac

document.getElementById('adicionar2').addEventListener('click', adicionar2)
document.getElementById('apagar2').addEventListener('click', apagar2)
document.addEventListener('DOMContentLoaded', function (event) {
  if (localStorage.getItem('vacina2') != null) {
    document.getElementById('resultado2').innerHTML = localStorage.getItem('vacina2')
  }
})
 
function adicionar2 () {
 
  let vacina2 = parseFloat(document.getElementById('vacina2').value)
  if (isNaN(vacina2)) {
    vacina2 = 0
  }
 
  let vacina2Almacenada = parseFloat(localStorage.getItem('vacina2'))
  if (isNaN(vacina2Almacenada)) {
    vacina2Almacenada = 0
  }
 
  const suma = vacina2 + vacina2Almacenada
  
  document.getElementById('resultado2').innerHTML = suma
 
  localStorage.setItem('vacina2', suma)
}
 
function apagar2 () {
 
  localStorage.setItem('vacina2', 0)
}


// Pfizer 
document.getElementById('adicionar3').addEventListener('click', adicionar3)
document.getElementById('apagar3').addEventListener('click', apagar3)
document.addEventListener('DOMContentLoaded', function (event) {
  if (localStorage.getItem('vacina3') != null) {
    document.getElementById('resultado3').innerHTML = localStorage.getItem('vacina3')
  }
})
 
function adicionar3 () {
 
  let vacina3 = parseFloat(document.getElementById('vacina3').value)
  if (isNaN(vacina3)) {
    vacina3 = 0
  }
 
  let vacina3Almacenada = parseFloat(localStorage.getItem('vacina3'))
  if (isNaN(vacina3Almacenada)) {
    vacina3Almacenada = 0
  }
 
  const suma = vacina3 + vacina3Almacenada
  
  document.getElementById('resultado3').innerHTML = suma
 
  localStorage.setItem('vacina3', suma)
}
 
function apagar3 () {
 
  localStorage.setItem('vacina3', 0)
}