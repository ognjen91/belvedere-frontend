export default (componentContext) => {
  return {


  twitter : [
    {hid: 'twitter:url', name:'twitter:url', content: componentContext.$route.path},
    {hid: 'twitter:title', name:'twitter:title', content:"Belvedere Blog"},
    {hid: 'twitter:description', name:'twitter:description', content: `About  Herceg Novi, The Bay of Kotor and our activities`},
    {hid: 'twitter:image:src', name:'twitter:image:src', content: process.env.WEBSITE_URL + "/pages/blog.jpg"},
  ],

  facebook : [
    {hid: 'og:url', name:'og:url', content: componentContext.$route.path},
    {hid: 'og:title', name:'og:title', content: "Belvedere Blog"},
    {hid: 'og:description', name: 'description', content: 'About  Herceg Novi, The Bay of Kotor and our activities' },
    {hid: 'og:image', name:'og:image', content: process.env.WEBSITE_URL + "/pages/blog.jpg"},
  ]
}

}
