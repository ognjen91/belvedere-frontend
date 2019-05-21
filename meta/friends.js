export default (componentContext) => {
  return {


  twitter : [
    {hid: 'twitter:url', name:'twitter:url', content: componentContext.$route.path},
    {hid: 'twitter:title', name:'twitter:title', content:"Belvedere Friends"},
    {hid: 'twitter:description', name:'twitter:description', content: `Browse between our friends' apartments and rooms, all around Herceg Novi: ${componentContext.facilities.length} facilities`},
    {hid: 'twitter:image:src', name:'twitter:image:src', content: process.env.WEBSITE_URL + "/pages/default.jpg"},
  ],

  facebook : [
    {hid: 'og:url', name:'og:url', content: componentContext.$route.path},
    {hid: 'og:title', name:'og:title', content: "Belvedere Friends"},
    {hid: 'og:description', name: 'description', content:  `Browse between our friends' apartments and rooms, all around Herceg Novi: ${componentContext.facilities.length} facilities` },
    {hid: 'og:image', name:'og:image', content: process.env.WEBSITE_URL + "/pages/default.jpg"},
  ]
}

}
