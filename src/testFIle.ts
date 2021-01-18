import { EventEmitter } from "events";

export const events = new EventEmitter();

export default function sockCall(o: any) {
  console.log("Socket called");
}

events.on("test", () => {
  console.log(`Test event called`);
});
