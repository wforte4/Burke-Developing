import axios from 'axios';
import Router, { useRouter } from 'next/router';
import {Component} from 'react';
import nextCookie from 'next-cookies';
import {baseConfig} from './restservice';
import {Logout} from './apiservice';
import { post, get , postFile} from "./restservice";
// set up cookies

async function handleAuthSSR(ctx) {
  const allCookies = nextCookie(ctx);
  const token = allCookies.accessToken;

  try {
    const response = await axios.get(baseConfig.baseURL + "/auth/admin", { headers: { 'Authorization':'Bearer ' + token } });
    // dont really care about response, as long as it not an error
    console.log("Server Status:", response.status)

  } catch (err) {
    // in case of error
    if(err.response) console.log(err.response.data.status);
    console.log("redirecting back to main page");
    if (ctx.res) {
      ctx.res.writeHead(302, {
        Location: '/login'
      })
      ctx.res.end()
    } else {
      await Router.push('/error', '/login')
      return null
    }
  }
  return token
}

const getDisplayName = Component =>
  Component.displayName || Component.name || "Component";

export const withAuthSync = WrappedComponent =>
  class extends Component {
    static displayName = `withAuthSync(${getDisplayName(WrappedComponent)})`;

    static async getInitialProps(ctx) {
      const token = await handleAuthSSR(ctx);
      const componentProps =
        WrappedComponent.getInitialProps &&
        (await WrappedComponent.getInitialProps(ctx));

      return { ...componentProps, token };
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };