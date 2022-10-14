import Head from "next/head"
import Image from "next/image"
import { Container, Typography, Box, Button } from "@mui/material"
import Footer from "../components/Footer"
import TwitterIcon from "@mui/icons-material/Twitter"
import AllInImage from "../assets/images/all-in-background.png"

export default function Home() {
  return (
    <>
      <div
        style={{
          position: "absolute",
          zIndex: -10,
          height: "100%",
          width: "100%",
        }}
      >
        <Image src={AllInImage} layout="fill" objectFit="cover" quality={100} />
      </div>
      <Container
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Head>
          <title>
            RankMyBesties.com - Rank your All-In besties and share with your
            friends
          </title>
          <meta
            name="description"
            content="Visit rankmybesties.com to rank your All-In besties and share with your friends"
          />
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <Typography
          variant="h4"
          component="h1"
          sx={{
            padding: 0,
            marginY: 4,
            color: "white",
            textAlign: "center",
          }}
        >
          RankMyBesties.com
        </Typography>
        <main
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            flexBasis: 1,
            justifyContent: "space-evenly",
          }}
        >
          <Box
            sx={{
              flexBasis: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              component="h2"
              sx={{ marginBottom: 16, padding: 0, textAlign: "center" }}
              maxWidth="400px"
            >
              Rank your All-In besties and share with your friends on Twitter
            </Typography>
            <Button variant="contained" size="large" sx={{ bottom: "0" }}>
              Sign Up with Twitter <TwitterIcon sx={{ paddingLeft: 1 }} />
            </Button>
          </Box>
        </main>
        <Footer />
      </Container>
    </>
  )
}
