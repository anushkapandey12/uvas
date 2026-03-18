import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields" },
        { status: 400 }
      )
    }

    const supabase = await createClient()

    const { error } = await supabase.from("contact_messages").insert({
      name,
      email,
      phone: phone || null,
      subject,
      message,
    })

    if (error) {
      console.error("Supabase error:", error)
      return NextResponse.json(
        { error: "Failed to submit message. Please try again." },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: "Your message has been sent successfully!" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Server error:", error)
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    )
  }
}
