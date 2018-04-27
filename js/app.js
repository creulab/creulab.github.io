window.sr = ScrollReveal();
sr.reveal('.showcase-text', {
	duration: 2000
	, origin: 'left'
	, distance: '1000px'
	, easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'
	, viewFactor: 0.2
});
sr.reveal('.showcase-left', {
	duration: 2000
	, origin: 'left'
	, distance: '300px'
	, viewFactor: 0.2
});
sr.reveal('.showcase-right', {
	duration: 2000
	, origin: 'right'
	, distance: '300px', //    delay: 1000,
	viewFactor: 0.2
});
sr.reveal('.showcase-btn', {
	duration: 2000
	, delay: 1000
	, origin: 'top'
	, distance: '300px'
});
sr.reveal('.showcase-text2', {
	duration: 2000
	, origin: 'right'
	, distance: '1000px'
	, easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'
	, viewFactor: 0.2
});
sr.reveal('#testimonial div', {
	duration: 2000
	, origin: 'bottom'
});
sr.reveal('.info-left', {
	duration: 2000
	, origin: 'left'
	, distance: '300px'
	, viewFactor: 0.2
});
sr.reveal('.info-right', {
	duration: 2000
	, origin: 'right'
	, distance: '300px'
	, viewFactor: 0.2
});
sr.reveal('.info-mid', {
	duration: 2000
	, origin: 'top'
	, distance: '300px'
	, viewFactor: 0.2
});
sr.reveal('.ease-in', {
	duration: 2000
	, easing: 'ease-in'
})