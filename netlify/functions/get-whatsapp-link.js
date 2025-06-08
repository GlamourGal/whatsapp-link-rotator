let counter = 0;

const links = [
  "https://wa.me/447715802415",
  "https://wa.me/13104373610",
  "https://wa.me/447746809148",
  "https://wa.me/447561657131"
];

exports.handler = async () => {
  const link = links[counter % links.length];
  counter++;
  return {
    statusCode: 200,
    body: JSON.stringify({ link }),
  };
};
