import { Paper, Divider } from "@mui/material"
import { ContactsSection } from "../Contacts/ContactsSection"
import { StartBlock } from "../StartBlock/StartBlock"


export function PaperCV({ children }) {
  return (
    <Paper sx={{
      width: "80%", minWidth: "800px",
      height: "500vh",
      position: "relative", top: "-250px",
      textAlign: "center",
      display: "flex", flexDirection: "column", alignItems: "center",
    }}>
      <StartBlock />
      <ContactsSection />


    </Paper>
  )
}
