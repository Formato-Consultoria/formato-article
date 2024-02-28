module.exports = ({ env }) => (
  {
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
            asset_folder: env('CLOUDINARY_FOLDER_ARTICLES'),
          },
          uploadStream: {
            folder: env('CLOUDINARY_FOLDER_ARTICLES'),
            asset_folder: env('CLOUDINARY_FOLDER_ARTICLES'),
          },
          delete: {
            folder: env('CLOUDINARY_FOLDER_ARTICLES'),
            asset_folder: env('CLOUDINARY_FOLDER_ARTICLES'),
          },
        },
      },
    },
    email: {
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
          defaultFrom: env('SENDGRID_EMAIL_FROM'),
          defaultReplyTo: env('SENDGRID_EMAIL_TO'),
        },
      },
    },
    'strapi-plugin-populate-deep': {
      config: {
        defaultDepth: 3,
      }
    },
    'video-field': {
      enabled: true
    },
    slugify: {
      enabled: true,
      config: {
        contentTypes: {
          article: {
            field: 'slug',
            references: 'title',
          },
          category: {
            field: 'slug',
            references: 'name'
          },
          service: {
            field: 'slug',
            references: 'title'
          },
          'dynamic-page': {
            field: 'slug',
            references: 'title'
          }
        },
      },
    },
    "react-icons": true,
  }
);