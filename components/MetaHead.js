import Head from 'next/head'

const MetaHead = ({title, description}) => {
  return (
    <Head>
      <title>codeWithManish {title && `| ${title}` }</title>
      <meta name="keywords" content="manish, codeWithManish, nextjs" />
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.png" type="image/*" />
    </Head>
  )
}

export default MetaHead
