var productData = {
  id: "1",
  name: "Men Navy Blue Solid Sweatshirt",
  preview:
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
  photos: [
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg",
  ],
  description:
    "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
  size: [1, 1, 0, 1, 0],
  isAccessory: false,
  brand: "United Colors of Benetton",
  price: 2599,
}

var imageContainer = document.getElementById("image-container")
var detailsContainer = document.getElementById("details-container")
var productDetails = document.querySelector(".product-detials")

var leftImage = document.createElement("img")
leftImage.setAttribute("id", "mainImage")
leftImage.src = productData.preview
imageContainer.appendChild(leftImage)

var title = document.createElement("h1")
title.className = "product-name"
title.innerText = productData.name
productDetails.appendChild(title)

var brand = document.createElement("h4")
brand.className = "brand-name"
brand.innerText = productData.brand
productDetails.appendChild(brand)

var price = document.createElement("h3")
price.className = "price"
price.innerText = "price: Rs"
productDetails.appendChild(price)

var priceValue = document.createElement("span")
priceValue.className = "value"
priceValue.innerText = productData.price
price.appendChild(priceValue)

var description = document.createElement("h3")
description.className = "description"
description.innerText = "description"
productDetails.appendChild(description)

var descriptionText = document.createElement("p")
descriptionText.className = "description-text"
descriptionText.innerText = productData.description
productDetails.appendChild(descriptionText)

var productPreviewDiv = document.createElement("div")
productPreviewDiv.className = "product-preview"
productDetails.appendChild(productPreviewDiv)

var preText = document.createElement("h3")
preText.innerText = "Product Preview"
productPreviewDiv.appendChild(preText)

var PreviewImgDiv = document.createElement("div")
PreviewImgDiv.setAttribute("id", "preview-img")
console.log(PreviewImgDiv)
PreviewImgDiv.className = "preview-image"
productPreviewDiv.appendChild(PreviewImgDiv)

var previewPhotos = productData.photos

var previewImgDiv = document.getElementById("preview-img")

for (var i = 0; i < previewPhotos.length; i++) {
  if (i == 0) {
    previewImgDiv.innerHTML += ` <img  id ="img${i}" onclick =  "smallImageClicked('img${i}')"   class = "active" src= ${previewPhotos[i]}  /> `
  } else {
    previewImgDiv.innerHTML += ` <img  id = "img${i}" onclick =  "smallImageClicked('img${i}')" src= ${previewPhotos[i]}  /> `
  }
}

var mainLeftImg = document.getElementById("mainImage")
var currentActiveId = "img0"
function smallImageClicked(imageId) {
  var previewSmallImg = document.getElementById(imageId)
  mainLeftImg.src = previewSmallImg.src
  previewSmallImg.className = "active"
  var currentOnActiveElelement = document.getElementById(currentActiveId)
  if (currentActiveId == imageId) {
    currentOnActiveElelement.className = "active"
  } else {
    currentOnActiveElelement.className = "non-active"
  }
  currentActiveId = imageId
}

var button = document.createElement("button")
button.className = "btn"
button.innerText = "add to cart"
detailsContainer.appendChild(button)
