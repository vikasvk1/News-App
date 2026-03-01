import React from 'react';

const NewsItem = (props) => {
    const { title, description, imageUrl, newsUrl, author, date, source } = props;
    const fallbackImage = `${process.env.PUBLIC_URL}/placeholder-news.svg`;

    const handleImageError = (event) => {
        event.currentTarget.onerror = null;
        event.currentTarget.src = fallbackImage;
    };

    return (
        <article className="news-card">
            <a className="news-image-wrap" href={newsUrl} target="_blank" rel="noreferrer" aria-label={`Open article: ${title}`}>
                <img
                    className="news-image"
                    src={imageUrl || fallbackImage}
                    onError={handleImageError}
                    alt={title}
                    loading="lazy"
                />
                <span className="news-source">{source}</span>
            </a>

            <div className="news-body">
                <h2 className="news-title">
                    <a href={newsUrl} target="_blank" rel="noreferrer">
                        {title}
                    </a>
                </h2>
                <p className="news-description">{description || 'No summary available for this story yet.'}</p>

                <div className="news-footer">
                    <p className="news-meta">
                        {author || 'Unknown source'}
                        {' . '}
                        {date ? new Date(date).toLocaleString() : 'Date unavailable'}
                    </p>
                    <a className="news-link" rel="noreferrer" href={newsUrl} target="_blank">
                        Read story
                    </a>
                </div>
            </div>
        </article>
    );
};

export default NewsItem;
