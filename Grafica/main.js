document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("realTimeChart").getContext("2d");

    let dataValues = [];
    let labels = [];
    let counter = 0;

    const chart = new Chart(ctx, {
        type: "line",
        data: {
            labels: labels,
            datasets: [{
                label: "Precio del Dólar (MXN)",
                backgroundColor: "rgba(32, 136, 212, 0.6)",
                borderColor: "rgb(32, 136, 212)",
                borderWidth: 2,
                fill: false,
                data: dataValues,
            }]
        },
        options: {
            animation: false,
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: { title: { display: true, text: "Tiempo" } },
                y: { title: { display: true, text: "Precio (MXN)" }, beginAtZero: false }
            }
        }
    });

    async function fetchDollarPrice() {
        try {
            const response = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
            const data = await response.json();
            const price = data.rates.MXN; // Precio del dólar en pesos mexicanos

            dataValues.push(price);
            labels.push(counter++);

            if (dataValues.length > 10) {
                dataValues.shift();
                labels.shift();
            }

            chart.update();
        } catch (error) {
            console.error("Error obteniendo el precio del dólar:", error);
        }
    }

    setInterval(fetchDollarPrice, 1500);
});