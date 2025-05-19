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
const gallery = document.getElementById('videoGallery');
const styleBtn = document.getElementById('styleBtn');
const removeStyleBtn = document.getElementById('removeStyleBtn');
const deleteBtn = document.getElementById('deleteBtn');

let selectedVideo = null;
let selectedRef = null;

// Load videos
window.addEventListener('DOMContentLoaded', async () => {
  const listRef = ref(storage, 'videos/');
  const result = await listAll(listRef);
  for (const item of result.items) {
    const url = await getDownloadURL(item);
    createVideo(url, item);
  }
});

fileInput.addEventListener('change', async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const vidRef = ref(storage, `videos/${Date.now()}_${file.name}`);
  await uploadBytes(vidRef, file);
  const url = await getDownloadURL(vidRef);
  createVideo(url, vidRef);
});

function createVideo(url, refObj) {
  const video = document.createElement('video');
  video.src = url;
  video.controls = true;
  video.classList.add('gallery-media');

  video.addEventListener('click', () => {
    document.querySelectorAll('.gallery-media').forEach(el => el.classList.remove('selected'));
    video.classList.add('selected');
    selectedVideo = video;
    selectedRef = refObj;
  });

  gallery.appendChild(video);
}

styleBtn.addEventListener('click', () => {
  if (selectedVideo) selectedVideo.classList.add('styled');
});

removeStyleBtn.addEventListener('click', () => {
  if (selectedVideo) selectedVideo.classList.remove('styled');
});

deleteBtn.addEventListener('click', async () => {
  if (!selectedVideo || !selectedRef) return;
  await deleteObject(selectedRef);
  selectedVideo.remove();
  selectedVideo = null;
  selectedRef = null;
});
