import React, { useEffect, useState, useCallback, useMemo } from 'react';
import {FiGithub, FiInstagram, FiLinkedin, FiChevronRight, FiChevronLeft} from 'react-icons/fi'

import {Container, Content, Header, HeaderContainer, Select, ButtonContainer} from './styles'

import axios from 'axios';

const api = axios.create({});

interface PlayerProps {
  firstName: string;
  lastName: string;
  key?: string;
  league: {
    imageUrls: {
      dark: string;
    }
    name: string;
  }
  nation: {
    imageUrls: {
      medium: string;
    }
    name: string;
  }
  club: {
    imageUrls: {
      dark: {
        medium: string;
      }
    }
    id: string;
  }
  headshot: {
    imgUrl: string;
  }
  position: string;
  rating: string;
}


const App: React.FC = () => {
  const [page, setPage] = useState(1);
  const [nationality, setNationality] = useState('Brazil'); 
  const [players, setPlayers] = useState<PlayerProps[]>([]);

  const minPage = useMemo(() => page, [page])
  const maxPage = useMemo(() => page + 14, [page])

  useEffect(() => {
    async function loadPlayers() {
      let playersUnShow: PlayerProps[] = [];

      for (let i = minPage ; i <= maxPage; i++) {
        const response = await api.get(`item?page=${i}`);

        const data: PlayerProps[] = response.data.items;

        const playersSearch = data.reduce((result, player) => {
          if (player.nation.name === nationality) {
            const { firstName, lastName, league, nation, club, headshot, position, rating } = player;
            const key= `${firstName}-${lastName}-${club.id}-${position}-${rating}`;

            result.push({
              firstName,
              lastName,
              league,
              nation,
              club,
              headshot,
              position,
              rating,
              key,
            })
          }
          return result;
        }, [] as PlayerProps[]);

        playersUnShow.push(...playersSearch);        
      }

      const playersStringify = playersUnShow.map(player => JSON.stringify(player))

      const playersWithoutReplica: PlayerProps[] = Array.from(new Set(playersStringify)).map(nameOriginal => JSON.parse(nameOriginal))

      setPlayers(playersWithoutReplica);
    }

    loadPlayers();
  }, [nationality, page])

  const handleChangeNationality = useCallback((event) => {
    setNationality(event.target.value);
    setPage(1);
  }, [])

  const handlePreviousPage = useCallback(() => {
    setPage(page => page - 15);
  }, [])

  const handleNextPage = useCallback(() => {
    setPage(page => page + 15);
  }, [])

  const currentPage = useMemo(() => maxPage / 15 , [page])

  return(
    <Container>
      <HeaderContainer>
        <Header>
            <a 
              href='https://github.com/VladeMelo'
            >
              <div><FiGithub /></div>

              <strong>VladeMelo</strong>
            </a>
            <a 
              href='https://www.instagram.com/vlademir_melo/?hl=pt-br'
            >
              <div><FiInstagram /></div>

              <strong>@vlademir_melo</strong>
            </a>
            <a
              href='https://www.linkedin.com/in/vlademir-melo-974686187/'
            >
              <div><FiLinkedin /></div>    

              <strong>Vlademir Melo</strong>
            </a>
            <img src='https://cdn.game.tv/game-tv-content/images_3/496f3415fdd1cf05684e2ddcdcc8418d/AppIcons.jpg' alt='Fifa 19' />
            <Select onChange={handleChangeNationality} value={nationality} >
              <option value='Brazil'>Brazil</option>
              <option value='England'>England</option>
              <option value='Germany'>Germany</option>
              <option value='Argentina'>Argentina</option>
              <option value='France'>France</option>
              <option value='Holland'>Holland</option>
              <option value='Portugal'>Portugal</option>
              <option value='Belgium'>Belgium</option>
              <option value='Italy'>Italy</option>
              <option value='Spain'>Spain</option>
            </Select>
        </Header>
      </HeaderContainer>
      <Content>
        {players.map(props => (
            <div key={props.key} >
              <strong>{props.firstName} {props.lastName}</strong>

              <div>
                <strong>{props.position}</strong>

                <strong>{props.rating}</strong>

                <img src={props.headshot.imgUrl} alt='Portugal' />

                <img src={props.nation.imageUrls.medium} alt='Portugal' />

                <img src={props.league.imageUrls.dark} alt='Serie A Tim' />

                <img src={props.club.imageUrls.dark.medium} alt='Juventus' />
              </div>
            </div>
        ))}
      </Content>
      <ButtonContainer>
          {page !== 1 && 
            <button onClick={handlePreviousPage} >
              <FiChevronLeft color='#2e4272' size={16} />
            </button>}
          <div>
            <strong>{currentPage}</strong>
          </div>
          <button onClick={handleNextPage} >
            <FiChevronRight color='#2e4272' size={16} />
          </button>
        </ButtonContainer>
    </Container>
  )
}

export default App;
