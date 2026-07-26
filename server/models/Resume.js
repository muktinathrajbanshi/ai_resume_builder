import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: { type: String, default: "Untitled Resume" },
  public: { type: Boolean, default: "classic" },
  template: { type: String, default: "classic" },
  accent_color: { type: String, default: "#3B82F6" },
  professional_summary: { type: String, default: "" },
  skills: [{ type: String }],
  personal_info: {},
});
