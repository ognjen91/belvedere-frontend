export default (componentContext) => {
  return {


  twitter : [
    {hid: 'twitter:url', name:'twitter:url', content: componentContext.$route.path},
    {hid: 'twitter:title', name:'twitter:title', content:"Belvedere Gallery"},
    {hid: 'twitter:description', name:'twitter:description', content:"Images of our facility, terrace and tourist attractions nearby"},
    {hid: 'twitter:image:src', name:'twitter:image:src', content: process.env.WEBSITE_URL + "/pages/gallery.jpg"},
  ],

  facebook : [
    {hid: 'og:title', name:'og:title', content: "Belvedere Gallery"},
    {hid: 'og:url', name:'og:url', content: componentContext.$route.path},
    {hid: 'og:description', name: 'description', content: 'Images of our facility, terrace and tourist attractions nearby' },
    {hid: 'og:image', name:'og:image', content: process.env.WEBSITE_URL + "/pages/gallery.jpg"},
  ]
}

}
