import ViniTube from "../ViniTube.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import Banner from "../src/components/Banner";

function HomePage() {
    const estilosDaHomePage = { 
        // backgroundColor: "red" 
    }

    return (
        <>
        <CSSReset />
        <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
            <Menu />
            <Header />
            <Timeline playlists={ViniTube.playlists} />
        </div>
        </>
    );
}

export default HomePage

const StyledHeader = styled.div`
        img {
            width: 80px;
            height: 80px;
            border-radius:50%
        }
        .user-info{
            margin-top: 50px;
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
            <Banner/>
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

function Timeline(props) {
    const playlistNames = Object.keys(props.playlists);

    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = props.playlists[playlistName];
                console.log(videos)
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                        {videos.map((video) => {
                    return (
                            <a href={video.url}>
                                <img src={video.thumb} />
                                <span>
                                    {video.title}
                                </span>
                            </a>
                            )})}
                        </div>
                    </section>

                )
            })}
            </StyledTimeline>
    )
}