const canvas = document.getElementById('flor');
const ctx = canvas.getContext('2d');

// Variables para animación
let anguloRotacion = 0;
let escalaFlor = 0;
let crecimiento = 0.01;

// Función para dibujar una flor
function dibujarFlor(xCentro, yCentro, anguloRotacion, escalaFlor, petalos, colorBase) {
    // Tallo
    ctx.beginPath();
    ctx.moveTo(xCentro, yCentro + (100 * (1 - escalaFlor)));
    ctx.lineTo(xCentro, yCentro + 100);
    ctx.strokeStyle = '#228B22';
    ctx.lineWidth = 10;
    ctx.stroke();

    // Hojas
    ctx.beginPath();
    ctx.ellipse(xCentro - 20, yCentro + 50, 20 * escalaFlor, 10 * escalaFlor, Math.PI / 4, 0, Math.PI * 2);
    ctx.fillStyle = '#228B22';
    ctx.fill();

    ctx.beginPath();
    ctx.ellipse(xCentro + 20, yCentro + 30, 20 * escalaFlor, 10 * escalaFlor, -Math.PI / 4, 0, Math.PI * 2);
    ctx.fillStyle = '#228B22';
    ctx.fill();

    // Centro de la flor
    ctx.beginPath();
    ctx.arc(xCentro, yCentro, 20 * escalaFlor, 0, Math.PI * 2);
    ctx.fillStyle = '#FFD700';
    ctx.fill();

    // Pétalos
    const radioPetalo = 40 * escalaFlor;
    for (let i = 0; i < petalos; i++) {
        const angulo = anguloRotacion + (i * Math.PI * 2) / petalos;
        const x = xCentro + Math.cos(angulo) * radioPetalo;
        const y = yCentro + Math.sin(angulo) * radioPetalo;

        ctx.beginPath();
        ctx.ellipse(x, y, 30 * escalaFlor, 10 * escalaFlor, angulo, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${(i * 360) / petalos + colorBase}, 100%, 70%)`;
        ctx.fill();
    }
}

// Iniciar animación
animar();
function animar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#f0f8ff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    anguloRotacion += 0.01;
    if (escalaFlor < 1) {
        escalaFlor += crecimiento;
    } else {
        escalaFlor = 1;
    }

  // Flor 1 (8 pétalos, rosa)
dibujarFlor(150, 250, anguloRotacion, escalaFlor, 8, 0);

// Flor 2 (8 pétalos, azul)
dibujarFlor(300, 250, -anguloRotacion * 1.2, escalaFlor * 0.8, 8, 220);

// Flor 3 (8 pétalos, verde)
dibujarFlor(450, 250, 0, 0.6, 8, 120);

    requestAnimationFrame(animar);
}
