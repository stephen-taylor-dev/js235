"use strict";
import templates from "./templates.js"

class App {
  constructor() {
    this.slides = document.getElementById('slides');
    this.commentsDiv = document.querySelector('#comments ul');
    
    this.photos = null;
    this.comments = null;
  }

  async main() {
    await this.fetchPhotos();
    this.renderPhotos();
    this.renderPhotoInformation(this.photos[0].id);

    await this.fetchComments(this.photos[0].id);
    this.renderComments();
  }

  async fetchPhotos() {
    let response = await fetch('/photos');
    this.photos = await response.json();
  }

  renderPhotos() {
    this.slides.innerHTML = templates.photos(this.photos);
  }

  renderPhotoInformation(idx) {
    let photo = this.photos.find(photo => photo.id === idx);
    let header = document.getElementById('information');
    header.innerHTML = templates.photoInformation(photo);
  }

  async fetchComments(photoId) {
    let response = await fetch(`/comments?photo_id=${photoId}`);
    this.comments = await response.json();
    console.log(this.comments);
  }

  renderComments() {
    let commentsHTML = templates.comments(this.comments);
    this.commentsDiv.insertAdjacentHTML('beforebegin', commentsHTML);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.main();
});
