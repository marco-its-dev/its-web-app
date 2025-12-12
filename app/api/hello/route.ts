export async function GET(request: Request) {
  return new Response(JSON.stringify({ messeage: "Test" }), {
    status: 200,
    headers: { "Content-type": "application/json" },
  });
}
