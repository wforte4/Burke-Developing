import React from 'react'
import App from 'next/app'
import Layout from '../components/layout'
import LoadingScreen from '../components/loadingscreen'
import build from '../components/pagebuild.json'
import Router, { useRouter } from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps, router}) {
  const [loading, setLoading] = useState(false)
  Router.events.on('routeChangeStart', () => setLoading(true))
  Router.events.on('routeChangeComplete', () => setLoading(false))
  Router.events.on('routeChangeError', ()=> setLoading(false))
  if(loading) {
    return <LoadingScreen message={`Loading...`}/>
  }
  return (
    <Layout links={build.paths} title={build.title} path={router.pathname} >
      <Component {...pageProps}></Component>
    </Layout>
  )
}

export default MyApp