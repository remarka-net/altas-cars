import Prismic from 'prismic-javascript'

// -- Prismic API endpoint
// Determines which repository to query and fetch data from
export const apiEndpoint = 'https://LastWebsite.cdn.prismic.io/api/v2';
	
const accessToken = '' // This is where you would add your access token for a Private repository 


// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc) => {
    if (doc.type === 'page') return `/page/${doc.uid}`
    return '/'
  }


// Client method to query documents from the Prismic repo
export const client = Prismic.client(apiEndpoint, { accessToken })