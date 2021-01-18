import { events } from "./testFIle";

export default function raiseEvent() {
  events.emit("test");
}
