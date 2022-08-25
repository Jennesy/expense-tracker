const startDate = document.getElementById('startDate')
const endDate = document.getElementById('endDate')
const config = {
	dateFormat: 'Y-m-d',
	maxDate: new Date(),
	disableMobile: 'true',
}
const startFp = flatpickr(startDate, config) // flatpickr
const endFp = flatpickr(endDate, config) // flatpickr
startDate.addEventListener('change', () => {
	endFp.set('minDate', startDate.value)
})
endDate.addEventListener('change', () => {
	startFp.set('maxDate', endDate.value)
})
