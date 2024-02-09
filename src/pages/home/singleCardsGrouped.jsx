import {
  musicasUnicas,
  quantidadePlays,
  quantidadeMinutos,
  quantidadeHoras,
  mediaTempoDiario,
} from "../../utils/singleStats.js";

import { SingleStatsCard } from "./singleStatsCard.jsx";

export function SingleCardsGrouped() {
  return (
    <div className="bg-purple-black flex flex-col gap-4">
      <div className="flex flex-row gap-4">
        <SingleStatsCard
          title={"Total Tracks"}
          badge={"All Time"}
          value={quantidadePlays()}
        />
        <SingleStatsCard
          title={"Total Unique Tracks"}
          badge={"All Time"}
          value={musicasUnicas()}
        />
      </div>
      <div className="flex flex-row gap-4">
        <SingleStatsCard
          title={"Minutes Listened"}
          badge={"All Time"}
          value={`${quantidadeMinutos()}`}
        />
        <SingleStatsCard
          title={"Daily Average"}
          badge={"All Time"}
          value={`${mediaTempoDiario()}`}
          subValue={"Minutes"}
        />
      </div>
    </div>
  );
}
