export default Object.freeze({
  SUBLOGO_TITLE: 'AYYES',
  FOOTER_TITLE: 'AYYES',

  PAGE_TITLES: Object.freeze({
    INDEX: 'Works'
  }),

  NAVIGATION: Object.freeze({
    TITLES: Object.freeze({
      WORKS: 'WORKS',
      THESIS: 'THESIS',
      CONTACT: 'CONTACT',
      HOME: 'HOME'
    }),

    LINKS: Object.freeze({
      THESIS: 'http://bit.ly/ayy_thesis',
      HOME: '/'
    })
  }),

  WORK: Object.freeze({
    PLATFORM: 'Platform',
    LANGUAGE: 'Language',
    DATE: 'Date',
    DOWNLOAD: 'DOWNLOAD'
  }),

  CONTACT: Object.freeze({
    PLACEHOLDERS: Object.freeze({
      NAME: 'Name',
      EMAIL: 'Email',
      MESSAGE: 'Message'
    }),
    BUTTONS: Object.freeze({
      SEND: 'SEND'
    }),
    CONTACT_URL: process.env.GATSBY_CONTACT_URL
  }),

  MESSAGES: Object.freeze({
    M_404: '404',
    NOT_FOUND: "The page doesn't exist... maybe it does in a parallel universe",
    VIDEO_NOT_SUPPORTED: "Sorry, your browser doesn't support embedded videos."
  })
})
