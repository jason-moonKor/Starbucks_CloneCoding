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

//현재 년도 FOOTER부분에 적용하는 부분
const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();
