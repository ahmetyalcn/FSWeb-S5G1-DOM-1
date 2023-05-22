const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */
let navCount = Object.keys(siteContent.nav).length;
let j = 1;
for (let i = 0; i < navCount; i++) {
  document.querySelectorAll("nav a")[i].classList.add("italic")
  document.querySelectorAll("nav a")[i].textContent = siteContent.nav["nav-item-" + j]
  j++
}


document.getElementById("middle-img").src = siteContent.images["accent-img"];
for (let image in siteContent.images) {
  if (image === "accent-img") {
    continue; 
  }
  document.getElementById(image).src = siteContent.images[image];
}


document.querySelector(".cta h1").textContent = siteContent.cta["h1"]

document.querySelector(".cta-text button").textContent = siteContent.cta["button"]



/* Kodlar Buradan aşağıya */
let icerik = Object.keys(siteContent["ana-içerik"]);
let k = 0;
for (let i = 0; i < icerik.length / 2; i++) {

  document.querySelectorAll(".text-content h4")[i].textContent = siteContent["ana-içerik"][icerik[k]];
  document.querySelectorAll(".text-content p")[i].textContent = siteContent["ana-içerik"][icerik[k+1]];
  k=k+2;
  
}

document.querySelector(".contact h4").textContent = siteContent["iletisim"]["iletişim-h4"];


let iletisimk= Object.keys(siteContent.iletisim);
for (let i=0; i<iletisimk.length-1; i++) {
 
  document.querySelectorAll(".contact p")[i].textContent = siteContent.iletisim[iletisimk[i+1]]
  
}


document.querySelector("footer a").textContent = siteContent["footer"]["copyright"];
document.querySelector("footer a").classList.add("bold")