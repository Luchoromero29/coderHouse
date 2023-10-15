const productos = [
    { tipo: "Procesador", marca: "Intel", modelo: "Core i9-11900K", precio: 29000, categoria: "Componentes", descripcion: "8 núcleos, 16 hilos, frecuencia base 3.5 GHz" },
    { tipo: "Placa de Video", marca: "AMD", modelo: "Radeon RX 6900 XT", precio: 75000, categoria: "Componentes", descripcion: "18 GB GDDR6, rendimiento de alta gama" },
    { tipo: "Monitor", marca: "LG", modelo: "27GL83A-B", precio: 6000, categoria: "Periféricos", descripcion: "27 pulgadas, resolución 2K, 144 Hz" },
    { tipo: "Mouse", marca: "SteelSeries", modelo: "Rival 600", precio: 6800, categoria: "Periféricos", descripcion: "Doble sensor óptico, peso ajustable" },
    { tipo: "Teclado", marca: "Corsair", modelo: "K95 RGB Platinum XT", precio: 9000, categoria: "Periféricos", descripcion: "Teclas mecánicas Cherry MX, retroiluminación RGB" },
    { tipo: "Procesador", marca: "AMD", modelo: "Ryzen 7 5800X", precio: 24000, categoria: "Componentes", descripcion: "8 núcleos, 16 hilos, frecuencia base 3.8 GHz" },
    { tipo: "Placa de Video", marca: "NVIDIA", modelo: "GeForce RTX 3060 Ti", precio: 55000, categoria: "Componentes", descripcion: "8 GB GDDR6, trazado de rayos en tiempo real" },
    { tipo: "Monitor", marca: "Acer", modelo: "Predator XB271HU", precio: 8500, categoria: "Periféricos", descripcion: "27 pulgadas, resolución 2K, 165 Hz" },
    { tipo: "Mouse", marca: "Logitech", modelo: "G Pro Wireless", precio: 7000, categoria: "Periféricos", descripcion: "Diseño ambidiestro, sensor HERO" },
    { tipo: "Teclado", marca: "Roccat", modelo: "Vulcan 122 AIMO", precio: 7500, categoria: "Periféricos", descripcion: "Switches Titan, iluminación AIMO" },
    { tipo: "Procesador", marca: "Intel", modelo: "Core i7-11700K", precio: 27000, categoria: "Componentes", descripcion: "8 núcleos, 16 hilos, frecuencia base 3.6 GHz" },
    { tipo: "Placa de Video", marca: "MSI", modelo: "GeForce RTX 3070", precio: 60000, categoria: "Componentes", descripcion: "8 GB GDDR6, diseño térmico avanzado" },
    { tipo: "Monitor", marca: "Samsung", modelo: "Odyssey G7", precio: 10000, categoria: "Periféricos", descripcion: "32 pulgadas, resolución 2K, 240 Hz" },
    { tipo: "Mouse", marca: "HyperX", modelo: "Pulsefire FPS Pro", precio: 4500, categoria: "Periféricos", descripcion: "Sensor Pixart 3389, iluminación RGB" },
    { tipo: "Teclado", marca: "Ducky", modelo: "One 2 Mini", precio: 6000, categoria: "Periféricos", descripcion: "Teclas PBT de doble disparo, diseño compacto" },
    { tipo: "Procesador", marca: "AMD", modelo: "Ryzen 5 5600X", precio: 19000, categoria: "Componentes", descripcion: "6 núcleos, 12 hilos, frecuencia base 3.7 GHz" },
    { tipo: "Placa de Video", marca: "NVIDIA", modelo: "GeForce GTX 1660 Super", precio: 35000, categoria: "Componentes", descripcion: "6 GB GDDR5, alto rendimiento en juegos" },
    { tipo: "Monitor", marca: "BenQ", modelo: "PD2700U", precio: 9000, categoria: "Periféricos", descripcion: "27 pulgadas, 4K UHD, calibración de color" },
    { tipo: "Mouse", marca: "Razer", modelo: "DeathAdder Elite", precio: 5200, categoria: "Periféricos", descripcion: "Sensor óptico 16,000 DPI, retroiluminación Chroma" },
    { tipo: "Teclado", marca: "Logitech", modelo: "G Pro X Mechanical Gaming", precio: 8500, categoria: "Periféricos", descripcion: "Teclas intercambiables, diseño compacto" },
    { tipo: "Procesador", marca: "Intel", modelo: "Core i5-11600K", precio: 18000, categoria: "Componentes", descripcion: "6 núcleos, 12 hilos, frecuencia base 3.9 GHz" },
    { tipo: "Placa de Video", marca: "AMD", modelo: "Radeon RX 6700 XT", precio: 55000, categoria: "Componentes", descripcion: "12 GB GDDR6, excelente rendimiento en 2K" },
    { tipo: "Monitor", marca: "AOC", modelo: "CQ32G1", precio: 6500, categoria: "Periféricos", descripcion: "31.5 pulgadas, resolución 2K, 144 Hz" },
    { tipo: "Mouse", marca: "Glorious", modelo: "Model O", precio: 6900, categoria: "Periféricos", descripcion: "Sensor óptico Pixart 3360, diseño ligero" },
    { tipo: "Teclado", marca: "SteelSeries", modelo: "Apex Pro TKL", precio: 9200, categoria: "Periféricos", descripcion: "Switches ajustables, retroiluminación RGB" },
    { tipo: "Procesador", marca: "AMD", modelo: "Ryzen 3 3300X", precio: 12000, categoria: "Componentes", descripcion: "4 núcleos, 8 hilos, frecuencia base 3.8 GHz" },
    { tipo: "Placa de Video", marca: "NVIDIA", modelo: "GeForce GTX 1650 Super", precio: 30000, categoria: "Componentes", descripcion: "4 GB GDDR6, rendimiento para juegos" },
    { tipo: "Monitor", marca: "Dell", modelo: "S2719DGF", precio: 7000, categoria: "Periféricos", descripcion: "27 pulgadas, resolución 2K, 155 Hz" },
    { tipo: "Mouse", marca: "Cooler Master", modelo: "MM710", precio: 5500, categoria: "Periféricos", descripcion: "Ultraligero, sensor Pixart PMW3389" },
    { tipo: "Teclado", marca: "Ducky", modelo: "One 2 Mini", precio: 6000, categoria: "Periféricos", descripcion: "Teclas PBT de doble disparo, diseño compacto" },
    { tipo: "Procesador", marca: "Intel", modelo: "Core i3-10100", precio: 11000, categoria: "Componentes", descripcion: "4 núcleos, 8 hilos, frecuencia base 3.6 GHz" },
    { tipo: "Placa de Video", marca: "AMD", modelo: "Radeon RX 5500 XT", precio: 22000, categoria: "Componentes", descripcion: "8 GB GDDR6, rendimiento en juegos" },
    { tipo: "Monitor", marca: "Asus", modelo: "VG279Q", precio: 4000, categoria: "Periféricos", descripcion: "27 pulgadas, resolución Full HD, 144 Hz" },
    { tipo: "Mouse", marca: "Logitech", modelo: "G502 Hero", precio: 6000, categoria: "Periféricos", descripcion: "Sensor HERO 16K, 11 botones programables" },
    { tipo: "Teclado", marca: "HyperX", modelo: "Alloy FPS Pro", precio: 4800, categoria: "Periféricos", descripcion: "Compacto, teclas mecánicas Cherry MX" },
    { tipo: "Procesador", marca: "AMD", modelo: "Ryzen 9 3950X", precio: 40000, categoria: "Componentes", descripcion: "16 núcleos, 32 hilos, frecuencia base 3.5 GHz" },
    { tipo: "Placa de Video", marca: "NVIDIA", modelo: "GeForce GTX 1660", precio: 32000, categoria: "Componentes", descripcion: "6 GB GDDR5, rendimiento en juegos" },
    { tipo: "Monitor", marca: "ViewSonic", modelo: "XG2402", precio: 4500, categoria: "Periféricos", descripcion: "24 pulgadas, resolución Full HD, 144 Hz" },
    { tipo: "Mouse", marca: "Corsair", modelo: "Harpoon RGB", precio: 3500, categoria: "Periféricos", descripcion: "Sensor óptico 6,000 DPI, diseño ergonómico" },
    { tipo: "Teclado", marca: "Roccat", modelo: "Suora FX", precio: 5200, categoria: "Periféricos", descripcion: "Teclas retroiluminadas, diseño sin teclado numérico" },
];

