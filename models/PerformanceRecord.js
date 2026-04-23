// models/PerformanceRecord.js
import mongoose, { Schema } from "mongoose";

const performanceRecordSchema = new Schema(
  {
    studentId: { 
      type: Schema.Types.ObjectId,
      ref: 'Student',
      required: true,
      unique: true, 
    },
    overallScore: {
      type: Number,
      min: 0,
      max: 100,
      default: 0,
    },
    overallAvgGrade: {
      type: String,
      trim: true,
    },
    overallAvgAttendance: {
      type: Number, 
      min: 0,
      max: 100,
      default: 0,
    },
    teacherRating: {
      type: String, 
      trim: true,
    },
    subjectPerformance: [
      {
        subject: { type: String, trim: true },
        score: { type: Number, min: 0, max: 100 },
        grade: { type: String, trim: true } 
      }
    ],
    monthlyAttendanceData: [
      {
        month: { type: String, trim: true }, 
        present: { type: Number, min: 0 },
        absent: { type: Number, min: 0 },
        totalClasses: { type: Number, min: 0 },
        percentage: { type: Number, min: 0, max: 100 } 
      }
    ],
    insightsAndRecommendations: [
      { type: String, trim: true }
    ],
    totalStudents: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.PerformanceRecord || mongoose.model('PerformanceRecord', performanceRecordSchema);