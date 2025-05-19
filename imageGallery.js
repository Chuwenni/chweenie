const dropDown = document.getElementById('dropdown')
const morebtn = document.getElementById('more')
const add = document.getElementById('fileInput')


morebtn.addEventListener('click', () => {
  dropDown.classList.add('active')
})

add.addEventListener('click', () => {
  dropDown.classList.remove('active')
})


import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
import {
  getStorage, ref, uploadBytes, listAll, getDownloadURL, deleteObject
} from "https://www.gstatic.com/firebasejs/11.7.3/firebase-storage.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyC4mFiKjlzpzEeIKWV3WSehd-nJEgOm_X4",
  authDomain: "chweenie-4b94d.firebaseapp.com",
  projectId: "chweenie-4b94d",
  storageBucket: "chweenie-4b94d.appspot.com",
  messagingSenderId: "5357689392",
  appId: "1:5357689392:web:9db54cab9aa7f56f7cabf5",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const fileInput = document.getElementById('fileInput');
const gallery = document.getElementById('imageGallery');
const styleBtn = document.getElementById('styleBtn');
const removeStyleBtn = document.getElementById('removeStyleBtn');
const deleteBtn = document.getElementById('deleteBtn');

let selectedImage = null;
let selectedRef = null;

// Load images
window.addEventListener('DOMContentLoaded', async () => {
  const listRef = ref(storage, 'images/');
  const result = await listAll(listRef);
  for (const item of result.items) {
    const url = await getDownloadURL(item);
    createImage(url, item);
  }
});

fileInput.addEventListener('change', async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const imgRef = ref(storage, `images/${Date.now()}_${file.name}`);
  await uploadBytes(imgRef, file);
  const url = await getDownloadURL(imgRef);
  createImage(url, imgRef);
});

function createImage(url, refObj) {
  const img = document.createElement('img');
  img.src = url;
  img.classList.add('gallery-media');
  img.addEventListener('click', () => {
    document.querySelectorAll('.gallery-media').forEach(el => el.classList.remove('selected'));
    img.classList.add('selected');
    selectedImage = img;
    selectedRef = refObj;
  });
  gallery.appendChild(img);
}

styleBtn.addEventListener('click', () => {
  if (selectedImage) selectedImage.classList.add('styled');
});

removeStyleBtn.addEventListener('click', () => {
  if (selectedImage) selectedImage.classList.remove('styled');
});

deleteBtn.addEventListener('click', async () => {
  if (!selectedImage || !selectedRef) return;
  await deleteObject(selectedRef);
  selectedImage.remove();
  selectedImage = null;
  selectedRef = null;
});
