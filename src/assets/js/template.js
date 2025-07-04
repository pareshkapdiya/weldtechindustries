/*
 * Version: 1.8
 * File Description: Initializations of plugins
 */

(function ($) {

	// USE STRICT
	"use strict";

	$(document).ready(function () {

		//Show dropdown on hover only for desktop devices
		//-----------------------------------------------
		if ($(window).width() > 751) {
			$('.main-navigation .navbar-nav>li.dropdown, .main-navigation li.dropdown>ul>li.dropdown').hover(
				function () {
					$(this).addClass('open').slideDown();
					$(this).find('.dropdown-toggle').addClass('disabled');
				}, function () {
					$(this).removeClass('open');
					$(this).find('.dropdown-toggle').removeClass('disabled');
				});
		};

		//Show dropdown on click only for mobile devices
		//-----------------------------------------------
		if ($(window).width() < 750) {
			$('.header [data-toggle=dropdown], .header-top [data-toggle=dropdown]').on('click', function (event) {
				event.preventDefault();
				event.stopPropagation();
				$(this).parent().siblings().removeClass('open');
				$(this).parent().siblings().find('[data-toggle=dropdown]').parent().removeClass('open');
				$(this).parent().toggleClass('open');
			});
		};

		//Main slider
		//-----------------------------------------------
		//Revolution Slider 5
		if ($(".slider-revolution-5-container").length > 0) {

			$(".tp-bannertimer").show();

			$('.slider-revolution-5-container .slider-banner-fullwidth').revolution({
				sliderType: "standard",
				sliderLayout: "fullwidth",
				delay: 9000,
				gridwidth: 1140,
				gridheight: 520,
				navigation: {
					onHoverStop: "off",
					arrows: {
						style: "hebe",
						enable: true,
						tmp: '<div class="tp-title-wrap"><span class="tp-arr-titleholder">{{title}}</span></div>',
						left: {
							h_align: "left",
							v_align: "center",
							h_offset: 0,
							v_offset: 0,
						},
						right: {
							h_align: "right",
							v_align: "center",
							h_offset: 0,
							v_offset: 0
						}
					},
					bullets: {
						style: "",
						enable: true,
						hide_onleave: true,
						direction: "horizontal",
						space: 3,
						h_align: "center",
						v_align: "bottom",
						h_offset: 0,
						v_offset: 20
					}
				}
			});
			$('.slider-revolution-5-container .slider-banner-2').revolution({
				sliderType: "standard",
				sliderLayout: "fullwidth",
				delay: 10000,
				startwidth: 1140,
				startheight: 520,
				navigation: {
					onHoverStop: "off",
					arrows: {
						style: "uranus",
						enable: true,
						tmp: '',
						left: {
							h_align: "left",
							v_align: "center",
							h_offset: 20,
							v_offset: 0,
						},
						right: {
							h_align: "right",
							v_align: "center",
							h_offset: 20,
							v_offset: 0
						}
					},
					bullets: {
						enable: true,
						hide_onmobile: false,
						style: "uranus",
						hide_onleave: true,
						direction: "horizontal",
						h_align: "center",
						v_align: "bottom",
						h_offset: 0,
						v_offset: 30,
						space: 7,
						tmp: '<span class="tp-bullet-inner"></span>'
					}
				}
			});
			$('.slider-revolution-5-container .slider-banner-3').revolution({
				sliderType: "standard",
				sliderLayout: "fullwidth",
				delay: 10000,
				startwidth: 1140,
				startheight: 520,
				dottedOverlay: "twoxtwo",
				navigation: {
					onHoverStop: "off",
					arrows: {
						style: "hephaistos",
						enable: true,
						hide_onmobile: false,
						hide_onleave: false,
						tmp: '',
						left: {
							h_align: "left",
							v_align: "center",
							h_offset: 10,
							v_offset: 0
						},
						right: {
							h_align: "right",
							v_align: "center",
							h_offset: 10,
							v_offset: 0
						}
					},
					bullets: {
						enable: false,
						hide_onmobile: false,
						style: "uranus",
						hide_onleave: true,
						direction: "horizontal",
						h_align: "center",
						v_align: "bottom",
						h_offset: 0,
						v_offset: 30,
						space: 7,
						tmp: '<span class="tp-bullet-inner"></span>'
					}
				}
			});
			$('.slider-revolution-5-container .slider-banner-boxedwidth').revolution({
				sliderType: "standard",
				sliderLayout: "auto",
				delay: 8000,
				gridwidth: 1140,
				gridheight: 520,
				shadow: 1,
				navigation: {
					onHoverStop: "off",
					arrows: {
						style: "hebe",
						enable: true,
						tmp: '<div class="tp-title-wrap"><span class="tp-arr-titleholder">{{title}}</span></div>',
						left: {
							h_align: "left",
							v_align: "center",
							h_offset: 0,
							v_offset: 0,
						},
						right: {
							h_align: "right",
							v_align: "center",
							h_offset: 0,
							v_offset: 0
						}
					},
					bullets: {
						style: "",
						enable: true,
						hide_onleave: true,
						direction: "horizontal",
						space: 3,
						h_align: "center",
						v_align: "bottom",
						h_offset: 0,
						v_offset: 20
					}
				}
			});
			if ($(".transparent.header").length > 0 || $(".offcanvas-container").length > 0) {
				$('.slider-revolution-5-container .slider-banner-fullscreen').revolution({
					sliderType: "standard",
					sliderLayout: "fullscreen",
					delay: 9000,
					autoHeight: "on",
					fullScreenOffsetContainer: "",
					navigation: {
						onHoverStop: "off",
						arrows: {
							style: "hebe",
							enable: true,
							tmp: '<div class="tp-title-wrap"><span class="tp-arr-titleholder">{{title}}</span></div>',
							left: {
								h_align: "left",
								v_align: "center",
								h_offset: 0,
								v_offset: 0,
							},
							right: {
								h_align: "right",
								v_align: "center",
								h_offset: 0,
								v_offset: 0
							}
						},
						bullets: {
							style: "",
							enable: true,
							hide_onleave: true,
							direction: "horizontal",
							space: 3,
							h_align: "center",
							v_align: "bottom",
							h_offset: 0,
							v_offset: 20
						}
					},
					gridwidth: 1140,
					gridheight: 750
				});
				$('.slider-revolution-5-container .slider-banner-fullscreen-2').revolution({
					sliderType: "standard",
					sliderLayout: "fullscreen",
					delay: 9000,
					autoHeight: "on",
					fullScreenOffsetContainer: "",
					navigation: {
						onHoverStop: "off",
						arrows: {
							style: "hermes",
							enable: true,
							hide_onmobile: false,
							hide_onleave: false,
							tmp: '<div class="tp-arr-allwrapper">	<div class="tp-arr-imgholder"></div>	<div class="tp-arr-titleholder">{{title}}</div>	</div>',
							left: {
								h_align: "left",
								v_align: "center",
								h_offset: 0,
								v_offset: 0
							},
							right: {
								h_align: "right",
								v_align: "center",
								h_offset: 0,
								v_offset: 0
							}
						},
						bullets: {
							style: "",
							enable: true,
							hide_onleave: true,
							direction: "horizontal",
							space: 3,
							h_align: "center",
							v_align: "bottom",
							h_offset: 0,
							v_offset: 20
						}
					},
					gridwidth: 1140,
					gridheight: 750
				});
				$('.slider-revolution-5-container .slider-banner-fullscreen-3').revolution({
					sliderType: "standard",
					sliderLayout: "fullscreen",
					delay: 9000,
					autoHeight: "on",
					fullScreenOffsetContainer: "",
					navigation: {
						keyboardNavigation: "on",
						keyboard_direction: "horizontal",
						mouseScrollNavigation: "off",
						onHoverStop: "off",
						touch: {
							touchenabled: "on",
							swipe_threshold: 75,
							swipe_min_touches: 1,
							swipe_direction: "horizontal",
							drag_block_vertical: false
						},
						arrows: {
							style: "ares",
							enable: true,
							hide_onmobile: false,
							hide_onleave: false,
							tmp: '<div class="tp-title-wrap">	<span class="tp-arr-titleholder">{{title}}</span> </div>',
							left: {
								h_align: "left",
								v_align: "center",
								h_offset: 10,
								v_offset: 0
							},
							right: {
								h_align: "right",
								v_align: "center",
								h_offset: 10,
								v_offset: 0
							}
						},
						bullets: {
							enable: true,
							hide_onmobile: false,
							style: "ares",
							hide_onleave: false,
							direction: "vertical",
							h_align: "right",
							v_align: "bottom",
							h_offset: 20,
							v_offset: 20,
							space: 5,
							tmp: '<span class="tp-bullet-title">{{title}}</span>'
						}
					},
					gridwidth: 1140,
					gridheight: 750
				});
			} else {
				$('.slider-revolution-5-container .slider-banner-fullscreen').revolution({
					sliderType: "standard",
					sliderLayout: "fullscreen",
					delay: 9000,
					autoHeight: "on",
					fullScreenOffsetContainer: "header.header, .header-top",
					navigation: {
						onHoverStop: "off",
						arrows: {
							style: "hebe",
							enable: true,
							tmp: '<div class="tp-title-wrap"><span class="tp-arr-titleholder">{{title}}</span></div>',
							left: {
								h_align: "left",
								v_align: "center",
								h_offset: 0,
								v_offset: 0,
							},
							right: {
								h_align: "right",
								v_align: "center",
								h_offset: 0,
								v_offset: 0
							}
						},
						bullets: {
							style: "",
							enable: true,
							hide_onleave: true,
							direction: "horizontal",
							space: 3,
							h_align: "center",
							v_align: "bottom",
							h_offset: 0,
							v_offset: 20
						}
					},
					gridwidth: 1140,
					gridheight: 750
				});
				$('.slider-revolution-5-container .slider-banner-fullscreen-2').revolution({
					sliderType: "standard",
					sliderLayout: "fullscreen",
					delay: 9000,
					autoHeight: "on",
					fullScreenOffsetContainer: "header.header, .header-top",
					navigation: {
						onHoverStop: "off",
						arrows: {
							style: "hermes",
							enable: true,
							hide_onmobile: false,
							hide_onleave: false,
							tmp: '<div class="tp-arr-allwrapper">	<div class="tp-arr-imgholder"></div>	<div class="tp-arr-titleholder">{{title}}</div>	</div>',
							left: {
								h_align: "left",
								v_align: "center",
								h_offset: 0,
								v_offset: 0
							},
							right: {
								h_align: "right",
								v_align: "center",
								h_offset: 0,
								v_offset: 0
							}
						},
						bullets: {
							style: "",
							enable: true,
							hide_onleave: true,
							direction: "horizontal",
							space: 3,
							h_align: "center",
							v_align: "bottom",
							h_offset: 0,
							v_offset: 20
						}
					},
					gridwidth: 1140,
					gridheight: 750
				});
				$('.slider-revolution-5-container .slider-banner-fullscreen-3').revolution({
					sliderType: "standard",
					sliderLayout: "fullscreen",
					delay: 9000,
					autoHeight: "on",
					fullScreenOffsetContainer: "header.header, .header-top",
					navigation: {
						keyboardNavigation: "on",
						keyboard_direction: "horizontal",
						mouseScrollNavigation: "off",
						onHoverStop: "off",
						touch: {
							touchenabled: "on",
							swipe_threshold: 75,
							swipe_min_touches: 1,
							swipe_direction: "horizontal",
							drag_block_vertical: false
						},
						arrows: {
							style: "ares",
							enable: true,
							hide_onmobile: false,
							hide_onleave: false,
							tmp: '<div class="tp-title-wrap">	<span class="tp-arr-titleholder">{{title}}</span> </div>',
							left: {
								h_align: "left",
								v_align: "center",
								h_offset: 10,
								v_offset: 0
							},
							right: {
								h_align: "right",
								v_align: "center",
								h_offset: 10,
								v_offset: 0
							}
						},
						bullets: {
							enable: true,
							hide_onmobile: false,
							style: "ares",
							hide_onleave: false,
							direction: "vertical",
							h_align: "right",
							v_align: "bottom",
							h_offset: 20,
							v_offset: 20,
							space: 5,
							tmp: '<span class="tp-bullet-title">{{title}}</span>'
						}
					},
					gridwidth: 1140,
					gridheight: 750
				});
			}
			$('.slider-revolution-5-container .slider-banner-fullscreen-hero:not(.dotted)').revolution({
				sliderType: "hero",
				sliderLayout: "fullscreen",
				gridwidth: 1140,
				gridheight: 650,
				delay: 9000
			});
		}

		//Owl carousel
		//-----------------------------------------------
		if ($('.owl-carousel').length > 0) {
			$(".owl-carousel.carousel").owlCarousel({
				items: 4,
				dots: false,
				nav: true,
				navText: false,
				autoplay: false,
				loop: true
			});
			$(".owl-carousel.carousel-autoplay").owlCarousel({
				items: 4,
				autoplay: true,
				autoplayTimeout: 5000,
				autoplaySpeed: 700,
				dots: false,
				nav: true,
				navText: false,
				loop: true
			});
			$(".owl-carousel.clients").owlCarousel({
				items: 3,
				autoplay: true,
				autoplayTimeout: 5000,
				autoplaySpeed: 700,
				dots: false,
				loop: true,
				responsive: {
					479: {
						items: 3
					},
					768: {
						items: 4
					},
					992: {
						items: 5
					},
					1200: {
						items: 5
					}
				}
			});
			$(".owl-carousel.content-slider").owlCarousel({
				items: 1,
				autoplay: true,
				autoplayTimeout: 5000,
				autoplaySpeed: 700,
				nav: false,
				navText: false,
				dots: false,
				loop: true
			});
			$(".owl-carousel.content-slider-with-controls").owlCarousel({
				items: 1,
				nav: true,
				navText: false,
				dots: true,
				autoplay: false,
				loop: true
			});
			$(".owl-carousel.content-slider-with-controls-autoplay").owlCarousel({
				items: 1,
				autoplay: true,
				autoplayTimeout: 5000,
				autoplaySpeed: 700,
				nav: true,
				navText: false,
				dots: true,
				loop: true
			});
			$(".owl-carousel.content-slider-with-controls-bottom").owlCarousel({
				items: 1,
				nav: true,
				navText: false,
				autoplay: false,
				dots: true,
				loop: true
			});
		};

		// Animations
		//-----------------------------------------------
		if ($("[data-animation-effect]").length > 0) {
			$("[data-animation-effect]").each(function () {
				var delay = 0;
				var item = $(this),
					animationEffect = item.attr("data-animation-effect");
				item.appear(function () {
					if (item.attr("data-effect-delay")) item.css("effect-delay", delay + "ms");
					setTimeout(function () {
						item.addClass('animated object-visible ' + animationEffect);

					}, item.attr("data-effect-delay"));
				}, { accX: 0, accY: -130 });
			});
		};

		// Text Rotators
		//-----------------------------------------------
		if ($(".text-rotator").length > 0) {
			var typed = new Typed('#text-rotator', {
				stringsElement: '#text-rotator-text',
				typeSpeed: 40,
				backSpeed: 30,
				backDelay: 4000,
				smartBackspace: true,
				loop: true
			});
		};

		// Stats Count To
		//-----------------------------------------------
		if ($(".stats [data-to]").length > 0) {
			$(".stats [data-to]").each(function () {
				var stat_item = $(this),
					offset = stat_item.offset().top;
				if ($(window).scrollTop() > (offset - 800) && !(stat_item.hasClass('counting'))) {
					stat_item.addClass('counting');
					stat_item.countTo();
				};
				$(window).scroll(function () {
					if ($(window).scrollTop() > (offset - 800) && !(stat_item.hasClass('counting'))) {
						stat_item.addClass('counting');
						stat_item.countTo();
					}
				});
			});
		};

		// Isotope filters
		//-----------------------------------------------
		if ($('.isotope-container').length > 0 || $('.masonry-grid').length > 0 || $('.masonry-grid-fitrows').length > 0) {
			$('.masonry-grid').isotope({
				itemSelector: '.masonry-grid-item',
				layoutMode: 'masonry'
			});
			$('.masonry-grid-fitrows').isotope({
				itemSelector: '.masonry-grid-item',
				layoutMode: 'fitRows'
			});
			$('.isotope-container').fadeIn();
			var $container = $('.isotope-container').imagesLoaded(function () {
				$container.isotope({
					itemSelector: '.isotope-item',
					layoutMode: 'masonry',
					transitionDuration: '0.6s',
					filter: "*"
				});
			});
			// filter items on button click
			$('.filters').on('click', 'ul.nav li a', function () {
				var filterValue = $(this).attr('data-filter');
				$(".filters").find("li.active").removeClass("active");
				$(this).parent().addClass("active");
				$container.isotope({ filter: filterValue });
				return false;
			});
		};

		//hc-tabs
		//-----------------------------------------------
		if ($('.hc-tabs').length > 0) {
			$(window).on('load', function (e) {
				var currentTab = $(".hc-tabs .nav.nav-tabs li.active a").attr("href"),
					tabsImageAnimation = $(".hc-tabs-top").find("[data-tab='" + currentTab + "']").attr("data-tab-animation-effect");
				$(".hc-tabs-top").find("[data-tab='" + currentTab + "']").addClass("current-img show " + tabsImageAnimation + " animated");

				$('.hc-tabs .nav.nav-tabs li a').on('click', function (event) {
					var currentTab = $(this).attr("href"),
						tabsImageAnimation = $(".hc-tabs-top").find("[data-tab='" + currentTab + "']").attr("data-tab-animation-effect");
					$(".current-img").removeClass("current-img show " + tabsImageAnimation + " animated");
					$(".hc-tabs-top").find("[data-tab='" + currentTab + "']").addClass("current-img show " + tabsImageAnimation + " animated");
				});
			});

		}

		// Animated Progress Bars
		//-----------------------------------------------
		if ($("[data-animate-width]").length > 0) {
			$("[data-animate-width]").each(function () {
				$(this).appear(function () {
					$(this).animate({
						width: $(this).attr("data-animate-width")
					}, 800);
				}, { accX: 0, accY: -100 });
			});
		};

		// Charts
		//-----------------------------------------------
		if ($(".graph").length > 0) {
			// Creates random numbers you don't need this for real graphs
			var randomScalingFactor = function () { return Math.round(Math.random() * 500) };

			if ($(".graph.line").length > 0) {
				(function () {
					// Data for line charts
					var lineChartData = {
						labels: ["January", "February", "March", "April", "May", "June", "July"],
						datasets: [
							{
								label: "My First dataset",
								fill: false,
								lineTension: 0.1,
								backgroundColor: "rgba(75,192,192,0.4)",
								borderColor: "rgba(75,192,192,1)",
								borderCapStyle: 'butt',
								borderDash: [],
								borderDashOffset: 0.0,
								borderJoinStyle: 'miter',
								pointBorderColor: "rgba(75,192,192,1)",
								pointBackgroundColor: "#fff",
								pointBorderWidth: 1,
								pointHoverRadius: 5,
								pointHoverBackgroundColor: "rgba(75,192,192,1)",
								pointHoverBorderColor: "rgba(220,220,220,1)",
								pointHoverBorderWidth: 2,
								pointRadius: 1,
								pointHitRadius: 10,
								data: [65, 59, 80, 81, 56, 55, 40],
								spanGaps: false,
							}
						]
					};

					// Line Charts Initialization
					var ctx = document.getElementById("lines-graph").getContext("2d");
					var LineChart = new Chart(ctx, {
						type: 'line',
						data: lineChartData,
						responsive: true,
						bezierCurve: false
					});
				})();
			}
			if ($(".graph.bar").length > 0) {
				(function () {
					// Data for bar charts
					var barChartData = {
						labels: ["January", "February", "March", "April", "May", "June", "July"],
						datasets: [
							{
								label: "My First dataset",
								backgroundColor: [
									'rgba(255, 99, 132, 0.2)',
									'rgba(54, 162, 235, 0.2)',
									'rgba(255, 206, 86, 0.2)',
									'rgba(75, 192, 192, 0.2)',
									'rgba(153, 102, 255, 0.2)',
									'rgba(255, 159, 64, 0.2)'
								],
								borderColor: [
									'rgba(255,99,132,1)',
									'rgba(54, 162, 235, 1)',
									'rgba(255, 206, 86, 1)',
									'rgba(75, 192, 192, 1)',
									'rgba(153, 102, 255, 1)',
									'rgba(255, 159, 64, 1)'
								],
								borderWidth: 1,
								data: [65, 59, 80, 81, 56, 55, 40],
							}
						]
					};

					// Bar Charts Initialization
					var ctx = document.getElementById("bars-graph").getContext("2d");
					var BarChart = new Chart(ctx, {
						type: 'bar',
						data: barChartData,
						responsive: true
					});
				})();
			}
			if ($(".graph.pie").length > 0) {
				(function () {
					// Data for pie chart
					var pieData = {
						labels: [
							"Red",
							"Blue",
							"Yellow"
						],
						datasets: [
							{
								data: [300, 50, 100],
								backgroundColor: [
									"#FF6384",
									"#36A2EB",
									"#FFCE56"
								],
								hoverBackgroundColor: [
									"#FF6384",
									"#36A2EB",
									"#FFCE56"
								]
							}]
					};

					// Pie Chart Initialization
					var ctx = document.getElementById("pie-graph").getContext("2d");
					var PieChart = new Chart(ctx, {
						type: 'pie',
						data: pieData
					});
				})();
			}
			if ($(".graph.doughnut").length > 0) {
				(function () {
					// Data for doughnut chart
					var doughnutData = {
						labels: [
							"Red",
							"Blue",
							"Yellow"
						],
						datasets: [
							{
								data: [300, 50, 100],
								backgroundColor: [
									"#FF6384",
									"#36A2EB",
									"#FFCE56"
								],
								hoverBackgroundColor: [
									"#FF6384",
									"#36A2EB",
									"#FFCE56"
								]
							}]
					};

					// Doughnut Chart Initialization
					var ctx = document.getElementById("doughnut-graph").getContext("2d");
					var DoughnutChart = new Chart(ctx, {
						type: 'doughnut',
						data: doughnutData,
						responsive: true
					});
				})();
			}
		};

		// Magnific popup
		//-----------------------------------------------
		if (($(".popup-img").length > 0) || ($(".popup-iframe").length > 0) || ($(".popup-img-single").length > 0)) {
			$(".popup-img").magnificPopup({
				type: "image",
				gallery: {
					enabled: true,
				}
			});
			$(".popup-img-single").magnificPopup({
				type: "image",
				gallery: {
					enabled: false,
				}
			});
			$('.popup-iframe').magnificPopup({
				disableOn: 700,
				type: 'iframe',
				preloader: false,
				fixedContentPos: false
			});
		};

		// Fixed header
		//-----------------------------------------------
		(function () {
			var headerTopHeight = parseInt($(".header-top").outerHeight()) || 0,
				headerHeight = parseInt($("header.header.fixed").outerHeight()) || 0;
			$(window).scroll(function () {
				if (($(".header.fixed").length > 0)) {
					if (($(this).scrollTop() > headerTopHeight + headerHeight) && ($(window).width() > 767)) {
						$("body").addClass("fixed-header-on");
						$(".header.fixed").addClass('animated object-visible fadeInDown');
						if (!($(".header.transparent").length > 0)) {
							if ($(".banner:not(.header-top)").length > 0) {
								$(".banner").css("marginTop", (headerHeight) + "px");
							} else if ($(".page-intro").length > 0) {
								$(".page-intro").css("marginTop", (headerHeight) + "px");
							} else if ($(".page-top").length > 0) {
								$(".page-top").css("marginTop", (headerHeight) + "px");
							} else {
								$("section.main-container").css("marginTop", (headerHeight) + "px");
							}
						}
					} else {
						$("body").removeClass("fixed-header-on");
						$("section.main-container").css("marginTop", (0) + "px");
						$(".banner").css("marginTop", (0) + "px");
						$(".page-intro").css("marginTop", (0) + "px");
						$(".page-top").css("marginTop", (0) + "px");
						$(".header.fixed").removeClass('animated object-visible fadeInDown');
					}
				};
			});
		})();

		// Affix plugin
		//-----------------------------------------------
		if ($("#affix").length > 0) {
			$(window).on('load', function (e) {

				var affixBottom = $(".footer").outerHeight(true) + $(".subfooter").outerHeight(true) + $(".blogpost footer").outerHeight(true),
					affixTop = $("#affix").offset().top;

				if ($(".comments").length > 0) {
					affixBottom = affixBottom + $(".comments").outerHeight(true);
				}

				if ($(".comments-form").length > 0) {
					affixBottom = affixBottom + $(".comments-form").outerHeight(true);
				}

				if ($(".footer-top").length > 0) {
					affixBottom = affixBottom + $(".footer-top").outerHeight(true);
				}

				if ($(".header.fixed").length > 0) {
					$("#affix").affix({
						offset: {
							top: affixTop - 150,
							bottom: affixBottom + 100
						}
					});
				} else {
					$("#affix").affix({
						offset: {
							top: affixTop - 35,
							bottom: affixBottom + 100
						}
					});
				}

			});
		}
		if ($(".affix-menu").length > 0) {
			setTimeout(function () {
				var $sideBar = $('.sidebar')

				$sideBar.affix({
					offset: {
						top: function () {
							var offsetTop = $sideBar.offset().top
							return (this.top = offsetTop - 65)
						},
						bottom: function () {
							var affixBottom = $(".footer").outerHeight(true) + $(".subfooter").outerHeight(true)
							if ($(".footer-top").length > 0) {
								affixBottom = affixBottom + $(".footer-top").outerHeight(true)
							}
							return (this.bottom = affixBottom + 50)
						}
					}
				})
			}, 100)
		}

		//Smooth Scroll
		//-----------------------------------------------
		if ($(".smooth-scroll").length > 0) {
			if ($(".header.fixed").length > 0) {
				$(".smooth-scroll a, a.smooth-scroll").on("click", function (e) {
					var destination = $(this.hash);
					e.preventDefault();
					$('html,body').animate({
						scrollTop: destination.offset().top - 65
					}, 1000);
				});
			} else {
				$(".smooth-scroll a, a.smooth-scroll").on("click", function (e) {
					var destination = $(this.hash);
					e.preventDefault();
					$('html,body').animate({
						scrollTop: destination.offset().top
					}, 1000);
				});
			}
		}

		//Scroll Spy
		//-----------------------------------------------
		if ($(".scrollspy").length > 0) {
			$("body").addClass("scroll-spy");
			if ($(".fixed.header").length > 0) {
				$('body').scrollspy({
					target: '.scrollspy',
					offset: 85
				});
			} else {
				$('body').scrollspy({
					target: '.scrollspy',
					offset: 20
				});
			}
		}

		//Scroll totop
		//-----------------------------------------------
		$(window).scroll(function () {
			if ($(this).scrollTop() != 0) {
				$(".scrollToTop").fadeIn();
			} else {
				$(".scrollToTop").fadeOut();
			}
		});

		$(".scrollToTop").click(function () {
			$("body,html").animate({ scrollTop: 0 }, 800);
		});

		//Modal
		//-----------------------------------------------
		if ($(".modal").length > 0) {
			$(".modal").each(function () {
				$(".modal").prependTo("body");
			});
		}

		// Pricing tables popovers
		//-----------------------------------------------
		if ($(".pricing-tables").length > 0) {
			$(".plan .pt-popover").popover({
				trigger: 'hover'
			});
		};

		// Remove Button
		//-----------------------------------------------
		$(".btn-remove").click(function () {
			$(this).closest(".remove-data").remove();
		});

		// Shipping Checkbox
		//-----------------------------------------------
		if ($("#shipping-info-check").is(':checked')) {
			$("#shipping-information").hide();
		}
		$("#shipping-info-check").change(function () {
			if ($(this).is(':checked')) {
				$("#shipping-information").slideToggle();
			} else {
				$("#shipping-information").slideToggle();
			}
		});

		//This will prevent the event from bubbling up and close the dropdown when you type/click on text boxes (Header Top).
		//-----------------------------------------------
		$('.header-top .dropdown-menu input').click(function (e) {
			e.stopPropagation();
		});

		// Offcanvas side navbar
		//-----------------------------------------------

		if ($("#offcanvas").length > 0) {
			$('#offcanvas').offcanvas({
				disableScrolling: false,
				toggle: false
			});
		};

		if ($("#offcanvas").length > 0) {
			$('#offcanvas [data-toggle=dropdown]').on('click', function (event) {
				event.preventDefault();
				event.stopPropagation();
				$(this).parent().siblings().removeClass('open');
				$(this).parent().siblings().find('[data-toggle=dropdown]').parent().removeClass('open');
				$(this).parent().toggleClass('open');
			});
		};

	}); // End document ready

})(jQuery);

