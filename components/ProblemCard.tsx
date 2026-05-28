export default function ProblemCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <article className="card-wrapper">
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{text}</p>
    </article>
  );
}
