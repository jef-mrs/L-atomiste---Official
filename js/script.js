// window.onload = () => {
  const navButton = document.querySelector("#ma-navbar .nav-button");
  const menu = document.querySelector(".menu");
  const navItems = document.querySelectorAll(".nav-item");
  const pages = document.querySelectorAll(".pages");
  const radios = document.querySelectorAll(".showradio");
  const contact = document.getElementById("contact")

  navButton.addEventListener("click", function(event){
    event.stopPropagation();
    menu.classList.toggle("show");
  });

  document.addEventListener("click", () => {
    menu.classList.remove("show");
  });

  for( let navItem of navItems ){
    navItem.addEventListener("click", function(event){
      event.preventDefault();
      for(let item of navItems) {
        item.classList.remove("active");
      };
      for( let page of pages ){
        page.classList.add("none");
      };
      this.classList.add("active")
      const page = document.getElementById(this.dataset.page);
      page.classList.remove("none");

      if (this.dataset.contact === "true") {
        contact.classList.remove("none");
      } else {
        contact.classList.add("none");
      };
    })
  };

  for( let radio of radios) {
    radio.addEventListener("click", function(){
      const show = document.getElementById(this.dataset.radio);
      show.classList.toggle("hidden");
    })
  };

// }
