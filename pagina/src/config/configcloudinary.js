const cloudinary = require('cloudinary');

cloudinary.v2.config({
  cloud_name: 'ingenieria',
  api_key: '588776597991163',
  api_secret: 'f3i6VsImZkDmh3T8KPUVx7zmvqk',
  secure: true,
});

/**
 * cloudinary.v2.uploader
  .upload('Ximena Sariñana - Cuento - Letra.mp3', {
    folder: 'musicDMGF',
    resource_type: 'video'})
  .then(console.log);
 */