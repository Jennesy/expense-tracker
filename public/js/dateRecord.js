const date = document.getElementById('date')
const config = {
	dateFormat: 'Y-m-d',
	maxDate: new Date(),
	disableMobile: 'true',
}
if (date.getAttribute('data-default-now')) {
	config.defaultDate = new Date()
}
const fp = flatpickr(date, config) // flatpickr
