import React, {useEffect, useState} from "react";
import * as S from './styled';
import { RepositoryItem } from "../index";
import useGithub from "../../Hooks/github-hooks";
import { Grid, Tab, Tabs } from "@material-ui/core";


var TabPanel = (props) => {
    const {children, index, value} = props;
    return(
        <>
        {value === index && (
            <div>
                {children}
            </div>
        )}
        </>
    )
    
};



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

    const [value, setValue] = useState(0);

    const handleChange = (e, value) => {
        setValue(value);
    }

    return (
        <>
        {hasUserForSearchRepos? (
            <div>
                <S.TabBox>
                    <Tabs value={value} onChange={handleChange} textColor="primary" indicatorColor="primary">
                        <Tab label="Repositories"></Tab>
                        <Tab label="Starred"></Tab>
                    </Tabs>
                </S.TabBox>
                    <TabPanel value={value} index={0}>
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
                    </TabPanel>
                    
                    <TabPanel value={value} index={1}>
                        <S.WrapperList>
                            <Grid container spacing={3}>
                            {githubState.starred.map((item) => (
                                <RepositoryItem 
                                key={item.id} 
                                name={item.name} 
                                linkToRepo={item.html_url} 
                                fullname={item.full_name}/>
                            ))}
                            </Grid>
                        </S.WrapperList>
                    </TabPanel>
                
            </div>
        ):(
            <> </>
        )}
        </>

       
    )
};
export default Repositories;
