import React from 'react';
import {Layout, Profile, Repositories} from './Components';
import { ResetCSS } from './global/resetCSS';
import GithubProvider from './providers/github-provider';

const App = () => {
  return (
    <main>
      <GithubProvider>
        <ResetCSS/>
        <Layout>
          <Profile/>
          <Repositories/>
        </Layout>
      </GithubProvider>
    </main>
  );
}

export default App;
