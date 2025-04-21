import { SxProps, Theme } from '@mui/material'

export const wrapperSx: SxProps<Theme> = {
  maxWidth: 400,
  mx: 'auto',
  mt: 8,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
}

export const titleSx: SxProps<Theme> = {
  textAlign: 'center',
  mb: 2,
}

export const submitButtonSx: SxProps<Theme> = {
  mt: 2,
}
