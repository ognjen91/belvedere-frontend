export default (componentContext) => {
  return {


  twitter : [
    {hid: 'twitter:url', name:'twitter:url', content: componentContext.$route.path},
    {hid: 'twitter:title', name:'twitter:title', content: `${componentContext.post.title} : Belvedere Blog`},
    {hid: 'twitter:description', name:'twitter:description', content: `${componentContext.post.title} : Belvedere blog`},
    {hid: 'twitter:image:src', name:'twitter:image:src', content:  componentContext.post.image? componentContext.sourceFolder + componentContext.post.image : process.env.WEBSITE_URL + "/pages/blog.jpg"},
  ],

  facebook : [
    {hid: 'og:url', name:'og:url', content: componentContext.$route.path},
    {hid: 'og:title', name:'og:title', content: `${componentContext.post.title} : Belvedere Blog`},
    {hid: 'og:description', name: 'description', content: `${componentContext.post.title} : Belvedere blog` },
    {hid: 'og:image', name:'og:image', content: componentContext.post.image? componentContext.sourceFolder + componentContext.post.image : process.env.WEBSITE_URL + "/pages/blog.jpg"},
  ]
}

}