function busqueda(busqueda) {

    busqueda = busqueda.value;
    limpiarResultados();

    if (busqueda === "" || busqueda === null) {
        for (const producto of productos) {
            revisionFiltrado(producto)
        }
    } else {
        busqueda = busqueda.toLowerCase();
        for (const producto of productos) {
            if (producto.modelo.toLowerCase().includes(busqueda) || producto.marca.toLowerCase().includes(busqueda) || producto.tipo.toLowerCase().includes(busqueda)) {
                revisionFiltrado(producto);
            }
        }
    }
    if (document.getElementById("productos").innerHTML === "") {
        document.getElementById("productos").innerHTML = "<h3> No se encontraron resultados </h3>"
    }
}

function limpiarResultados() {
    let lista = document.getElementById('productos')
    lista.innerHTML = '';
}

function crearTarjeta(producto) {

    let tarjeta = document.createElement("div")
    tarjeta.innerHTML = `
        <h3>${producto.tipo} ${producto.marca} ${producto.modelo}</h3>
        <p>${producto.descripcion}</p>
        <h4>$${producto.precio} ARS</h4>`
    tarjeta.setAttribute("class", "tarjeta-producto")

    document.getElementById("productos").append(tarjeta);
}

function revisionFiltrado(producto) {


    console.log('entre a revision');
    let filtroMarca = document.getElementById("filtro-marca").value;
    let filtroTipo = document.getElementById("filtro-tipo").value;

    if (filtroMarca != "") {
        filtroMarca = filtroMarca.toLowerCase()
    }
    if (filtroTipo != "") {
        filtroTipo = filtroTipo.toLowerCase()
    }

    if (filtroMarca === "" && filtroTipo === "") {
        crearTarjeta(producto)

    } else if (filtroMarca === "") {
        if (producto.tipo.toLowerCase() === filtroTipo) {
            crearTarjeta(producto)

        }
    } else if (filtroTipo === "") {
        if (producto.marca.toLowerCase() === filtroMarca) {
            crearTarjeta(producto)

        }
    } else {
        if (producto.tipo.toLowerCase() === filtroTipo && producto.marca.toLowerCase() === filtroMarca) {
            crearTarjeta(producto)

        }
    }

}