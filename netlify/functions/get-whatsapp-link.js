let counter = 0;

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

exports.handler = async () => {
  const link = links[counter % links.length];
  counter++;
  return {
    statusCode: 200,
    body: JSON.stringify({ link }),
  };
};
