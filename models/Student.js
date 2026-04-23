// models/Student.js
import mongoose, { Schema } from "mongoose";

const studentSchema = new Schema(
  {
    userId: { 
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true, 
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    dateOfBirth: {
      type: Date,
    },
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Other'],
    },
    contactEmail: {
      type: String,
      trim: true,
      lowercase: true,
    },
    contactPhone: {
      type: String,
      trim: true,
    },
    address: {
      street: String,
      city: String,
      state: String,
      zipCode: String,
      country: String,
    },
    enrollmentDate: {
      type: Date,
      default: Date.now,
    },
    gradeLevel: {
      type: String,
      trim: true,
    },

    section: {
      type: String, 
      trim: true,
      default: '' 
    },
    strengthsAndInterests: {
      type: [String],
      default: [] 
    },
    overallGPA: {
      type: Number, 
      default: 0.0
    },
    currentGrades: [ 
      {
        subject: { type: String, required: true },
        grade: { type: String, required: true }, 
      }
    ],
    achievements: [ 
      {
        title: { type: String, required: true }, 
        description: String,
        date: Date, 
      }
    ],
  },
  {
    timestamps: true, 
  }
);

const Student = mongoose.models.Student || mongoose.model("Student", studentSchema);

export default Student;