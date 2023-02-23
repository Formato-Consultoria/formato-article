module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {
            folder: env('CLOUDINARY_FOLDER_ARTICLES'),
          },
          uploadStream: {},
          delete: {},
        },
      },
    },
    'strapi-plugin-populate-deep': {
      config: {
        defaultDepth: 3,
      }
    },
    slugify: {
      enabled: true,
      config: {
        contentTypes: {
          article: {
            field: 'slug',
            references: 'title',
          },
        },
      },
  },
});