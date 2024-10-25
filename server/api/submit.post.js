export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  return "Your purchase is complete";
});
