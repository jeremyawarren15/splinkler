import { DateTime } from "luxon";

export default function useDate(date: Date) {
  if (!date) return "---";
  return DateTime.fromJSDate(date).toLocaleString();
}