import ReactPlayer from 'react-player'
import { useRouter } from 'next/router'
import styled from 'styled-components';

const VideoBox = styled.div`
    margin:1em;
    background-color: red;
    height:40em;
    @media (max-width: 640px) {
        background-color: green;
        height:18em;
        margin:0;
    }
`
export default function VideoPlayer() {
    const { query } = useRouter();
    console.log(query)
    return (
        <>
            <VideoBox>
                <ReactPlayer
                    className='react-player'
                    playing='true'
                    controls='true'
                    url={`https://www.youtube.com/watch?v=${query.video}`}
                    width='100%'
                    height='100%'
                />
            </VideoBox>
            <p></p>
        </>
    )
}

// https://www.youtube.com/watch?v=$"XHcycchWuDhN63bDpQsOr4GrS6s