function initSliderRevolution() {

	(function ($) {

		// USE STRICT
		"use strict";

		$(document).ready(function () {

			//Main slider
			//-----------------------------------------------
			//Revolution Slider 5
			if ($(".slider-revolution-5-container").length > 0) {

				$(".tp-bannertimer").show();

				$('.slider-revolution-5-container .slider-banner-fullwidth').revolution({
					sliderType: "standard",
					sliderLayout: "fullwidth",
					delay: 9000,
					gridwidth: 1140,
					gridheight: 520,
					navigation: {
						onHoverStop: "off",
						arrows: {
							style: "hebe",
							enable: true,
							tmp: '<div class="tp-title-wrap"><span class="tp-arr-titleholder">{{title}}</span></div>',
							left: {
								h_align: "left",
								v_align: "center",
								h_offset: 0,
								v_offset: 0,
							},
							right: {
								h_align: "right",
								v_align: "center",
								h_offset: 0,
								v_offset: 0
							}
						},
						bullets: {
							style: "",
							enable: true,
							hide_onleave: true,
							direction: "horizontal",
							space: 3,
							h_align: "center",
							v_align: "bottom",
							h_offset: 0,
							v_offset: 20
						}
					}
				});
				$('.slider-revolution-5-container .slider-banner-2').revolution({
					sliderType: "standard",
					sliderLayout: "fullwidth",
					delay: 10000,
					startwidth: 1140,
					startheight: 520,
					navigation: {
						onHoverStop: "off",
						arrows: {
							style: "uranus",
							enable: true,
							tmp: '',
							left: {
								h_align: "left",
								v_align: "center",
								h_offset: 20,
								v_offset: 0,
							},
							right: {
								h_align: "right",
								v_align: "center",
								h_offset: 20,
								v_offset: 0
							}
						},
						bullets: {
							enable: true,
							hide_onmobile: false,
							style: "uranus",
							hide_onleave: true,
							direction: "horizontal",
							h_align: "center",
							v_align: "bottom",
							h_offset: 0,
							v_offset: 30,
							space: 7,
							tmp: '<span class="tp-bullet-inner"></span>'
						}
					}
				});
				$('.slider-revolution-5-container .slider-banner-3').revolution({
					sliderType: "standard",
					sliderLayout: "fullwidth",
					delay: 10000,
					startwidth: 1140,
					startheight: 520,
					dottedOverlay: "twoxtwo",
					navigation: {
						onHoverStop: "off",
						arrows: {
							style: "hephaistos",
							enable: true,
							hide_onmobile: false,
							hide_onleave: false,
							tmp: '',
							left: {
								h_align: "left",
								v_align: "center",
								h_offset: 10,
								v_offset: 0
							},
							right: {
								h_align: "right",
								v_align: "center",
								h_offset: 10,
								v_offset: 0
							}
						},
						bullets: {
							enable: false,
							hide_onmobile: false,
							style: "uranus",
							hide_onleave: true,
							direction: "horizontal",
							h_align: "center",
							v_align: "bottom",
							h_offset: 0,
							v_offset: 30,
							space: 7,
							tmp: '<span class="tp-bullet-inner"></span>'
						}
					}
				});
				$('.slider-revolution-5-container .slider-banner-boxedwidth').revolution({
					sliderType: "standard",
					sliderLayout: "auto",
					delay: 8000,
					gridwidth: 1140,
					gridheight: 520,
					shadow: 1,
					navigation: {
						onHoverStop: "off",
						arrows: {
							style: "hebe",
							enable: true,
							tmp: '<div class="tp-title-wrap"><span class="tp-arr-titleholder">{{title}}</span></div>',
							left: {
								h_align: "left",
								v_align: "center",
								h_offset: 0,
								v_offset: 0,
							},
							right: {
								h_align: "right",
								v_align: "center",
								h_offset: 0,
								v_offset: 0
							}
						},
						bullets: {
							style: "",
							enable: true,
							hide_onleave: true,
							direction: "horizontal",
							space: 3,
							h_align: "center",
							v_align: "bottom",
							h_offset: 0,
							v_offset: 20
						}
					}
				});
				if ($(".transparent.header").length > 0 || $(".offcanvas-container").length > 0) {
					$('.slider-revolution-5-container .slider-banner-fullscreen').revolution({
						sliderType: "standard",
						sliderLayout: "fullscreen",
						delay: 9000,
						autoHeight: "on",
						fullScreenOffsetContainer: "",
						navigation: {
							onHoverStop: "off",
							arrows: {
								style: "hebe",
								enable: true,
								tmp: '<div class="tp-title-wrap"><span class="tp-arr-titleholder">{{title}}</span></div>',
								left: {
									h_align: "left",
									v_align: "center",
									h_offset: 0,
									v_offset: 0,
								},
								right: {
									h_align: "right",
									v_align: "center",
									h_offset: 0,
									v_offset: 0
								}
							},
							bullets: {
								style: "",
								enable: true,
								hide_onleave: true,
								direction: "horizontal",
								space: 3,
								h_align: "center",
								v_align: "bottom",
								h_offset: 0,
								v_offset: 20
							}
						},
						gridwidth: 1140,
						gridheight: 750
					});
					$('.slider-revolution-5-container .slider-banner-fullscreen-2').revolution({
						sliderType: "standard",
						sliderLayout: "fullscreen",
						delay: 9000,
						autoHeight: "on",
						fullScreenOffsetContainer: "",
						navigation: {
							onHoverStop: "off",
							arrows: {
								style: "hermes",
								enable: true,
								hide_onmobile: false,
								hide_onleave: false,
								tmp: '<div class="tp-arr-allwrapper">	<div class="tp-arr-imgholder"></div>	<div class="tp-arr-titleholder">{{title}}</div>	</div>',
								left: {
									h_align: "left",
									v_align: "center",
									h_offset: 0,
									v_offset: 0
								},
								right: {
									h_align: "right",
									v_align: "center",
									h_offset: 0,
									v_offset: 0
								}
							},
							bullets: {
								style: "",
								enable: true,
								hide_onleave: true,
								direction: "horizontal",
								space: 3,
								h_align: "center",
								v_align: "bottom",
								h_offset: 0,
								v_offset: 20
							}
						},
						gridwidth: 1140,
						gridheight: 750
					});
					$('.slider-revolution-5-container .slider-banner-fullscreen-3').revolution({
						sliderType: "standard",
						sliderLayout: "fullscreen",
						delay: 9000,
						autoHeight: "on",
						fullScreenOffsetContainer: "",
						navigation: {
							keyboardNavigation: "on",
							keyboard_direction: "horizontal",
							mouseScrollNavigation: "off",
							onHoverStop: "off",
							touch: {
								touchenabled: "on",
								swipe_threshold: 75,
								swipe_min_touches: 1,
								swipe_direction: "horizontal",
								drag_block_vertical: false
							},
							arrows: {
								style: "ares",
								enable: true,
								hide_onmobile: false,
								hide_onleave: false,
								tmp: '<div class="tp-title-wrap">	<span class="tp-arr-titleholder">{{title}}</span> </div>',
								left: {
									h_align: "left",
									v_align: "center",
									h_offset: 10,
									v_offset: 0
								},
								right: {
									h_align: "right",
									v_align: "center",
									h_offset: 10,
									v_offset: 0
								}
							},
							bullets: {
								enable: true,
								hide_onmobile: false,
								style: "ares",
								hide_onleave: false,
								direction: "vertical",
								h_align: "right",
								v_align: "bottom",
								h_offset: 20,
								v_offset: 20,
								space: 5,
								tmp: '<span class="tp-bullet-title">{{title}}</span>'
							}
						},
						gridwidth: 1140,
						gridheight: 750
					});
				} else {
					$('.slider-revolution-5-container .slider-banner-fullscreen').revolution({
						sliderType: "standard",
						sliderLayout: "fullscreen",
						delay: 9000,
						autoHeight: "on",
						fullScreenOffsetContainer: "header.header, .header-top",
						navigation: {
							onHoverStop: "off",
							arrows: {
								style: "hebe",
								enable: true,
								tmp: '<div class="tp-title-wrap"><span class="tp-arr-titleholder">{{title}}</span></div>',
								left: {
									h_align: "left",
									v_align: "center",
									h_offset: 0,
									v_offset: 0,
								},
								right: {
									h_align: "right",
									v_align: "center",
									h_offset: 0,
									v_offset: 0
								}
							},
							bullets: {
								style: "",
								enable: true,
								hide_onleave: true,
								direction: "horizontal",
								space: 3,
								h_align: "center",
								v_align: "bottom",
								h_offset: 0,
								v_offset: 20
							}
						},
						gridwidth: 1140,
						gridheight: 750
					});
					$('.slider-revolution-5-container .slider-banner-fullscreen-2').revolution({
						sliderType: "standard",
						sliderLayout: "fullscreen",
						delay: 9000,
						autoHeight: "on",
						fullScreenOffsetContainer: "header.header, .header-top",
						navigation: {
							onHoverStop: "off",
							arrows: {
								style: "hermes",
								enable: true,
								hide_onmobile: false,
								hide_onleave: false,
								tmp: '<div class="tp-arr-allwrapper">	<div class="tp-arr-imgholder"></div>	<div class="tp-arr-titleholder">{{title}}</div>	</div>',
								left: {
									h_align: "left",
									v_align: "center",
									h_offset: 0,
									v_offset: 0
								},
								right: {
									h_align: "right",
									v_align: "center",
									h_offset: 0,
									v_offset: 0
								}
							},
							bullets: {
								style: "",
								enable: true,
								hide_onleave: true,
								direction: "horizontal",
								space: 3,
								h_align: "center",
								v_align: "bottom",
								h_offset: 0,
								v_offset: 20
							}
						},
						gridwidth: 1140,
						gridheight: 750
					});
					$('.slider-revolution-5-container .slider-banner-fullscreen-3').revolution({
						sliderType: "standard",
						sliderLayout: "fullscreen",
						delay: 9000,
						autoHeight: "on",
						fullScreenOffsetContainer: "header.header, .header-top",
						navigation: {
							keyboardNavigation: "on",
							keyboard_direction: "horizontal",
							mouseScrollNavigation: "off",
							onHoverStop: "off",
							touch: {
								touchenabled: "on",
								swipe_threshold: 75,
								swipe_min_touches: 1,
								swipe_direction: "horizontal",
								drag_block_vertical: false
							},
							arrows: {
								style: "ares",
								enable: true,
								hide_onmobile: false,
								hide_onleave: false,
								tmp: '<div class="tp-title-wrap">	<span class="tp-arr-titleholder">{{title}}</span> </div>',
								left: {
									h_align: "left",
									v_align: "center",
									h_offset: 10,
									v_offset: 0
								},
								right: {
									h_align: "right",
									v_align: "center",
									h_offset: 10,
									v_offset: 0
								}
							},
							bullets: {
								enable: true,
								hide_onmobile: false,
								style: "ares",
								hide_onleave: false,
								direction: "vertical",
								h_align: "right",
								v_align: "bottom",
								h_offset: 20,
								v_offset: 20,
								space: 5,
								tmp: '<span class="tp-bullet-title">{{title}}</span>'
							}
						},
						gridwidth: 1140,
						gridheight: 750
					});
				}
				$('.slider-revolution-5-container .slider-banner-fullscreen-hero:not(.dotted)').revolution({
					sliderType: "hero",
					sliderLayout: "fullscreen",
					gridwidth: 1140,
					gridheight: 650,
					delay: 9000
				});
			}

			//This will prevent the event from bubbling up and close the dropdown when you type/click on text boxes (Header Top).
			//-----------------------------------------------
			$('.header-top .dropdown-menu input').click(function (e) {
				e.stopPropagation();
			});

		}); // End document ready

	})(jQuery);

}

