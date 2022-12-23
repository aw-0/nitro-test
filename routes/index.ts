import { ofetch } from 'ofetch'

export default defineEventHandler(async () => {
  const resp = await ofetch('https://thumbnails.roblox.com/v1/groups/icons?groupIds=12921185&size=150x150&format=Png&isCircular=false')
  return resp
})