'use client'
import { FormControl, FormLabel, Input } from "@mui/material"
import { useState } from "react"

const UploadButton = () => {

  const [loading, setLoading] = useState(false)
  const [] = useState(false)
  const [] = useState(false)

  return (
    <>
      <FormControl>
        <FormLabel htmlFor="uploadFileBTN" >
          آپلود عکس
        </FormLabel>
        <Input id={'uploadFileBTN'} type="file" hidden  />

      
      </FormControl>
    </>
  )
}
export default UploadButton