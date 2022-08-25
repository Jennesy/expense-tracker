const pieChart = document.getElementById('pieChart')
const recordData = JSON.parse(pieChart.dataset.percentage)
const amountList = Object.values(recordData).map((category) => category.amount)
const colorList = Object.values(recordData).map((category) => category.color)
const data = {
	labels: Object.keys(recordData),
	datasets: [
		{
			label: 'My First Dataset',
			data: amountList,
			backgroundColor: colorList,
			hoverOffset: 4,
		},
	],
}
const myChart = new Chart(pieChart, {
	type: 'doughnut',
	data: data,
})
