import "./Article.scss";

export default function Article({ article }) {
    const { title, source, description } = article;

    return (
        <article className="Article">
            <h2>{title}</h2>
            <p className="italic">{source.name}</p>
            <p>{description}</p>
        </article>
    )
}
