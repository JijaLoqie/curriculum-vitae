import { Box, Typography } from "@mui/material"
import { DmitryData } from "../../entities/Dmitry/DmitryData"

export function StartBlock() {
  return (
    <Box sx={{
      pt: 18,
      pb: 2
    }}>
      <Typography gutterBottom variant="h3">{DmitryData.firstName} {DmitryData.lastName}</Typography>
      <Typography variant="h5">{DmitryData.position}</Typography>
    </Box>
  )
}
