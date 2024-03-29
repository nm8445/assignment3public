document.addEventListener("DOMContentLoaded", function() {
    // Immediately-invoked function to check login status
    (function() {
        if (!sessionStorage.getItem("user")) {
            // No user logged in, redirect to login page
            window.location.href = "login.html";
        }
    })();




    // Fetch and display the statistics data
    fetch('./data/statistics.json')
        .then(response => response.json())
        .then(data => {
            let dates = data.map(item => item.date);
            let visitors = data.map(item => item.visitors);




            let ctx = document.getElementById('visitorChart').getContext('2d');
            let visitorChart = new Chart(ctx, {
                type: 'line', // Change this to 'bar', 'pie', etc. based on your preference
                data: {
                    labels: dates,
                    datasets: [{
                        label: 'Visitors',
                        data: visitors,
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                font: {
                                    size: 14, // Adjust font size as needed
                                    weight: 'bold' // Make the font bold
                                },
                                color: 'white' // Set font color to white
                            }
                        },
                        x: {
                            ticks: {
                                font: {
                                    size: 14, // Adjust font size as needed
                                    weight: 'bold' // Make the font bold
                                },
                                color: 'white' // Set font color to white
                            }
                        }
                    },
                    legend: {
                        labels: {
                            color: 'white', // Set font color to white
                            fontSize: 16, // Adjust font size as needed
                            fontWeight: 'bold' // Make the font bold
                        }
                    },
                    plugins: {
                        legend: {
                            labels: {
                                color: 'white' // Set legend text color to white
                            }
                        }
                    }
                }
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});


