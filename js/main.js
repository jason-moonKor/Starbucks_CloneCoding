//헤더 검색바 부분
const searchElement = document.querySelector(".search");
const searchInputElement = searchElement.querySelector("input");

searchElement.addEventListener("click", () => {
	searchInputElement.focus();
});

searchInputElement.addEventListener("focus", () => {
	searchElement.classList.add("focused");
	searchInputElement.setAttribute("placeholder", "통합검색");
});

searchInputElement.addEventListener("blur", () => {
	searchElement.classList.remove("focused");
	searchInputElement.setAttribute("placeholder", "");
});

// 뱃지 스크롤 부분
const badgeEl = document.querySelector("header .badges");
window.addEventListener(
	"scroll",
	_.throttle(() => {
		if (window.scrollY > 500) {
			//배찌 숨기기

			// gsap 라이브러리 사용
			// gsap.to(요소, 지속시간(초), 옵션(객체));
			gsap.to(badgeEl, 0.6, {
				opacity: 0,
				display: "none"
			});
		} else {
			//배찌 보이기
			gsap.to(badgeEl, 0.6, {
				opacity: 1,
				display: "block"
			});
		}
	}, 300)
); //Lodash 라이브러리를 이용한 _.throttle함수. 1000이면 1초동안 들어오는거 횟수 다 무시하고 한번만 출력

// title 이미지 시간별로 나타내기
const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach((item, idx) => {
	gsap.to(item, 1, {
		delay: (idx + 1) * 0.5, //첫번째 index = 0.5초후에 나타나고 다음인덱스는 1.0, 1.5 이런식으로 나온다
		opacity: 1
	});
});

// swiper 라이브러리 사용
// new swiper(선택자, 옵션)
new Swiper(".notice-line .swiper-container", {
	direction: "vertical",
	autoplay: true,
	loop: true
});

new Swiper(".promotion .swiper-container", {
	slidesPerView: 3, //한번에 보여줄 슬라이드 갯수
	spaceBetween: 10, //슬라이드 사이 여백
	centeredSlides: true, //1번 슬라이드가 가운데 보여지게함
	loop: true,
	// autoplay: {
	// 	delay: 3000 //ms단위 3000이 기본
	// },
	pagination: {
		el: ".promotion .swiper-pagination", //페이지 번호 요소 선택자
		clickable: true //사용자의 페이지 번호 요소 제어가능 여부
	},
	navigation: {
		prevEl: ".promotion .swiper-prev",
		nextEl: ".promotion .swiper-next"
	}
});
