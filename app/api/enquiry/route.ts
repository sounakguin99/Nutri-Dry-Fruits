import { NextResponse } from "next/server";
import dbConnect from "../../../backend/lib/dbconnect";
import EnquiryForm from "../../../backend/models/enquiry"; // Ensure you have an enquiryModel created

export async function POST(request: Request) {
  try {
    // Parse the incoming JSON from the request body
    const body = await request.json();

    const { name, email, phone, address, message, selectedProducts } = body;

    // Validate required fields
    if (
      !name ||
      !email ||
      !phone ||
      !address ||
      !message ||
      !selectedProducts
    ) {
      return NextResponse.json(
        { message: "All fields are required, including selected products." },
        { status: 400 }
      );
    }

    // Establish database connection
    await dbConnect();

    // Create a new document with the enquiry form data
    const enquiryFormData = new EnquiryForm(body);

    // Save the data to the database
    await enquiryFormData.save();

    // Return a success response to the client
    return NextResponse.json(
      { message: "Enquiry form submitted successfully!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in enquiry form handler:", error);

    // If there is an error, return a failure response
    return NextResponse.json(
      { message: "Server error", error },
      { status: 500 }
    );
  }
}
