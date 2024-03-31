import { Header } from '../widgets/Header/Header.jsx'
import { PaperCV } from '../widgets/PaperCV/PaperCV.jsx'
import { Box } from "@mui/material"

export function App() {

  return (
    <Box sx={{
      boxSizing: 'border-box',
      display: 'flex', alignItems: 'center',
      flexDirection: 'column'
    }}>
      <Header />
      <PaperCV />
    </Box>
  )
}

