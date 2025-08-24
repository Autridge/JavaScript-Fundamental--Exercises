// 5 kyu Human Readable Time

function humanReadable(seconds) {
  const hour = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const sec = seconds % 60;

  return `${hour < 10 ? "0" + hour : hour}: ${
    minutes < 10 ? "0" + minutes : minutes
  }: ${sec < 10 ? "0" + sec : sec}`;
}
