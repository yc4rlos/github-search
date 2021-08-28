import React from "react";
import * as S from './styled';

const RepositoryItem = ({name, linkToRepo, fullname}) => {
    return (
        <S.sGrid item xs={6} sm={3}>
        <S.sPaper>
            <S.WrapperTitle>{name}</S.WrapperTitle>
            <S.WrapperFullName>Full name:</S.WrapperFullName>
            <S.WrapperLink href={linkToRepo}target="_blank">{fullname}</S.WrapperLink>
        </S.sPaper>
        </S.sGrid>
    )
}

export default RepositoryItem;