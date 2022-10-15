import React from "react"
import { Card, Stack } from "@mui/material"
import BestieCard from "./BestieCard"

const CHAMATH_IMAGE_URL = "/images/besties/chamath.jpeg"
const FRIEDBERG_IMAGE_URL = "/images/besties/friedberg.jpeg"
const JASON_IMAGE_URL = "/images/besties/jason.jpeg"
const SACKS_IMAGE_URL = "/images/besties/sacks.jpeg"

function Ranker() {
  return (
    <Card
      sx={{
        padding: 2,
        backgroundColor: "transparent",
        marginY: 2,
        width: "100%",
        maxWidth: "400px",
        border: "1px solid white",
      }}
    >
      <Stack spacing={2}>
        <BestieCard name="Chamath" imgSrc={CHAMATH_IMAGE_URL} />
        <BestieCard name="Friedberg" imgSrc={FRIEDBERG_IMAGE_URL} />
        <BestieCard name="Jason" imgSrc={JASON_IMAGE_URL} />
        <BestieCard name="Sacks" imgSrc={SACKS_IMAGE_URL} />
      </Stack>
    </Card>
  )
}

export default Ranker
