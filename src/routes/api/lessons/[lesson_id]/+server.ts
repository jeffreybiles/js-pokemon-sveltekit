import type { RequestHandler } from "@sveltejs/kit";
import { lessons } from "../lessons"
import { error } from "@sveltejs/kit";

export const GET = (({ params }) => {
  const lesson = lessons.find(lesson => lesson.demoSubdomain === params.lesson_id);
  if(!lesson) {
    throw error(404, 'No lesson with that ID found');
  }
  return new Response( JSON.stringify({ 
    lesson,
    previousLesson: lessons[lessons.indexOf(lesson) - 1],
    nextLesson: lessons[lessons.indexOf(lesson) + 1],
  }) )
}) satisfies RequestHandler