function HighLine({
  text,
  color = "text-main300",
}: {
  text: string;
  color: string;
}) {
  return <strong className={`${color}`}>{text}</strong>;
}

export default HighLine;
