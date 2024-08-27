import mongoose, { Mongoose, Schema } from "mongoose";
import TApprovalFiles from "./approval-files.type";

const approvalFilesSchema = new Schema<TApprovalFiles>({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  from: {
    type: String,
    required: [true, "EmployeeName is required"],
  },
  fileSrc: {
    type: String,
    required: [true, "Letter file is required"],
  },
  employeeId: {
    type: mongoose.Schema.ObjectId,
    required: [true, "EmployeeId is required"],
  },
  managerId: {
    type: mongoose.Schema.ObjectId,
    required: [true, "ManagerId is required"],
  },
  status: {
    enum: ["pending", "reviewed", "approved", "rejected"],
    required: [true, "Status is required"],
    default: "pending",
  },
  comments: {
    type: String,
    required: false,
  },
});

const approvalFilesModel = mongoose.model<TApprovalFiles>(
  "approvalFile",
  approvalFilesSchema
);

export default approvalFilesModel;
