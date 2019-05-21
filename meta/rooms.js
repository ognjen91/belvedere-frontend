export default (componentContext) => {
  return {


  twitter : [
    {hid: 'twitter:url', name:'twitter:url', content: componentContext.$route.path},
    {hid: 'twitter:title', name:'twitter:title', content:"Belvedere Apartments & Rooms"},
    {hid: 'twitter:description', name:'twitter:description', content: `Browse between ${componentContext.apartments.length} apartments and ${componentContext.rooms.length} rooms`},
    {hid: 'twitter:image:src', name:'twitter:image:src', content: process.env.WEBSITE_URL + "/pages/rooms.jpg"},
  ],

  facebook : [
    {hid: 'og:url', name:'og:url', content: componentContext.$route.path},
    {hid: 'og:title', name:'og:title', content: "Belvedere Apartments & Rooms"},
    {hid: 'og:description', name: 'description', content:  `Browse between ${componentContext.apartments.length} apartments and ${componentContext.rooms.length} rooms` },
    {hid: 'og:image', name:'og:image', content: process.env.WEBSITE_URL + "/pages/rooms.jpg"},
  ]
}

}
