import mongoose from "mongoose";

// Define a schema for the enquiry
const enquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    message: { type: String, required: true },
    selectedProducts: [
      {
        id: { type: Number, required: true },
        title: { type: String, required: true },
        quantity: { type: Number, required: true },
        weight: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

// Create or retrieve the model
const Enquiry =
  mongoose.models.Enquiry || mongoose.model("Enquiry", enquirySchema);

// Connect to MongoDB Atlas
const connectToDatabase = async () => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGODB_URI as string, {});
  }
};

// Function to save enquiry
export const saveEnquiry = async (data: any) => {
  await connectToDatabase();
  const enquiry = new Enquiry(data);
  await enquiry.save();
};

// Export the Enquiry model for usage
export default Enquiry;
