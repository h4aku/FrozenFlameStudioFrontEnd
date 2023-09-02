let slider = tns({
  container : ".my-slider",
  "slideBy" : 1,
  "speed" : 400,
  "nav" : false,
  controlsContainer : "#controls",
  prevButton : ".previous",
  nextButton : ".next",
  responsive : {
      1600: {
          items: 4,
          gutter: 20
      },

      1200: {
          items: 3,
          gutter: 20
      },
      900: {
          items: 2,
          gutter: 20
      },
      480: {
          items: 1
      }
  }
})