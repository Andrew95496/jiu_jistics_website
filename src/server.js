import { createServer } from "miragejs";

export default function () {
  createServer({
    routes() {
      this.get("/api/athletes", () => ({
        athletes: [
          {
  "id": "01H0B1VJRMF7XP6T3AA31KBMWA",
  "name": "Veriee Archer",
  "athlete_pic": "http://dummyimage.com/128x100.png/dddddd/000000"
}],
      }));
    },
  });
}
