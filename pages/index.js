import React from "react";
import config from "../config.json"
import styled from "styled-components";
import { CSSReset } from "../src/compoents/CSSReset";
import Menu from "../src/compoents/Menu";
import { StyledTimeline } from "../src/compoents/Timeline";
function HomePage() {
  const estiloDaHome = {
    //backgroundColor: "red"
  };

  const [valorDoFiltro, setValorDoFiltro] = React.useState('Angular');

  return (
    <>
      <CSSReset />
      <div style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        // backgroundColor: "red",
      }}>
        <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
        <Header />
        <TimeLine searchValue={valorDoFiltro} playlists={config.playlists} />
      </div>
    </>
  );
}

export default HomePage

// function Menu() {
//   return (
//     <div>
//       Menu
//     </div>
//   )
// }

const StyledHeader = styled.div`
img{
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.user-info {
  margin-top: 50px;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 16px 32px;
  gap: 16px;
}
`;
function Header() {
  return (
    <StyledHeader>
      {/* <img src="banner" /> */}

      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>
            {config.name}
          </h2>
          <p>
            {config.job}
          </p>
        </div>
      </section>
    </StyledHeader>
  )
}
function TimeLine({ searchValue, ...props }) {

  const playlistsNames = Object.keys(props.playlists);
  //Statement
  //Retorno por expressão
  return (
    <StyledTimeline>
      {
        playlistsNames
          .map((playlistsName) => {
            const videos = props.playlists[playlistsName];
            console.log(playlistsName)
            console.log(videos);
            return (
              <section>
                <h2>{playlistsName}</h2>
                <div>
                  {
                    videos
                      .filter((video) => {
                        const titleNormalized = video.title.toLowerCase();
                        const searchValueNormalized = searchValue.toLowerCase();
                        return titleNormalized.includes(searchValueNormalized)
                      })
                      .map((video) => {
                        return (
                          <a href={video.url}>
                            <img src={video.thumb} />
                            <span>
                              {video.title}
                            </span>
                          </a>
                        )
                      })
                  }
                </div>
              </section>
            )
          })}
    </StyledTimeline>
  )
}