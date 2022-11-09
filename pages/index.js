import React from "react";
import ViniTube from "../ViniTube.json";
import styled from "styled-components";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import Banner from "../src/components/Banner";

function HomePage() {

    const [valorDoFiltro, setValorDoFiltro] = React.useState("");

    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
                {/* Prop Drilling */}
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
                <Header />
                <Timeline searchValue={valorDoFiltro} playlists={ViniTube.playlists} />
            </div>
        </>
    );
}

export default HomePage

const StyledHeader = styled.div`
        background-color: ${({ theme }) => theme.backgroundLevel1};
        img {
            width: 80px;
            height: 80px;
            border-radius:50%
        }
        .user-info{
            display: flex;   
            align-items: center;         
            width: 100%;
            padding: 16px 32px;
            gap: 16px
        }
        
    `;

function Header() {
    return (
        <StyledHeader>
            <Banner />
            <section className="user-info">
                <img src={`http://github.com/${ViniTube.github}.png`} />
                <div>
                    <h2>{ViniTube.name}</h2>
                    <p>{ViniTube.job}</p>
                </div>
            </section>
        </StyledHeader>
    )
};

function Timeline({ searchValue, ...props }) {
    const playlistNames = Object.keys(props.playlists);

    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = props.playlists[playlistName];
                // console.log(videos)
                return (
                    <section key={playlistName}>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos
                                .filter((video) => {
                                    const titleNormalized = video.title.toLowerCase();
                                    const searchValueNormalized = searchValue.toLowerCase();
                                    return titleNormalized.includes(searchValueNormalized)
                                })
                                .map((video) => {
                                    return (
                                        <a key={video.url} href={video.url}>
                                            <img src={video.thumb} />
                                            <span>
                                                {video.title}
                                            </span>
                                        </a>
                                    )
                                })}
                        </div>
                    </section>

                )
            })}
        </StyledTimeline>
    )
}