export default (componentContext) => {
  return {


  twitter : [
    {hid: 'twitter:url', name:'twitter:url', content: componentContext.$route.path},
    {hid: 'twitter:title', name:'twitter:title', content:`${componentContext.apartment.name_en} : Belvedere `},
    {hid: 'twitter:description', name:'twitter:description', content: `Learn about ${componentContext.apartment.name_en} - apartment of Belvedere Herceg Novi`},
    {hid: 'twitter:image:src', name:'twitter:image:src', content: componentContext.sourceFolder + componentContext.apartment.profileImage},
  ],

  facebook : [
    {hid: 'og:url', name:'og:url', content: componentContext.$route.path},
    {hid: 'og:title', name:'og:title', content: `${componentContext.apartment.name_en} : Belvedere `},
    {hid: 'og:description', name: 'description', content:  `Learn about ${componentContext.apartment.name_en} - apartment of Belvedere Herceg Novi` },
    {hid: 'og:image', name:'og:image', content: componentContext.sourceFolder + componentContext.apartment.profileImage},
  ]
}

}
