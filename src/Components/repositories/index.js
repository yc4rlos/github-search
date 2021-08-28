import React, {useEffect, useState} from "react";
import * as S from './styled';
import { RepositoryItem } from "../index";
import useGithub from "../../Hooks/github-hooks";
import { Grid } from "@material-ui/core";

const Repositories = () => {
    const {githubState, getUserRepos, getUserStarred} = useGithub();
    const [hasUserForSearchRepos, setHasUserForSearchRepos] = useState(false);

    useEffect(() => {
        if(!!githubState.user.login){
            getUserRepos(githubState.user.login);
            getUserStarred(githubState.user.login);
        }
        setHasUserForSearchRepos(githubState.repositories);
    }, [githubState.user.login]);

    return (
        <>
        {hasUserForSearchRepos? (
            <S.Stabs selectedTabClassName="is-selected" selectedTabPanelClassName="is-selected">
                <S.StabList>
                    <S.Stab>Repositories</S.Stab>
                    <S.Stab>Starred</S.Stab>
                </S.StabList>
                <S.StabList>
                    <S.StabPanel>
                        <S.WrapperList>
                            <Grid container spacing={3}>
                            {githubState.repositories.map((item) => (
                            <RepositoryItem 
                            key={item.id} 
                            name={item.name} 
                            linkToRepo={item.html_url} 
                            fullname={item.full_name}/>
                            ))}
                            </Grid>
                        </S.WrapperList>
                    </S.StabPanel>
                    <S.StabPanel>
                    <Grid container spacing={3}>
                            {githubState.starred.map((item) => (
                            <RepositoryItem 
                            key={item.id} 
                            name={item.name} 
                            linkToRepo={item.html_url} 
                            fullname={item.full_name}/>
                            ))}
                    </Grid>
                    </S.StabPanel>
                </S.StabList>
            </S.Stabs>
        ):(
            <> </>
        )}
        </>

       
    )
};
export default Repositories;