function initAnimationEffect() {
	// Animations
	//-----------------------------------------------
	if ($("[data-animation-effect]").length > 0) {
		$("[data-animation-effect]").each(function () {
			var delay = 0;
			var item = $(this),
				animationEffect = item.attr("data-animation-effect");
			item.appear(function () {
				if (item.attr("data-effect-delay")) item.css("effect-delay", delay + "ms");
				setTimeout(function () {
					item.addClass('animated object-visible ' + animationEffect);

				}, item.attr("data-effect-delay"));
			}, { accX: 0, accY: -130 });
		});
	};
}

function initMagnificPopup() {
	// Magnific popup
	//-----------------------------------------------
	if (($(".popup-img").length > 0) || ($(".popup-iframe").length > 0) || ($(".popup-img-single").length > 0)) {
		$(".popup-img").magnificPopup({
			type: "image",
			gallery: {
				enabled: true,
			}
		});
		$(".popup-img-single").magnificPopup({
			type: "image",
			gallery: {
				enabled: false,
			}
		});
		$('.popup-iframe').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			preloader: false,
			fixedContentPos: false
		});
	};
}

function initScrollTopBtn() {
	//Scroll totop
	//-----------------------------------------------
	$(window).scroll(function () {
		if ($(this).scrollTop() != 0) {
			$(".scrollToTop").fadeIn();
		} else {
			$(".scrollToTop").fadeOut();
		}
	});

	$(".scrollToTop").click(function () {
		$("body,html").animate({ scrollTop: 0 }, 800);
	});
}

