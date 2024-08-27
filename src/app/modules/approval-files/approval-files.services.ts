import { SaveToCloudinary } from "../../utils/uploadImage";
import TApprovalFiles from "./approval-files.type";

export const createApprovalFilesDB = (file: any, payload: TApprovalFiles) => {
  const imageName = `${payload.from}-${payload.title}`;
  const sendFile = SaveToCloudinary(imageName, file.path);
  //   console.log(file.path);
};
