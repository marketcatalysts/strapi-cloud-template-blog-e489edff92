// path: ./config/plugins.js
module.exports = ({ env }) => ({
    // ... (other plugin configurations)
  
    // Preview button plugin configuration
    'preview-button': {
      enabled: true,
      config: {
        contentTypes: [
          // Single types
          { uid: 'api::about.about', draft: { url: 'http://localhost:5000/about' }, published: { url: 'http://localhost:5000/about' } },
          { uid: 'api::about-us.about-us', draft: { url: 'http://localhost:5000/about-us' }, published: { url: 'http://localhost:5000/about-us' } },
          { uid: 'api::contact-us.contact-us', draft: { url: 'http://localhost:5000/contact-us' }, published: { url: 'http://localhost:5000/contact-us' } },
          { uid: 'api::data-disclaimer.data-disclaimer', draft: { url: 'http://localhost:5000/data-disclaimer' }, published: { url: 'http://localhost:5000/data-disclaimer' } },
          { uid: 'api::home-page.home-page', draft: { url: 'http://localhost:5000/' }, published: { url: 'http://localhost:5000/' } },
          { uid: 'api::privacy-policy.privacy-policy', draft: { url: 'http://localhost:5000/privacy-policy' }, published: { url: 'http://localhost:5000/privacy-policy' } },
          { uid: 'api::team.team', draft: { url: 'http://localhost:5000/team' }, published: { url: 'http://localhost:5000/team' } },
          { uid: 'api::terms-of-use.terms-of-use', draft: { url: 'http://localhost:5000/terms-of-use' }, published: { url: 'http://localhost:5000/terms-of-use' } },
  
          // Collection types
          {
            uid: 'api::article.article',
            draft: {
              url: 'http://localhost:5000/articles/preview',
              query: { slug: '{slug}' },
            },
            published: {
              url: 'http://localhost:5000/articles/{slug}',
            },
          },
          // ... (Repeat for other collection types)
        ],
      },
    },
  
    // ... (other plugin configurations)
  });
  