/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
      url: 'tomascap.jp.auth0.com', // the auth0 domain prefix
      audience: 'http://localhost:5000', // the audience set for the auth0 app
      clientId: 'ncfMphvrZRGs4Yw6zPvCW11J5GMa6ycW', // the client id generated for the auth0 app
      callbackURL: 'http://localhost:8100, http://localhost:8100/tabs/user-page', // the base url of the running ionic application. 
  }
};
