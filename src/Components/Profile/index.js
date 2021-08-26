import React from 'react';
import * as S from './styled';

const Profile = () => {
    return(
        <S.Wrapper>
            <S.WrapperImage src='https://avatars.githubusercontent.com/u/48285185?v=4' alt='Picture of user'/>
            <S.WrapperInfoUser>
                <h1>Yan Carlos</h1>
                <S.WrapperUsername>
                    <h3>Username:</h3>
                    <a href="https://github.com/R3SP31T4" target="_blank">R3SP31T4</a>
                </S.WrapperUsername>
                <S.WrapperStatusCount>
                    <div>
                        <h4>Follows</h4>  
                        <span>500</span>
                    </div>
                    <div>
                        <h4>Starred</h4>  
                        <span>500</span>
                    </div>
                    <div>
                        <h4>Followings</h4>  
                        <span>500</span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrapperInfoUser>
        </S.Wrapper>
    )
}

export default Profile;