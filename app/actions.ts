"use server"

import fs from 'fs/promises'
import path from 'path'

export async function submitEmailLocal(email: string) {
  if (!email) return { error: "Email is required" }

  try {
    // We will store the emails in a simple emails.csv file in the project root
    const filePath = path.join(process.cwd(), 'emails.csv')
    const timestamp = new Date().toISOString()
    
    // Append the email and timestamp as a new line in the CSV
    await fs.appendFile(filePath, `${email},${timestamp}\n`)
    
    return { success: true }
  } catch (error: any) {
    console.error("Local storage error:", error)
    return { error: "Failed to store email locally." }
  }
}
