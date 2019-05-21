export default (componentContext) => {
  return {


  twitter : [
    {hid: 'twitter:url', name:'twitter:url', content: componentContext.$route.path},
    {hid: 'twitter:title', name:'twitter:title', content:"About Belvedere Facility"},
    {hid: 'twitter:description', name:'twitter:description', content:"Learn more about Belvedere facility"},
    {hid: 'twitter:image:src', name:'twitter:image:src', content: process.env.WEBSITE_URL + "/pages/facility.jpg"},
  ],

  facebook : [
    {hid: 'og:title', name:'og:title', content: "About Belvedere Facility"},
    {hid: 'og:url', name:'og:url', content: componentContext.$route.path},
    { hid: 'og:description', name: 'description', content: 'Learn more about Belvedere facility.' },
    {hid: 'og:image', name:'og:image', content: process.env.WEBSITE_URL + "/pages/facility.jpg"},
  ]
}

}