function initOwlCarousel() {
	//Owl carousel
	//-----------------------------------------------
	if ($('.owl-carousel').length > 0) {
		$(".owl-carousel.carousel").owlCarousel({
			items: 4,
			dots: false,
			nav: true,
			navText: false,
			autoplay: false,
			loop: true
		});
		$(".owl-carousel.carousel-autoplay").owlCarousel({
			items: 4,
			autoplay: true,
			autoplayTimeout: 5000,
			autoplaySpeed: 700,
			dots: false,
			nav: true,
			navText: false,
			loop: true
		});
		$(".owl-carousel.clients").owlCarousel({
			items: 3,
			autoplay: true,
			autoplayTimeout: 5000,
			autoplaySpeed: 700,
			dots: false,
			loop: true,
			responsive: {
				479: {
					items: 3
				},
				768: {
					items: 4
				},
				992: {
					items: 5
				},
				1200: {
					items: 5
				}
			}
		});
		$(".owl-carousel.content-slider").owlCarousel({
			items: 1,
			autoplay: true,
			autoplayTimeout: 5000,
			autoplaySpeed: 700,
			nav: false,
			navText: false,
			dots: false,
			loop: true
		});
		$(".owl-carousel.content-slider-with-controls").owlCarousel({
			items: 1,
			nav: true,
			navText: false,
			dots: true,
			autoplay: false,
			loop: true
		});
		$(".owl-carousel.content-slider-with-controls-autoplay").owlCarousel({
			items: 1,
			autoplay: true,
			autoplayTimeout: 5000,
			autoplaySpeed: 700,
			nav: true,
			navText: false,
			dots: true,
			loop: true
		});
		$(".owl-carousel.content-slider-with-controls-bottom").owlCarousel({
			items: 1,
			nav: true,
			navText: false,
			autoplay: false,
			dots: true,
			loop: true
		});
	};
}

if (jQuery(".btn-print").length > 0) {
	function print_window() {
		var mywindow = window;
		mywindow.document.close();
		mywindow.focus();
		mywindow.print();
		mywindow.close();
	}
}