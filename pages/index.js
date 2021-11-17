import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'

// AIzaSyCflOLzPL1AnSGpfjHDCxz1M65ESFGRAp8

const YOUTUBE_API = "https://www.googleapis.com/youtube/v3/videos"

export async function getServerSideProps() {

  const res = await fetch(`${YOUTUBE_API}?part=snippet&chart=mostPopular&maxResults=50&key=${process.env.YOUTUBE_API_KEY}`)
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}

const Container = styled.div`
width:100%;
`
const VideoList = styled.div`
position: relative;
display: flex;
flex-flow: row wrap;
 `
const VideoItem = styled.div`
flex:1;
    background-color: tomato;
    box-sizing: border-box;
    padding: 10px 0;
    outline: 2px solid blue;
    border: 1px solid #000;
    border-radius: 5px;
    margin:.5em;
    width:18em;
    @media (max-width: 992px) {
      flex-basis: 25%;
      background-color: red;
    }
    @media (max-width: 640px) {
      flex-basis: 50%;
      background-color: green;
      padding: 0 10px;
    }
`

const ThumbImage = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`
export default function Home({ data }) {
  console.log(data)
  const router = useRouter()

  return (
    <div >
      <Head>
        <title>Freetube</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container>
          <VideoList>
            {data.items.map(item => {
              const { id, snippet = {} } = item;
              const { title, thumbnails = {}, resourceId } = snippet;
              const { medium = {} } = thumbnails;

              return (
                <VideoItem key={id}>
                  <a onClick={() => router.push(`./${id}`)}>
                    <ThumbImage>
                      <img
                        width="320px"
                        // height={medium.height} 
                        src={medium.url} />
                      <h3 style={{ paddingLeft: "5px" }}>{title}</h3>
                    </ThumbImage>
                  </a>
                </VideoItem>
              )
            })}
          </VideoList>
        </Container>
      </main>

      <footer>
        Powered by{' '}
      </footer>
    </div>
  )
}

// "No filter selected. Expected one of: myRating, chart, id"