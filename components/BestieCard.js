import React from "react"
import { Avatar, Card } from "@mui/material"

function BestieCard({ name, imgSrc }) {
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
    </Card>
  )
}

export default BestieCard
