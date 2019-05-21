export default (componentContext) => {
  return {


  twitter : [
    {hid: 'twitter:url', name:'twitter:url', content: componentContext.$route.path},
    {hid: 'twitter:title', name:'twitter:title', content:"About Belvedere"},
    {hid: 'twitter:description', name:'twitter:description', content:"Learn more about vision behind Belvedere Apartments, apartments with beautiful seaview near city center."},
    {hid: 'twitter:image:src', name:'twitter:image:src', content: process.env.WEBSITE_URL + "/pages/about.jpg"},
  ],

  facebook : [
    {hid: 'og:url', name:'og:url', content: componentContext.$route.path},
    {hid: 'og:title', name:'og:title', content: "About Belvedere"},
    {hid: 'og:description', name: 'description', content: 'Learn more about vision behind Belvedere Apartments, apartments with beautiful seaview near city center.' },
    {hid: 'og:image', name:'og:image', content: process.env.WEBSITE_URL + "/pages/about.jpg"},
  ]
}

}
