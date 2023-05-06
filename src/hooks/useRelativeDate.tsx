import { DateTime } from "luxon";

export default function useRelativeDate(date?: Date) {
  if (!date) return "---";
  return DateTime.fromJSDate(date).toRelativeCalendar()
}