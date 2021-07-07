import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import * as S from './styled';

export default function Home() {
    const history = useHistory();
    const [usuario, setUsuario] = useState('');
    const [erro, setErro] = useState(false);

    function handlePesquisa() {
        axios.get(`https://api.github.com/users/${usuario}/repos`)
          .then(response => {
            const repositories = response.data;
            const repositoriesName = [];

            repositories.map(repository => (
              repositoriesName.push({
                  "name": repository.name,
                  "owner": {
                      "user": repository.owner.login,
                      "avatar": repository.owner.avatar_url,
                      "url": repository.owner.html_url
                  },
                  "description": repository.description,
                  "url": repository.html_url
              })
            ));

            localStorage.setItem('owner', JSON.stringify({"user": repositoriesName[0].owner.user, "avatar": repositoriesName[0].owner.avatar, "url": repositoriesName[0].owner.url}));
            localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
            setErro(false);
            history.push('/repositorios');
          })
          .catch(err => {
            setErro(true);
            console.log(err);
          });
      }

    return (
        <S.Main>
            <S.Image src="/gamagit-logo.png" alt="Gama.Git" />
            <S.Container>
                <S.Input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)} />
                <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
            </S.Container>
            { erro ? <S.ErrorMsg>Ocorreu um erro. Tente outro usuário</S.ErrorMsg> : '' }
        </S.Main>
    );
}