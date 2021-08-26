import React, {createContext, useState} from 'react';

export const GithubContest = createContext({
    user:{
        
    },
    repositories: [],
    starred: [],
});

const GithubProvider = ({props}) => {
    const [githubState, setGithubState] = useState({ 
        user:{
            login: undefined,
            name: undefined,
            publicUrl: undefined,
            blog: undefined,
            company: undefined,
            location:undefined,
            followers: 0,
            following: 0,
            public_gists: 0,
            public_repos: 0,
        },
        repositories: [],
        starred: [],
    });
    const contextValue = {
            githubState
    }
    return(
       
        <GithubProvider.Provider value={contextValue}> 
           
        </GithubProvider.Provider>
    )
}

export default GithubProvider;