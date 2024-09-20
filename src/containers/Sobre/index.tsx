import Titulo from "../../components/Titulo"
import Paragrafo from "../../components/Paragrafo"
import { GithubSecao } from "./styles"

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae reiciendis
      vel quasi numquam itaque, quos voluptatum exercitationem modi optio fugit.
      Quis aut reprehenderit repellendus, similique accusantium unde aspernatur
      vitae obcaecati.
    </Paragrafo>
    <GithubSecao>
      <img
        src="https://github-readme-stats.vercel.app/api?username=getzada13&hide_title=false&hide_rank=false&show_icons=true&include_all_commits=true&count_private=true&disable_animations=false&theme=dracula&locale=en&hide_border=false"
        alt="stats graph"
      />
      <img
        src="https://github-readme-stats.vercel.app/api/top-langs?username=getzada13&locale=en&hide_title=false&layout=compact&card_width=320&langs_count=5&theme=dracula&hide_border=false"
        alt="languages graph"
      />
    </GithubSecao>
  </section>
)

export default Sobre
