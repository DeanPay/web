import Head from 'next/head'

const Meta = ({ title, keywords, desc }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta name="description" content={desc}/>
      <meta name="keywords" content={keywords}/>
      <link rel="icon" type="image/x-icon" href="/img/favicon.png"/>

     <meta property="og:type" content="website"/>
     <meta property="og:url" content=""/>
     <meta property="og:title" content={title}/>
     <meta property="og:description" content={desc}/>
     <meta property="og:image" content="/img/favicon.png"/>

     <meta property="twitter:card" content="summary_large_image"/>
     <meta property="twitter:url" content=""/>
     <meta property="twitter:title" content={title}/>
     <meta property="twitter:description" content={desc}/>
     <meta property="twitter:image" content=""/>

     <meta property="og:site_name" content="DeanPay"/>
     <meta property="og:site" content=""/>
     <meta property="og:title" content={title}/>
     <meta property="og:description" content={desc}/>
     <meta property="og:image" content=""/>
     <meta property="og:url" content="/img/favicon.png" />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title : "CPay - Buy Data and Airtime Easily!",
  keywords : "deanpay, catidean, buy, airtime",
  desc :"Purchase mobile data and airtime easily"
}

export default Meta