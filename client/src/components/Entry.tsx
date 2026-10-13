type EntryProps = {
    title: string
    minutes: number
    date: string
    tags: string[]
}

export default function Entry({ title, minutes, date, tags }: EntryProps) {
    const formattedDate = new Intl.DateTimeFormat('en', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        timeZone: 'UTC',
    }).format(new Date(`${date}T00:00:00Z`))

    return (
        <article className="entry-component">
            <time className="entry-component__date" dateTime={date}>{formattedDate}</time>
            <span className="entry-component__title">{title}</span>
            <span className="entry-component__duration" aria-label={`${minutes} minutes coded`}>{minutes}m</span>
            {tags.length > 0 && (
                <ul className="entry-component__tags" aria-label="Tags">
                    {tags.map((tag) => (
                        <li className="entry-component__tag" key={tag}>{tag}</li>
                    ))}
                </ul>
            )}
        </article>
    )
}
