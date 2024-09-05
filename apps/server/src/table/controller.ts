import { Elysia, StatusMap, t } from "elysia";
import { TableService } from "./service";
import { CreateTableDTO } from "./dto";

export const TableController = new Elysia({ prefix: "/table" })
  .decorate({
    service: new TableService(),
  })

  .get(
    "/",
    ({ service, set }) => {
      set.status = StatusMap.OK;
      return service.GetTables();
    },
    {}
  )

  .get(
    "/:id",
    ({ service, set, params: { id } }) => {
      set.status = StatusMap.OK;
      return service.GetTable(id);
    },
    {
      params: t.Object({
        id: t.String(),
      }),
    }
  )
  .post(
    "/",
    ({ service, body, set }) => {
      set.status = StatusMap.Created;
      return service.SetTable(body);
    },
    {
      body: CreateTableDTO,
    }
  );
