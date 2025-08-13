// Pases por familia
 const pasesPorFamilia = {{
      "Familia González Rodriguez": {{ adultos: 3, niños: 0 }},
      "Familia Rodriguez Espinoza": {{ adultos: 2, niños: 0 }},
      "Familia Rodríguez Cabrera": {{ adultos: 2, niños: 0 }},
      "Familia Marín Rodriguez": {{ adultos: 2, niños: 1 }},
      "Señor Moisés": {{ adultos: 1, niños: 0 }},
      "Familia Aguila González": {{ adultos: 2, niños: 0 }},
      "Familia Aguila Campos": {{ adultos: 2, niños: 2 }},
      "Familia Velázquez Rodríguez": {{ adultos: 13, niños: 0 }},
      "Familia Sánchez Varela": {{ adultos: 4, niños: 0 }},
      "Familia González Sánchez": {{ adultos: 2, niños: 0 }},
      "Familia Sánchez González": {{ adultos: 2, niños: 1 }},
      "Familia Sánchez Rosales": {{ adultos: 3, niños: 1 }},
      "Familia Sánchez Venegas": {{ adultos: 3, niños: 0 }},
      "Familia González Collar": {{ adultos: 7, niños: 0 }},
      "Familia Ramón Verdín": {{ adultos: 5, niños: 0 }},
      "Familia García Federico": {{ adultos: 2, niños: 0 }},
      "Familia Rodríguez Ramírez": {{ adultos: 4, niños: 1 }},
      "Familia Rodriguez Ontiveros": {{ adultos: 2, niños: 2 }},
      "Familia Velázquez Bravo": {{ adultos: 3, niños: 0 }},
      "Karina Bravo y Héctor Zacarías": {{ adultos: 2, niños: 0 }},
      "Familia Doctor Osorio": {{ adultos: 2, niños: 0 }},
      "Familia Vargas Sánchez": {{ adultos: 4, niños: 0 }},
      "Señora Brenda": {{ adultos: 2, niños: 0 }},
      "Familia Huichin Sánchez": {{ adultos: 4, niños: 0 }},
      "Ale Zacarías": {{ adultos: 2, niños: 0 }},
      "Señora Rosa Isela": {{ adultos: 1, niños: 1 }},
      "Señora Garcitas": {{ adultos: 4, niños: 0 }},
      "Familia Clemente Ortuño": {{ adultos: 2, niños: 0 }},
      "Familia Beltrán Albarrán": {{ adultos: 4, niños: 0 }},
      "Señora Luzma": {{ adultos: 2, niños: 0 }},
      "Señora Yoselin": {{ adultos: 2, niños: 0 }},
      "Señora Veró": {{ adultos: 2, niños: 0 }},
      "Familia Castro Reyes": {{ adultos: 2, niños: 0 }},
      "Familia Anaya Cuervo": {{ adultos: 3, niños: 0 }},
      "Familia Brindis": {{ adultos: 2, niños: 0 }},
      "Señor René Presa": {{ adultos: 2, niños: 0 }},
      "Familia Moreno Téllez": {{ adultos: 2, niños: 0 }},
      "Señora Fany Ramírez": {{ adultos: 3, niños: 2 }},
      "Familia Cárdenas": {{ adultos: 4, niños: 0 }},
      "Familia Vasconcelos": {{ adultos: 5, niños: 0 }},
      "Familia Llanos": {{ adultos: 5, niños: 0 }},
      "Lupita cuoxiloa": {{ adultos: 1, niños: 0 }},
      "Mary López": {{ adultos: 1, niños: 0 }},
      "Crista": {{ adultos: 1, niños: 0 }},
      "Iram González": {{ adultos: 2, niños: 0 }},
      "Valentina": {{ adultos: 1, niños: 0 }},
      "Alexandra": {{ adultos: 1, niños: 0 }},
      "Pamela": {{ adultos: 2, niños: 0 }},
      "Diana": {{ adultos: 1, niños: 0 }},
      "Naomi Valderabano": {{ adultos: 1, niños: 0 }},
      "Sofía": {{ adultos: 1, niños: 0 }},
      "Naomi Carrillo": {{ adultos: 1, niños: 0 }},
      "Diego": {{ adultos: 1, niños: 0 }},
      "Hadassah": {{ adultos: 1, niños: 0 }},
      "Gian Karla": {{ adultos: 1, niños: 0 }},
      "Mitzu": {{ adultos: 1, niños: 0 }}
    }};


const selectFamilia = document.getElementById("familia");
for (const familia in pasesPorFamilia) {
  const opt = document.createElement("option");
  opt.value = familia;
  opt.text = familia;
  selectFamilia.appendChild(opt);
}

function mostrarPases() {
  const familia = selectFamilia.value;
  const datos = pasesPorFamilia[familia];
  const info = Tienen ${datos.adultos} pase(s) adulto(s) + 
               (datos.niños > 0 ? ` y ${datos.niños} pase(s) de niño(s)` : "") + .;
  document.getElementById("pasesDisponibles").textContent = info;

  const selectAdultos = document.getElementById("pasesAdultos");
  const selectNinos = document.getElementById("pasesNinos");
  selectAdultos.innerHTML = "";
  selectNinos.innerHTML = "";

  for (let i = 0; i <= datos.adultos; i++) {
    selectAdultos.innerHTML += <option value="${i}">${i}</option>;
  }
  for (let i = 0; i <= datos.niños; i++) {
    selectNinos.innerHTML += <option value="${i}">${i}</option>;
  }

  document.getElementById("pasesInfo").classList.remove("hidden");
}

function enviarWhatsApp() {
  const familia = selectFamilia.value;
  const adultos = document.getElementById("pasesAdultos").value;
  const ninos = document.getElementById("pasesNinos").value;

  const mensaje = Hola Nahomi, ${familia} confirma ${adultos} pase(s) adulto(s) + 
                  (ninos > 0 ? ` y ${ninos} pase(s) de niño(s)` : "") + . 🎉;
  const numero = "5212225253945";
  const url = https://wa.me/${numero}?text=${encodeURIComponent(mensaje)};
  window.open(url, '_blank');

  selectFamilia.remove(selectFamilia.selectedIndex);
  document.getElementById("pasesInfo").classList.add("hidden");
}

// Cuenta regresiva
const fechaEvento = new Date("September 20, 2025 19:00:00").getTime();

function actualizarCuenta() {
  const ahora = new Date().getTime();
  const tiempoRestante = fechaEvento - ahora;

  if (tiempoRestante <= 0) {
    document.getElementById("cuentaRegresiva").innerHTML = "<h2>¡Hoy es el gran día!</h2>";
    return;
  }

  const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
  const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

  document.getElementById("dias").textContent = dias;
  document.getElementById("horas").textContent = horas;
  document.getElementById("minutos").textContent = minutos;
  document.getElementById("segundos").textContent = segundos;
}

actualizarCuenta();
setInterval(actualizarCuenta, 1000);