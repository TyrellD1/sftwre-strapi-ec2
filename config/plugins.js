// path: ./config/plugins.js

module.exports = ({ env }) => ({
  // ...
  "quill-editor": {
    enabled: true,
    resolve: "./src/plugins/quill-editor", // path to plugin folder
  },
  upload: {
    config: {
        provider: 'aws-s3',
        providerOptions: {
            accessKeyId: env('AWS_ACCESS_KEY_ID'),
            secretAccessKey: env('AWS_ACCESS_SECRET'),
            region: env('AWS_REGION'),
            params: {
                Bucket: env('AWS_BUCKET_NAME'),
            },
        },
    },
  }
});