import type { LayoutServerLoad } from "./$types"
import { productionApi } from "$lib/production-api";

export const load = (async ({fetch}) => {
  /*
    We need to get this data for the modal-enabled branches, but not for the main branch
    The currentSubdomain will be changed per branch - we're hardcoding for now and will change per branch, but we may want to base it on the subdomain later
  */
  const currentSubdomain = '1-choosing-a-framework'
  const response = await fetch(`https://${productionApi}/api/lessons/${currentSubdomain}`);
  const data  = await response.json();

  return {
    lesson: data.lesson,
    previousLesson: data.previousLesson,
    nextLesson: data.nextLesson,
  }

}) satisfies LayoutServerLoad;

export const ssr = false;