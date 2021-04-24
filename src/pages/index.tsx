import { GetStaticProps} from 'next'; //tipo de tipagem
import {format, parseISO} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { api } from '../services/api';

//SPA
//SSR
//SSG
type Episode ={
   
    id: string;
    title: string;
    members:string;
    published_at: string;
    //...
}
const episodes= data.map(episode=>{
  return {
    id:episode.id,
    title:episode.title,
    thumbnail:episode.thumbnail,
    members:episode.members,
    publishedAt:format(parseISO(episode.published_at), 'd MMM yy', { locale:ptBR}),
    duration:Number(episode.file.duration),
    description: episode.description,
    url: episode.file.url,
  }
})
type  HomeProps ={
  episodes: Array<Episode> // é necessário informar o tipo de array e o tipo das props
}

export default function Home(props:HomeProps) {
    return (
    <div>
    <h1>index</h1>
    <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}
export const getStaticProps:GetStaticProps = async () =>{
  const response = await api.get('episodes', {
    params: {
      _limit:12,
      _sort:'published_at',
      _order:'desc',
    }
  })
  const data = response.data

  return{
    props:{ //propriedades
      episodes:data,
    },
    revalidate:60*60*8 ,  //Permite escolher de quanto em quanto tempo vai ser gerado
                          //uma nova versão
  }
}
