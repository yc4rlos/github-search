import React from "react";
import * as S from './styled';
import { RepositoryItem } from "../index";
const Repositories = () => {

    return (

            <S.Stabs selectedTabClassName="is-selected" selectedTabPanelClassName="is-selected">
                <S.StabList>
                    <S.Stab>Repositories</S.Stab>
                    <S.Stab>Starred</S.Stab>
                </S.StabList>
                <S.StabList>
                    <S.StabPanel><RepositoryItem name="Clone-Netflix" linkToRepo="https://github.com/R3SP31T4/CloneNetflix" fullname="R3SP31T4/CloneNetflix"/></S.StabPanel>
                    <S.StabPanel><RepositoryItem/></S.StabPanel>
                </S.StabList>
            </S.Stabs>

       
    )
};
export default Repositories;
