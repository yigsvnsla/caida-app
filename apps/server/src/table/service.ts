import type { CreateTableDTO, TableDTO } from "./dto";

export class TableService {
  private _tables = new Map<string, TableDTO>();

  public GetTables(): TableDTO[] {
    return Array.from(this._tables.values());
  }

  public GetTable(uuid: string): TableDTO | undefined {
    return this._tables.get(uuid);
  }

  public SetTable(t: CreateTableDTO): TableDTO {
    const uuid = Math.random().toString(36).substring(7);
    return this._tables.set(uuid, { ...t, uuid }).get(uuid)!;
  }
}
