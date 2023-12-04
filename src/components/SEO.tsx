// import React from 'react';
// // import { Helmet } from 'react-helmet';

// export default function SEO({ title, description, location, image, imageALT }) {
//   let metaDataQuery = 'data';

//   metaDataQuery = {
//     meta_title: `Jason Crabtree's Internet Hangtime`,
//     meta_description:
//       'Online home of Jason Crabtree, Product Designer and kiwi. Fan of tech, people, social justice and seeing the world.',
//     secondary_title: '',
//     twitter_username: '@jasontcrabtree',
//     social_sharing_image: {
//       url: 'https://res.cloudinary.com/jasontcrabtree/image/upload/v1594587665/Portfolio-2020/social-card.png',
//       alt: 'Jason Crabtree, Product Designer portfolio social media card.',
//     },
//     website_url: {
//       url: 'https://jasontcrabtree.com',
//     },
//   };

//   const metaDataValues = {
//     title: metaDataQuery.meta_title,
//     description: metaDataQuery.meta_description,
//     image: metaDataQuery.social_sharing_image.url,
//     imageALT: metaDataQuery.social_sharing_image.alt,
//     location: metaDataQuery.website_url.url,

//     titleTemplate: metaDataQuery.secondary_title,
//     twitterUsername: metaDataQuery.twitter_username,
//     metaSiteName: metaDataQuery.meta_site_name,
//   };

//   return (
//     <Helmet
//       title={title || metaDataValues.title}
//       titleTemplate={`%s ${metaDataValues.titleTemplate}`}>
//       <html lang="en" />
//       <link rel="icon" type="image/svg+xml" href="/star.svg" />

//       <meta property="og:title" content={title || metaDataValues.title} />
//       <meta name="twitter:title" content={title || metaDataValues.title} />

//       <meta
//         name="description"
//         content={description || metaDataValues.description}
//       />
//       <meta
//         property="og:description"
//         content={description || metaDataValues.description}
//       />
//       <meta
//         name="twitter:description"
//         content={description || metaDataValues.description}
//       />

//       <meta name="image" content={image || metaDataValues.image} />
//       <meta property="og:image" content={image || metaDataValues.image} />
//       <meta name="twitter:image" content={image || metaDataValues.image} />
//       <meta
//         name="twitter:image:alt"
//         content={imageALT || metaDataValues.imageALT}
//       />

//       {location && (
//         <meta
//           property="og:url"
//           content={`${metaDataValues.location}${location}`}
//         />
//       )}

//       <meta property="og:site_name" content={metaDataValues.metaSiteName} />
//       <meta name="twitter:creator" content={metaDataValues.twitterUsername} />
//       <meta name="twitter:card" content="summary_large_image" />
//     </Helmet>
//   );
// }
