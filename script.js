const form = document.querySelector("form");
const imageURL = document.querySelector("#url");
const topTextInput = document.querySelector("#top-text");
const bottomTextInput = document.querySelector("#bottom-text");
const submitButton = document.querySelector("#submit");
const preview = document.querySelector("#preview");
const memeTopText = document.querySelector(".meme-top-text");
const memeBottomText = document.querySelector(".meme-bottom-text");
const meme = document.querySelector(".meme");
const gallery = document.querySelector(".gallery");

const validImageURL = /\.(jpg|jpeg|png|webp|avif|gif|svg)$/;

imageURL.addEventListener("input", isImage)

topTextInput.addEventListener("keyup", addTopText)

bottomTextInput.addEventListener("keyup", addBottomText)

submitButton.addEventListener("click", generateMeme)

gallery.addEventListener('mouseover', showTrashBin)

gallery.addEventListener('click', deleteMeme)

function isImage() {
  if(imageURL.value.match(validImageURL) !== null) {
    submitButton.disabled = false;
    submitButton.classList.remove("disabled");
    preview.src = imageURL.value;
  }
  else {
    submitButton.disabled = true;
    submitButton.classList.add("disabled");
    preview.src = "preview/doge-meme.png"
  }
}

function addTopText() {
  memeTopText.textContent = topTextInput.value;
}

function addBottomText() {
  memeBottomText.textContent = bottomTextInput.value;
}

function generateMeme(e) {
  e.preventDefault();
  gallery.append(createMemeDiv());
  gallery.lastChild.append(meme.cloneNode(true));
  gallery.lastChild.firstChild.append(createTrashBin());
  form.reset();
  resetPreview();
}

function createMemeDiv() {
  const memeDiv = document.createElement("div");
  memeDiv.className = "memeDiv";
  return memeDiv;
}

function createTrashBin() {
  const trashBinDiv = document.createElement("div");
  trashBinDiv.className = "trashBinDiv";
  return trashBinDiv;
}

function resetPreview() {
  memeTopText.textContent = "";
  memeBottomText.textContent = "";
  submitButton.disabled = true;
  submitButton.classList.add("disabled");
  preview.src = "preview/doge-meme.png";
}

function showTrashBin(e) {
  if(e.target && e.target.nodeName === "IMG") {
    e.target.parentElement.parentElement.lastChild.innerHTML = '<i class="fa-solid fa-trash" aria-hidden="true"></i>';
  }
}

function deleteMeme(e) {
  if(e.target && e.target.nodeName === "IMG" || e.target.nodeName === "I" || e.target.nodeName === "P") {
    e.target.parentElement.parentElement.parentElement.remove();
  }
}
