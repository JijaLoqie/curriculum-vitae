import { Button } from "@mui/material"

export function ContactButton({ icon, label, action }) {
  return (
    <Button onClick={action}
      variant="outlined" startIcon={icon} sx={{ textTransform: "none", minWidth: 0, fontSize: "1rem" }}>
      {label}
    </Button>
  )
}
