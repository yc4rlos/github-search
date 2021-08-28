import React, {useState} from 'react';
import * as S from './styled';
import useGithub from '../../Hooks/github-hooks';

const Header = () => {
    
    const {getUser} = useGithub();
    const [usernameForSearch, setUsernameForSearch] = useState();

    const submitGetUser = () => {
        if (!usernameForSearch) return;
        return getUser(usernameForSearch);
    }
        
    return(
        <header>
            <S.Wrapper>
                <S.sTextField type="text" placeholder="Enter the username" id="outlined-basic" label="Username" variant="outlined"
                onChange={(event) => setUsernameForSearch(event.target.value)}/>

                <S.sButton variant="contained" onClick={submitGetUser}>Search</S.sButton>
            </S.Wrapper>
        </header>
    );
};

export default Header;