import { Paper, Button } from "@mui/material"
import { DmitryData } from "../../entities/Dmitry/DmitryData"
import { Mail, Phone, Telegram } from "@mui/icons-material"
import { ContactButton } from "./ContactButton"


const contacts = [
  { icon: <Telegram />, label: DmitryData.contacts.telegram, action: () => { console.log("Telegram") } },
  { icon: <Phone />, label: DmitryData.contacts.phone, action: () => { console.log("Phone") } },
  { icon: <Mail />, label: DmitryData.contacts.email, action: () => { console.log("Email") } },
]


export function ContactsSection() {
  return (
    <Paper variant="outlined" sx={{
      display: "flex", gap: 2,
      width: "80%",
      py: 2,
      justifyContent: "center",
    }}>
      {
        contacts.map((contact, index) => (
          <ContactButton key={index} {...contact} />
        ))
      }
    </Paper>
  )
}
