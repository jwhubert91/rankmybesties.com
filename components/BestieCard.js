import React from "react"
import { Avatar, Card } from "@mui/material"

const allPossibleRanks = [0, 1, 2, 3]

function BestieCard({ name, imgSrc, rank, selectNextRank }) {
  return (
    <Card
      sx={{
        padding: 1,
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <Avatar alt={name} src={imgSrc} sx={{ width: 40, height: 40 }} />
      <span style={{ width: "100%", textAlign: "center", fontWeight: "bold" }}>
        {name}
      </span>
      <select
        value={rank}
        onChange={(e) => selectNextRank(rank, Number(e.target.value))}
      >
        {allPossibleRanks.map((next, idx) => (
          <option key={idx} value={next}>
            {next + 1}
          </option>
        ))}
      </select>
    </Card>
  )
}

export default BestieCard
