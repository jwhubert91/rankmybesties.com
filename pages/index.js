import Head from "next/head"
import Image from "next/image"
import { Container, Typography, Box, Button } from "@mui/material"
import Footer from "../components/Footer"
import TwitterIcon from "@mui/icons-material/Twitter"
import Ranker from "../components/Ranker"

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
        <Image
          src={"/images/all-in-background.png"}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
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
            flex: 1,
            display: "flex",
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              textAlign: "center",
              paddingY: 2,
            }}
          >
            <Typography
              variant="h6"
              component="h2"
              sx={{ padding: 0 }}
              maxWidth="400px"
            >
              Rank your All-In besties and share with Twitter to see how you
              compare
            </Typography>
            <Ranker />
            <Button
              variant="contained"
              size="small"
              sx={{ bottom: "0", paddingY: 1.5 }}
            >
              Share to Twitter
              <TwitterIcon sx={{ paddingLeft: 1 }} />
            </Button>
          </Box>
        </main>
        <Footer />
      </Container>
    </>
  )
}
