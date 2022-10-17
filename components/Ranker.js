import React, { useState } from "react"
import { Card, Stack } from "@mui/material"
import BestieCard from "./BestieCard"
import { originalBestieArray } from "../helpers/data"

function Ranker() {
  const [besties, setBesties] = useState(originalBestieArray)

  const selectNextRank = (currentRank, nextRank) => {
    const bestieObject = besties[currentRank]
    if (nextRank < currentRank) {
      // bestie is being promoted
      // shift all besties from nextRank to currentRank down one
      const nextArray = []
      for (let i = 0; i < 4; i++) {
        if (i < nextRank) {
          nextArray.push(besties[i])
        } else if (i === nextRank) {
          const prevObject = besties[i]
          nextArray.push(bestieObject)
          nextArray.push(prevObject)
        } else if (i > nextRank && i !== currentRank) {
          nextArray.push(besties[i])
        }
      }
      setBesties(nextArray)
    } else if (nextRank > currentRank) {
      // bestie is being demoted
      // shift all besties from nextRank to currentRank up one
      const nextArray = []
      for (let i = 0; i < 4; i++) {
        if (i < currentRank) {
          nextArray.push(besties[i])
        } else if (i > currentRank && i < nextRank) {
          nextArray.push(besties[i])
        } else if (i === nextRank) {
          const prevObject = besties[i]
          nextArray.push(prevObject)
          nextArray.push(bestieObject)
        } else if (i > nextRank) {
          nextArray.push(besties[i])
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
