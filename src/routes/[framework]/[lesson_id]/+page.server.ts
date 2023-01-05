import type { PageServerLoad } from "./$types";

export const load = (async ({ params, fetch }) => {
  const response = await fetch(`/api/lessons/${params.lesson_id}`)
  const json  = await response.json()
  return {
    lesson: json.lesson,
    previousLesson: json.previousLesson,
    nextLesson: json.nextLesson,
  }
}) satisfies PageServerLoad;

export const ssr = false