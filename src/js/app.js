window.addEventListener('scroll', function() {
	// let svg = document.querySelector('.header__social-link img');
	// if( window.scrollY > 0) {
	// 	svg.style.marginRight = '95px';
	// } else {
	// 	svg.style.marginRight = '15px';
	// }
	let header = document.querySelector('.header');
 
	header.classList.toggle('sticky', window.scrollY > 0);
	
})

$(document).ready(function(){
	$("img").click(function(){
	var t = $(this).attr("src");
	$(".modal-body").html("<img src='"+t+"' class='modal-img'>");
	$("#myModal").modal();
  });
  });//EOF Document.ready

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)




if (ScrollTrigger.isTouch !== 1) {

	ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.content',
		smooth: 1.5,
		effects: true
	})

	gsap.fromTo('.heroSection', { opacity: 1 }, {
		opacity: 0,
		scrollTrigger: {
			trigger: '.heroSection',
			start: 'center',
			end: '820',
			scrub: true
		}
	})

	let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')

	itemsL.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: -50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-850',
				end: '-100',
				scrub: true
			}
		})
	})

	let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')

	itemsR.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: 50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-750',
				end: 'top',
				scrub: true
			}
		})
	})

}


$(document).ready(function() {
    $("body").css("display", "none");

    $("body").fadeIn(2000);

	$("a.transition").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(1000, redirectPage);
	});

	function redirectPage() {
		window.location = linkLocation;
	}
});

