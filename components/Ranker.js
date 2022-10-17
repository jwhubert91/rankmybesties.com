import React, { useState } from "react"
import { Card, Stack } from "@mui/material"
import BestieCard from "./BestieCard"

const CHAMATH_IMAGE_URL = "/images/besties/chamath.jpeg"
const FRIEDBERG_IMAGE_URL = "/images/besties/friedberg.jpeg"
const JASON_IMAGE_URL = "/images/besties/jason.jpeg"
const SACKS_IMAGE_URL = "/images/besties/sacks.jpeg"

const originalBestieArray = [
  {
    name: "Chamath",
    imgSrc: CHAMATH_IMAGE_URL,
  },
  {
    name: "Friedberg",
    imgSrc: FRIEDBERG_IMAGE_URL,
  },
  {
    name: "Jason",
    imgSrc: JASON_IMAGE_URL,
  },
  {
    name: "Sacks",
    imgSrc: SACKS_IMAGE_URL,
  },
]

function Ranker() {
  const [besties, setBesties] = useState(originalBestieArray)
  const selectNextRank = (currentRank, nextRank) => {
    const workingArrayOfBesties = besties
    const bestieObject = workingArrayOfBesties[currentRank]
    if (nextRank < currentRank) {
      // bestie is being promoted
      // shift all besties from nextRank to currentRank down one
      const nextArray = []
      for (let i = 0; i < 4; i++) {
        if (i < nextRank) {
          nextArray.push(workingArrayOfBesties[i])
        } else if (i === nextRank) {
          const prevObject = workingArrayOfBesties[i]
          nextArray.push(bestieObject)
          nextArray.push(prevObject)
        } else if (i > nextRank && i !== currentRank) {
          nextArray.push(workingArrayOfBesties[i])
        }
      }
      setBesties(nextArray)
    } else if (nextRank > currentRank) {
      // bestie is being demoted
      // shift all besties from nextRank to currentRank up one
      const nextArray = []
      for (let i = 0; i < 4; i++) {
        if (i < currentRank) {
          nextArray.push(workingArrayOfBesties[i])
        } else if (i > currentRank && i < nextRank) {
          nextArray.push(workingArrayOfBesties[i])
        } else if (i === nextRank) {
          const prevObject = workingArrayOfBesties[i]
          nextArray.push(prevObject)
          nextArray.push(bestieObject)
        } else if (i > nextRank) {
          nextArray.push(workingArrayOfBesties[i])
        }
      }
      setBesties(nextArray)
    }
  }
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
        {besties.map((bestie, idx) => (
          <BestieCard
            name={bestie.name}
            imgSrc={bestie.imgSrc}
            rank={idx}
            key={idx}
            selectNextRank={selectNextRank}
          />
        ))}
      </Stack>
    </Card>
  )
}

export default Ranker
