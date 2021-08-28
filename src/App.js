import React from 'react';
import {Layout, Profile, Repositories} from './Components';
import NoSearch from './Components/no-search';
import useGithub from './Hooks/github-hooks';

const App = () => {
  const {githubState} = useGithub();

// Adicionar animação de carregando

  return (
        <Layout>
         {githubState.hasUser? (
            <>
              {githubState.loading ? (<p>Loading</p>) : (
                <> 
                  <Profile/>
                  <Repositories/>
                </>
              )}
            </>):(
            <NoSearch/>
            )}
        </Layout>
  );
}

export default App;
