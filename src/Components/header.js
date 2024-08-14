//function to update the header images on mobile and desktop
function updateHeaderImg() {
  const headerImg = document.querySelector("[data-header-img]");

  const headerImgSrc = {
     "mobile" : '/images/bg-header-mobile.svg',     
     "desktop":'/images/bg-header-desktop.svg'
  };
  
  window.innerWidth > 380 ? headerImg.src = headerImgSrc.desktop :headerImg.src =  headerImgSrc.mobile;  
}

// function to handle the header mobile and desktop image
function handleHeaderImg() {
  window.addEventListener("load",updateHeaderImg);
  window.addEventListener("resize",updateHeaderImg);
}

handleHeaderImg();

