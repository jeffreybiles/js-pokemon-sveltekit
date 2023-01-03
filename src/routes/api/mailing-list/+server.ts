import type { RequestHandler } from "@sveltejs/kit";
import { MAILER_LITE_KEY } from '$env/static/private'

const baseUrl = 'https://connect.mailerlite.com'

const headers = {
  'Authorization': `Bearer ${MAILER_LITE_KEY}`,
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'X-Version': '2038-01-19',
}

export const POST = (async ({ request, fetch }) => {
  const { email, name } = await request.json()
  const url = '/api/subscribers'
  const inputData = {
    email,
    fields: {
      name,
    },
    groups: [
      '76293075379422706' // js-pokemon group
    ]
  }

  return await fetch(baseUrl + url, {
    headers,
    method: 'POST',
    body: JSON.stringify(inputData),
  })
}) satisfies RequestHandler