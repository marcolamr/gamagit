import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as S from './styled';

export default function Repositories() {
    const history = useHistory();
    const [repositories, setRepositories] = useState([]);
    const [owner, setOwner] = useState({});

    useEffect(() => {
        const repositoriesName = JSON.parse(localStorage.getItem('repositoriesName'));
        const user = JSON.parse(localStorage.getItem('owner'));

        if (repositoriesName !== null && user !== null) {
          setRepositories(repositoriesName);
          setOwner(user);
          localStorage.clear();
        } else {
          history.push('/');
        }
    }, [history]);

    return (
        <S.Main>
            <S.Container>
                <S.UserBlock>
                    <a href={owner.url} target="_blank" rel="noreferrer noopener"><S.UserImage src={owner.avatar} alt={owner.user} /></a>
                    <S.UserText>{owner.user}</S.UserText>
                </S.UserBlock>
                <Link to="/"><S.Logo src="/gamagit-logo.png" alt="" /></Link>
            </S.Container>

            <S.Content>
                { repositories.map(repository => (
                <S.Card>
                    <h1>{repository.name}</h1>
                    <p>{repository.description}</p>
                    <a href={repository.url} target="_blank" rel="noreferrer noopener">Acessar</a>
                </S.Card>
                )) }
            </S.Content>
        </S.Main>
    );
}