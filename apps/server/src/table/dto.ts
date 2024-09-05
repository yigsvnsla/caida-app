import { Static, t } from "elysia";
import { TABLE_CANT_PLAYERS, TABLE_GAME_TYPE } from "./enum";

export const CreateTableDTO = t.Object({
  player_host: t.String(),
  cant_players: t.Enum(TABLE_CANT_PLAYERS),
  game_type: t.Enum(TABLE_GAME_TYPE),
});

export type CreateTableDTO = Static<typeof CreateTableDTO>;

export const TableDTO = t.Object({
  uuid: t.String(),
  player_host: t.String(),
  cant_players: t.Enum(TABLE_CANT_PLAYERS),
  game_type: t.Enum(TABLE_GAME_TYPE),
});

export type TableDTO = Static<typeof TableDTO>;


