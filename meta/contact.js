export default (componentContext) => {
  return {


  twitter : [
    {hid: 'twitter:url', name:'twitter:url', content: componentContext.$route.path},
    {hid: 'twitter:title', name:'twitter:title', content:"Contact Belvedere"},
    {hid: 'twitter:description', name:'twitter:description', content:"Contact us for via contact form for reservations with discount, info and more."},
    {hid: 'twitter:image:src', name:'twitter:image:src', content: process.env.WEBSITE_URL + "/pages/default.jpg"},
  ],

  facebook : [
    {hid: 'og:url', name:'og:url', content: componentContext.$route.path},
    {hid: 'og:title', name:'og:title', content: "Contact Belvedere"},
    {hid: 'description', name: 'description', content: 'Contact us for via contact form for reservations with discount, info and more.' },
    {hid: 'og:image', name:'og:image', content: process.env.WEBSITE_URL + "/pages/default.jpg"},
  ]
}

}
