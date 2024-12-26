// route.ts
import { NextResponse } from "next/server";
import dbConnect from "../../../backend/lib/dbconnect";
import ContactForm from "../../../backend/models/contactModel";

export async function POST(request: Request) {
  try {
    // Parse the incoming JSON from the request body
    const body = await request.json();

    const { name, email, phone, message, terms } = body;

    // Validate required fields
    if (!name || !email || !phone || !message || !terms) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    // Establish database connection
    await dbConnect();

    // Create a new document with the contact form data
    const contactFormData = new ContactForm(body);

    // Save the data to the database
    await contactFormData.save();

    // Return a success response to the client
    return NextResponse.json(
      { message: "Contact form submitted successfully!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in contact form handler:", error);

    // If there is an error, return a failure response
    return NextResponse.json(
      { message: "Server error", error },
      { status: 500 }
    );
  }
}
