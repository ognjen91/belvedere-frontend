export default (componentContext) => {
  return {


  twitter : [
    {hid: 'twitter:url', name:'twitter:url', content: componentContext.$route.path},
    {hid: 'twitter:title', name:'twitter:title', content: `${componentContext.facility.name_en} - Belvedere friends`},
    {hid: 'twitter:description', name:'twitter:description', content: `Learn about ${componentContext.facility.name_en} - Belvedere friend's facility`},
    {hid: 'twitter:image:src', name:'twitter:image:src', content: process.env.WEBSITE_URL + "/placeholder.jpg"},
  ],

  facebook : [
    {hid: 'og:url', name:'og:url', content: componentContext.$route.path},
    {hid: 'og:title', name:'og:title', content:  `${componentContext.facility.name_en} - Belvedere friends`},
    {hid: 'og:description', name: 'description', content:  `Learn about ${componentContext.facility.name_en} - Belvedere friend's facility` },
    {hid: 'og:image', name:'og:image', content: process.env.WEBSITE_URL + "/placeholder.jpg"},
  ]
}

}
