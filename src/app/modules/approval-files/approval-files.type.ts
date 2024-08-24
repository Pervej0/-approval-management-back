import { Types } from "mongoose";

type TApprovalFiles = {
  from: string;
  title: string;
  fileSrc: string;
  employeeId: Types.ObjectId;
  currentNumber: string;
  managerId: Types.ObjectId;
  status: "pending" | "reviewed" | "approved" | "rejected";
  comments?: string;
};

export default TApprovalFiles;
