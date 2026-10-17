// Efecto de escritura en la página de inicio
const roles = [
    "Desarrollador de software en formación",
    "Apasionado por el código limpio",
    "Constructor de ideas digitales"
];

const destino = document.getElementById("rol");

if (destino) {
    const sinMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (sinMovimiento) {
        destino.textContent = roles[0];
    } else {
        let rolActual = 0;
        let letra = 0;
        let borrando = false;

        function escribir() {
            const texto = roles[rolActual];

            if (!borrando) {
                letra++;
                destino.textContent = texto.slice(0, letra);
                if (letra === texto.length) {
                    borrando = true;
                    return setTimeout(escribir, 1800);
                }
            } else {
                letra--;
                destino.textContent = texto.slice(0, letra);
                if (letra === 0) {
                    borrando = false;
                    rolActual = (rolActual + 1) % roles.length;
                }
            }
            setTimeout(escribir, borrando ? 35 : 70);
        }

        escribir();
    }
}
