document.querySelectorAll('.tabs__trigger').forEach((trigger) => {
	trigger.addEventListener('click', e => {
		e.preventDefault();
		const id = e.target.getAttribute('href').replace('#', '');

		document.querySelectorAll('.tabs__trigger').forEach(
			(child) => child.classList.remove('tabs__trigger--active')
		);
		document.querySelectorAll('.tabs__tab').forEach(
			(child) => child.classList.remove('tabs__tab--active')
		);
		trigger.classList.add('tabs__trigger--active');
		document.getElementById(id).classList.add('tabs__tab--active');
	});
});
if (document.querySelector('.tabs__trigger')) {
	document.querySelector('.tabs__trigger').click();
}