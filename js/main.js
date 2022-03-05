"use strict";

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

// 뱃지 스크롤 부분( gsap 라이브러리)
const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");

window.addEventListener(
	"scroll",
	_.throttle(() => {
		if (window.scrollY > 500) {
			//배찌 숨기기
			// gsap.to(요소, 지속시간(초), 옵션(객체));
			gsap.to(badgeEl, 0.6, {
				opacity: 0,
				display: "none"
			});
			//맨위로가기 버튼 보이기
			gsap.to(toTopEl, 0.2, {
				x: 0
			});
		} else {
			//배찌 보이기
			gsap.to(badgeEl, 0.6, {
				opacity: 1,
				display: "block"
			});
			//맨위로가기 버튼 숨기기
			gsap.to(toTopEl, 0.2, {
				x: 100
			});
		}
	}, 300)
); //Lodash 라이브러리를 이용한 _.throttle함수. 1000이면 1초동안 들어오는거 횟수 다 무시하고 한번만 출력

// 맨위로가기 버튼 구현
toTopEl.addEventListener("click", () => {
	gsap.to(window, 0.7, {
		scrollTo: 0 // gsap ScrollToPlugin 라이브러리가 있어야만 사용가능
	});
});

// title 이미지 시간별로 나타내기
const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach((item, idx) => {
	gsap.to(item, 1, {
		delay: (idx + 1) * 0.5, //첫번째 index = 0.5초후에 나타나고 다음인덱스는 1.0, 1.5 이런식으로 나온다
		opacity: 1
	});
});

// 프로모션 토글버튼 구현
const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;

promotionToggleBtn.addEventListener("click", () => {
	isHidePromotion = !isHidePromotion;
	if (isHidePromotion) {
		//숨김처리
		promotionEl.classList.add("hide");
	} else {
		//나타내기처리
		promotionEl.classList.remove("hide");
	}
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
	autoplay: {
		delay: 3000 //ms단위 3000이 기본
	},
	pagination: {
		el: ".promotion .swiper-pagination", //페이지 번호 요소 선택자
		clickable: true //사용자의 페이지 번호 요소 제어가능 여부
	},
	navigation: {
		prevEl: ".promotion .swiper-prev",
		nextEl: ".promotion .swiper-next"
	}
});

new Swiper(".awards .swiper-container", {
	autoplay: true,
	loop: true,
	spaceBetween: 30,
	slidesPerView: 5,
	navigation: {
		prevEl: ".awards .swiper-prev",
		nextEl: ".awards .swiper-next"
	}
});

// 랜덤함수
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
	// `.toFixed()`를 통해 반환된 문자 데이터를,
	// `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
	return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
	gsap.to(selector, random(1.5, 2.5), {
		y: size,
		repeat: -1, //무한반복
		yoyo: true, //다시 돌아감
		ease: Power1.easeInOut,
		delay: random(0, delay)
	});
}
floatingObject(".floating1", 1, 20);
floatingObject(".floating2", 0.5, 25);
floatingObject(".floating3", 1.5, 30);

// ScrollMagic 라이브러리 사용
const spyEls = document.querySelectorAll("section.scroll-spy");

spyEls.forEach((item) => {
	new ScrollMagic.Scene({
		triggerElement: item, //보여짐 여부를 감시할 요소
		triggerHook: 0.8 //0이 화면맨위 1이 화면맨아래
	})
		.setClassToggle(item, "show")
		.addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();
