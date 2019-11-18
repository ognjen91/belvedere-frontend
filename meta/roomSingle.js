export default (componentContext) => {
  return {


  twitter : [
    {hid: 'twitter:url', name:'twitter:url', content: componentContext.$route.path},
    {hid: 'twitter:title', name:'twitter:title', content:`${componentContext.room.name_en} : Belvedere `},
    {hid: 'twitter:description', name:'twitter:description', content: `Learn about ${componentContext.room.name_en} - room of Belvedere Herceg Novi`},
    {hid: 'twitter:image:src', name:'twitter:image:src', content: process.env.WEBSITE_URL + "/placeholder.jpg"},
  ],

  facebook : [
    {hid: 'og:url', name:'og:url', content: componentContext.$route.path},
    {hid: 'og:title', name:'og:title', content: `${componentContext.room.name_en} : Belvedere `},
    {hid: 'og:description', name: 'description', content:  `Learn about ${componentContext.room.name_en} - room of Belvedere Herceg Novi` },
    {hid: 'og:image', name:'og:image', content: process.env.WEBSITE_URL + "/placeholder.jpg"},
  ]
}

}
