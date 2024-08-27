import { SaveToCloudinary } from "../../utils/uploadImage";
import TApprovalFiles from "./approval-files.type";
import approvalFilesModel from "./approvalFiles.model";

export const createApprovalFilesDB = async (
  file: any,
  payload: TApprovalFiles
) => {
  const imageName = `${payload.from}-${payload.title}`;
  const sendFile = (await SaveToCloudinary(imageName, file.path)) as any;
  payload.fileSrc = sendFile?.secure_url;
  console.log(payload);
  const result = await approvalFilesModel.create(payload);
  return result;
};
