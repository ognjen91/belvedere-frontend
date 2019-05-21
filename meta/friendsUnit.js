export default (componentContext) => {
  return {


  twitter : [
    {hid: 'twitter:url', name:'twitter:url', content: componentContext.$route.path},
    {hid: 'twitter:title', name:'twitter:title', content: `${componentContext.unit.name_en} - Belvedere friends`},
    {hid: 'twitter:description', name:'twitter:description', content: `Learn about ${componentContext.unit.name_en} - Belvedere friend's unit`},
    {hid: 'twitter:image:src', name:'twitter:image:src', content: componentContext.sourceFolder + componentContext.unit.profileImage},
  ],

  facebook : [
    {hid: 'og:url', name:'og:url', content: componentContext.$route.path},
    {hid: 'og:title', name:'og:title', content:  `${componentContext.unit.name_en} - Belvedere friends`},
    {hid: 'og:description', name: 'description', content:  `Learn about ${componentContext.unit.name_en} - Belvedere friend's unit` },
    {hid: 'og:image', name:'og:image', content: componentContext.sourceFolder + componentContext.unit.profileImage},
  ]
}

}
