const labels = ["To do", "In progress", "Completed"];
const dataPie = [4,4,2];
const dataBar = [4,4,2];



const pieChart = new Chart(document.getElementById("pie-chart"), {
type: 'pie',
data: {
labels: labels,
datasets: [{
  backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
  data: dataPie
}]
},
options: {
title: {
  display: true,
  text: 'Percentage progress per state'
}
}
});

const barChart = new Chart(document.getElementById("bar-chart"), {
    type: 'horizontalBar',
    data: {
      labels: labels,
      datasets: [
        {
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
          data: [6,4,2,0]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Cards per list'
      }
    }
});


/// Radar chart
// const radarChart = new Chart(document.getElementById("radar-chart"), {
//     type: 'radar',
//     data: {
//       labels: labels,
//       datasets: [
//         {
//           label: "1950",
//           fill: true,
//           backgroundColor: "rgba(179,181,198,0.2)",
//           borderColor: "rgba(179,181,198,1)",
//           pointBorderColor: "#fff",
//           pointBackgroundColor: "rgba(179,181,198,1)",
//           data: [8.77,55.61,21.69,6.62,6.82]
//         }
//       ]
//     },
//     options: {
//       title: {
//         display: true,
//         text: 'Distribution in % of world population'
//       }
//     }
// });
