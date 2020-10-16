import React from 'react'
import App from 'next/app'
import Layout, {LoadingScreen} from '../components/layout'
import build from '../components/pagebuild.json'
import Router from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import {useEffect} from 'react';

Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());

class MyApp extends App {

  render() {
    const { Component, pageProps, router } = this.props


    return (
      <Layout links={build.paths} title={build.title} path={router.pathname} >
        <Component {...pageProps}></Component>
      </Layout>
    )
  }
}

export default MyApp