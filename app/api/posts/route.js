
export async function GET(req) {
  return new Response(JSON.stringify({ message: 'welcome to backened' }), { status: 200 });
}