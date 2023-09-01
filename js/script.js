const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// $(window).on("load", function () {
//   $(".loader-wrapper").fadeOut("slow");
// });

// 获取动画
let loader = document.querySelector(".loader");
// 加载完成事件
window.onload = function () {
  // 加载完成，隐藏动画，显示内容
  loader.style.display = "none";
  document.querySelector(".cover").style.display = "block";
};
