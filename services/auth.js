import axios from 'axios';
import Router, { useRouter } from 'next/router';
import {Component} from 'react';
import { Cookies } from 'react-cookie';
import {baseConfig} from './restservice';
import {Logout} from './apiservice';
import { post, get , postFile} from "./restservice";
// set up cookies
const cookies = new Cookies();

async function handleAuthSSR(ctx) {
  let token = null;
  // if context has request info aka Server Side
  if (ctx.req) {
    // ugly way to get cookie value from a string of values
    // good enough for demostration
    token = ctx.req.headers.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    
  }
  else {
    // we dont have request info aka Client Side
    token = cookies.get('token')
  }

  try {
    const response = await axios.get(baseConfig.baseURL + "/user/restricted", { headers: { 'Authorization':'Bearer ' + token } });
    // dont really care about response, as long as it not an error
    console.log("Golang Server Login Status ::", response.data.status)

  } catch (err) {
    // in case of error
    if(err.response) console.log(err.response.data.status);
    console.log("redirecting back to main page");
    if (ctx.res) {
      ctx.res.writeHead(302, {
        Location: '/'
      })
      ctx.res.end()
    } else {
      Router.push('error', '/')
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