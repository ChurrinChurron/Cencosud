//variables menu
let menuMovilAbrir = document.querySelector(".navMovil__boton");
let menuMovilCerrar = document.querySelector(".menuMovil__botonCerrar");
let menuMovil = document.querySelector(".menuMovil");

//variables datos al dar click en las banderas
let banderas = document.querySelectorAll(".cuentas__banderas--pais");
let chile = document.getElementById("chile");
let argentina = document.getElementById("argentina");
let colombia = document.getElementById("colombia");
let numeros = document.querySelectorAll(".cuentas__numeros");

//variables datos al dar click en los logos
let logos = document.querySelectorAll(".medios-logos--marca");
let paris = document.getElementById("paris");
let easy = document.getElementById("easy");
let jumbo = document.getElementById("jumbo");
let isabel = document.getElementById("isabel");
let spid = document.getElementById("spid");
let puntos = document.getElementById("puntos");
let numerosLogo = document.querySelectorAll(".cuentas__numerosLogo");

//variable tabs
let tabs = document.querySelectorAll(".tabs__toggle");
let contents = document.querySelectorAll(".tabs__conten");

//variable acordeon
let acordeon = document.querySelectorAll("li");

//variable menu categorias
let botonCateg = document.querySelector(".categoria__boton");
let menuCateg = document.querySelector(".categoria__seleccion");

//menu

menuMovilAbrir.addEventListener("click", () => {

    menuMovil.classList.remove("hidden");
})

menuMovilCerrar.addEventListener("click", () => {

    menuMovil.classList.add("hidden");
})

//datos banderas y logos

fetch("./src/js/data.json")
    .then(res => res.json())
    .then(data => {

    window.addEventListener("load", () => {

		for(let i = 0; i < numeros.length; i++) {

		    numeros[i].textContent = `+${data[i].cuentas.chile.numero}K`;
	    }
	})

	chile.addEventListener("click", () => {

		for(let i = 0; i < numeros.length; i++) {

		    numeros[i].textContent = `+${data[i].cuentas.chile.numero}K`;
	    }
	})

	argentina.addEventListener("click", () => {
	
		for(let i = 0; i < numeros.length; i++) {

			numeros[i].innerHTML = `+${data[i].cuentas.argentina.numero}K`;
		}
	})

	colombia.addEventListener("click", () => {
	
		for(let i = 0; i < numeros.length; i++) {

			numeros[i].innerHTML = `+${data[i].cuentas.colombia.numero}K`;
		}
	})

});

fetch("./src/js/data.json")
    .then(res => res.json())
    .then(data => { 

		window.addEventListener("load", () => {
	
			for(let i = 0; i < numerosLogo.length; i++) {
	
				numerosLogo[i].textContent = `+${data[i].cuentas.paris.numero}K`;
			}
		})

		paris.addEventListener("click", () => {

			for(let i = 0; i < numerosLogo.length; i++) {
	
				numerosLogo[i].textContent = `+${data[i].cuentas.paris.numero}K`;
			}
		})

		easy.addEventListener("click", () => {
	
			for(let i = 0; i < numerosLogo.length; i++) {
	
				numerosLogo[i].innerHTML = `+${data[i].cuentas.easy.numero}K`;
			}
		})
	
		jumbo.addEventListener("click", () => {
		
			for(let i = 0; i < numerosLogo.length; i++) {
	
				numerosLogo[i].innerHTML = `+${data[i].cuentas.jumbo.numero}K`;
			}
		})
	
		isabel.addEventListener("click", () => {
		
			for(let i = 0; i < numerosLogo.length; i++) {
	
				numerosLogo[i].innerHTML = `+${data[i].cuentas.isabel.numero}K`;
			}
		})
	
		spid.addEventListener("click", () => {
		
			for(let i = 0; i < numerosLogo.length; i++) {
	
				numerosLogo[i].innerHTML = `+${data[i].cuentas.spid.numero}K`;
			}
		})
	
		puntos.addEventListener("click", () => {
		
			for(let i = 0; i < numerosLogo.length; i++) {
	
				numerosLogo[i].innerHTML = `+${data[i].cuentas.puntos.numero}K`;
			}
		})


	});

for(const ban of banderas) {

	ban.addEventListener("click", () => {
		
		for(const ban of banderas) {

			ban.classList.remove("opac");
		}

		ban.classList.add("opac");
	})
};

for(const log of logos) {

	log.addEventListener("click", () => {
		
		for(const log of logos) {

			log.classList.remove("opac");
		}

		log.classList.add("opac");
	})
};

//tabs

tabs.forEach((tab, index) => {

    tab.addEventListener("click", () => {
        contents.forEach(content => {

            content.classList.remove("block");
        });
        tabs.forEach( tab => {

            tab.classList.remove("tab--active");
        });

        contents[index].classList.add("block");
        tabs[index].classList.add("tab--active");
    });
});

//acordeon

for(const li of acordeon) {

    li.addEventListener("click", () => {

        li.classList.toggle("mostrar");
    })
}

//menu categorias

botonCateg.addEventListener("click", () => {

    menuCateg.classList.toggle("none");
});

