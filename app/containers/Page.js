import React, { useEffect, useState } from 'react';
import { client, linkResolver } from '../prismic-configuration';
import Prismic from 'prismic-javascript';
import { Date, Link, RichText } from 'prismic-reactjs';


const Page = ({ match }) => {

const [doc, setDocData] = useState(null)
const [notFound, toggleNotFound] = useState(false)

  const uid = match.params.uid

  // Get the page document from Prismic
  useEffect(() => {
    const fetchData = async () => {
      // We are using the function to get a document by its UID
      const result = await client.getByUID('page', uid)

      if (result) {
        // We use the State hook to save the document
        return setDocData(result)
      } else {
        // Otherwise show an error message
        console.warn('Page document not found. Make sure it exists in your Prismic repository')
        toggleNotFound(true)
      }
    }
    fetchData()
  }, [uid]) // Skip the Effect hook if the UID hasn't changed

  // // COMMENT HOW TO ADD SLICES
  
  // if (this.state.document) {
	
  //   const document = this.state.document;
	
 
	
  //   const pageContent = document.data.body.map(function(slice, index){
	
  //     // Render the right markup for the given slice type
	
  //     // FAQ Slice
	
  //     if (slice.slice_type === 'faq') {
	
  //       const faqContent = slice.items.map(function(faq, faqIndex){
	
  //         return(
	
  //           <div key={faqIndex}>
	
  //             {RichText.render(faq.question, linkResolver)}
	
  //             {RichText.render(faq.answer, linkResolver)}
	
  //           </div>
	
  //         );
	
  //       });
	
  //       return(
	
  //         <div className="faq" key={index}>
	
  //           {RichText.render(slice.primary.faq_title, linkResolver)}
	
  //           {faqContent}
	
  //         </div>
	
  //        );
	
 
	
  //     // Featured Items Slice
	
  //     } else if (slice.slice_type === 'featured_items') {
	
  //       const featuredContent = slice.items.map(function(featuredItem, featuredIndex){
	
  //         return (
	
  //           <div key={featuredIndex}>
	
  //             <img src={featuredItem.image.url} alt={featuredItem.image.alt}/>
	
  //             {RichText.render(featuredItem.title, linkResolver)}
	
  //             {RichText.render(featuredItem.summary, linkResolver)}
	
  //           </div>
	
  //         );
	
  //       });
	
  //       return (
	
  //         <div className="featured-items" key={index}>
	
  //           {featuredContent}
	
  //         </div>
	
  //       );
	
 
	
  //     // Text Slice
	
  //     } else if (slice.slice_type === 'text') {
	
  //       return (
	
  //         <div className="text" key={index}>
	
  //           {RichText.render(slice.primary.rich_text, linkResolver)}
	
  //         </div>
	
  //       );
	
 
	
  //     // Return null by default
	
  //     } else {
	
  //       return null;
	
  //     }
	
  //   });
	
 
	
  //   return (
	
  //     <div className="page-content">
	
  //       {pageContent}
	
  //     </div>
	
  //   );
	
  // }
	
  // return null;

  // THE END OF SLICE--**********************************************

  
  if (doc) {
    return (
      <div className="page">
        {/* This is how to get an image into your template */}
        <img src={doc.data.image.url} alt={doc.data.image.alt} />
        {/* This is how to render a Rich Text field as plain text */}
        <h1>{RichText.asText(doc.data.title)}</h1>
        {/* This is how to render a Rich Text field into your template as HTML */}
        <RichText render={doc.data.description} linkResolver={linkResolver} />
      
           {/* This is how to get an image into your template */}
           <h1>{RichText.asText(doc.data.title)}</h1>  
        {/* This is how to render a Rich Text field as plain text */}
        <RichText render={doc.data.description} linkResolver={linkResolver} />
        {/* This is how to render a Rich Text field into your template as HTML */}
        <img src={doc.data.image.url} alt={doc.data.image.alt} />
      </div>
    )
  } else if (notFound) {
    return <NotFound />
  }
  return null
}

export default Page