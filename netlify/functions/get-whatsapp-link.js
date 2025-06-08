exports.handler = async (event) => {
  const links = [
    "https://wa.me/447715802415",
    "https://wa.me/13104373610",
    "https://wa.me/447746809148",
    "https://wa.me/447561657131",
    "https://wa.me/447955572061", 
    "https://wa.me/447591102380",
    "https://wa.me/447563734172",
    "https://wa.me/447307645423",
    "https://wa.me/447955572063",
    "https://wa.me/447955572060",
    "https://wa.me/447594544338",
    "https://wa.me/447380121209",
    "https://wa.me/447955572065",
    "https://wa.me/447925494381",
    "https://wa.me/85268835613",
    "https://wa.me/447756208924",
    "https://wa.me/447402453051",
    "https://wa.me/447955572069"
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
