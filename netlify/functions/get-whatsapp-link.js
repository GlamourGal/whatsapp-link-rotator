exports.handler = async (event) => {
  const links = [
    "https://wa.me/447561657131",
    "https://wa.me/447380121209",
    "https://wa.me/447962554651"
  ];

  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "Cache-Control": "no-store",
  };

  // 从 cookie 中读取分配的 index
  const cookie = event.headers.cookie || "";
  const match = cookie.match(/waIndex=(\\d+)/);
  let index;

  if (match) {
    index = parseInt(match[1], 10);
  } else {
    index = Math.floor(Math.random() * links.length);
    // 将 index 写入 cookie，让浏览器下次自动带上
    headers["Set-Cookie"] = `waIndex=${index}; Path=/; Max-Age=31536000`;
  }

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({ link: links[index] }),
  };
};
