import type { Lesson } from "./api/lessons/lessons"
import { productionApi } from "./production-api"

export const load = async () => {
  const response = await fetch(`https://${productionApi}/api/lessons`)
  const json  = await response.json()
  const lessons: Lesson[] = json.lessons
  return {
    lessons
  }
}