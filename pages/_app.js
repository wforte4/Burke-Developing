import React from 'react'
import Layout from '../components/layout'
import LoadingScreen from '../components/loadingscreen'
import build from '../components/pagebuild.json'
import Router, { useRouter } from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useState } from 'react';
import { Provider } from "react-redux";
import { createWrapper } from 'next-redux-wrapper'
import store from "../store/store";

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
    <Provider store={store}>
      <Layout links={build.paths} title={build.title} path={router.pathname} >
        <Component {...pageProps}></Component>
      </Layout>
    </Provider>
  )
}

const makestore = ()=> store;
const wrapper = createWrapper(makestore)

export default wrapper.withRedux(MyApp)