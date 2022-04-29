import Image from 'next/image'
import EscudoNegro from '../../public/assets/escudoNegro.png';
import { FormEvent, useState } from 'react';
import { SearchResults } from '../components/SearchResults';
import { AiOutlineSearch } from 'react-icons/ai';
import { 
  Container,
  Content,
  Separator,
  Line
} from './styles';

export default function Home() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  async function handleSearch(event: FormEvent) {
    event.preventDefault();

    // Não pode estar vazio tiramos os espaços vazios
    if(!search.trim()) {
      return
    }

    const response = await fetch(`http://localhost:3333/cities?q=${search}`)
    const data = await response.json();
    setResults(data);

  }

  return (
    <Container>
      <Content>
        <h1>Monitoramento</h1>
        <form onSubmit={handleSearch}>
          <input 
            type="text" 
            value={search} 
            onChange={e => setSearch(e.target.value)}
            placeholder="Ex: Joinvile"
          />
          <button type="submit"><AiOutlineSearch size={46} color="#FCFCFC"/></button>
        </form>

        <Separator>
          <Line />
          <p>Cidades</p>
          <Line />
        </Separator>
        
        <SearchResults results={results}/>
      </Content>
      <Image 
        src={EscudoNegro} 
        alt="Escudo negro"
      />
    </Container>
  )
}
