import { FilterQuery, Query } from "mongoose";

class QueryBuilder<T> {
  public modelQuery: Query<T[], T>;
  public query: Record<string, unknown>;
  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.modelQuery = modelQuery;
    this.query = query;
  }
  search(searchableFields: string[]) {
    const searchTerm = this.query.searchTerm || "";
    if (searchTerm) {
      this.modelQuery = this.modelQuery.find({
        $or: searchableFields?.map((field) => ({
          [field]: { $regex: searchTerm, $option: "i" },
        })),
      } as FilterQuery<T>);
    }
    return this;
  }
  filter() {
    const queryObj: Record<string, unknown> = { ...this.query };
    const excludeFields = ["searchTerm", "sort"];
    excludeFields.map((item) => delete queryObj[item]);
    this.modelQuery = this.modelQuery.find(queryObj);
    return this;
  }
  sort() {
    const sortable = (this.query?.sort as string) || "-createdAt";
    this.modelQuery = this.modelQuery.sort(sortable);
    return this;
  }
  limit() {
    const limitable = Number(this.query.limit || 10);
    this.modelQuery = this.modelQuery.limit(limitable);
    return this;
  }
  paginate() {
    const limit = Number(this.query.limit || 10);
    const page = Number(this.query.page || 1);
    const skip = (page - 1) * limit;
    this.modelQuery = this.modelQuery.skip(skip).limit(limit);
    return this;
  }
  fields() {
    let fieldsData = "-_v";
    fieldsData = this.query.fields as string;
    this.modelQuery = this.modelQuery.select(fieldsData);
    return this;
  }
}

export default QueryBuilder;
