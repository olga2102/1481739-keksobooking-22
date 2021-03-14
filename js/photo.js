const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png', 'svg'];

// const avatarPreview = document.querySelector('.ad-form-header__preview img');
// const avatarUploader = document.querySelector('#avatar');

// const housingPhotoPreview = document.querySelector('.ad-form__photo-preview');
// const housingPhotoUploader = document.querySelector('#images');

const photoUploadFunction = (input, preview) => {
  input.addEventListener('change', () => {
    const file = input.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => {
      return fileName.endsWith(it);
    });

    if (matches) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        preview.src = reader.result;
      });
      reader.readAsDataURL(file);
    }
  });
}

export {photoUploadFunction};
