function closeNavbar(close) {
  close.style.display = "none";

  let open = document.getElementById("open");
  open.style.display = "block";

  let mobile = document.getElementById("ul_mobile");
  mobile.style.display = "none";
}