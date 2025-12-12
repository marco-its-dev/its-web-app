export async function GET(request: Request) {
  return new Response(JSON.stringify({ message: "Welcome to the website" }), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
}
