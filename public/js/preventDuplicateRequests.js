const disableBtns = document.querySelectorAll('[data-click-disabled]')
if (disableBtns) {
	Array.from(disableBtns).forEach((btn) => {
		btn.addEventListener('click', handleClick)
	})
}
const submitBtn = document.querySelector('[data-submit-disabled]')
if (submitBtn) {
	submitBtn.addEventListener('click', handleSubmit)
}

function handleClick({ target }) {
	if (target.getAttribute('data-disabled-group')) {
		Array.from(document.querySelectorAll('[data-disabled-group]')).forEach(
			(btn) => setDisable(btn)
		)
	} else {
		setDisable(target)
	}
}
function handleSubmit({ target }) {
	if (document.querySelector('form').checkValidity()) {
		document.querySelector('form').submit()
		setDisable(target)
	}
}

function setDisable(btn) {
	if (btn.getAttribute('data-click-disabled') === 'pointerEvents') {
		btn.style.pointerEvents = 'none'
	} else {
		btn.setAttribute('disabled', '')
	}
	btn.innerHTML = '處理中...'
}
