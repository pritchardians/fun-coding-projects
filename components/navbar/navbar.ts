/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
console.log("Top Nav code running");
const navBarResponsive = () => {
  let navBar = document.getElementById("top-nav");
  // console.log(navBar);
  if (navBar.className === "top-nav") {
    navBar.className += " responsive";
  } else {
    navBar.className = "top-nav";
  }
};
