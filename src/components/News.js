import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsItem from './NewsItemm';
import Spinner from './Spinner';

const GUARDIAN_SECTION_MAP = {
    general: 'world',
    business: 'business',
    entertainment: 'culture',
    health: 'society',
    science: 'science',
    sports: 'sport',
    technology: 'technology',
};

const COUNTRY_QUERY_MAP = {
    in: 'India',
    us: 'United States',
    gb: 'United Kingdom',
};

const normalizeGuardianArticle = (item) => ({
    title: item.webTitle || 'Untitled',
    url: item.webUrl || '#',
    publishedAt: item.webPublicationDate || '',
    description: item.fields?.trailText || 'No summary available for this story yet.',
    urlToImage: item.fields?.thumbnail || '',
    author: item.fields?.byline || 'The Guardian',
    source: { name: 'The Guardian' },
});

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [lastUpdated, setLastUpdated] = useState('');

    const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

    const buildGuardianUrl = (pageNumber) => {
        const params = new URLSearchParams({
            'api-key': 'test',
            'show-fields': 'thumbnail,trailText,byline',
            'order-by': 'newest',
            'page-size': String(props.pageSize),
            page: String(pageNumber),
        });

        const section = GUARDIAN_SECTION_MAP[props.category];
        const countryQuery = COUNTRY_QUERY_MAP[props.country];

        if (section) {
            params.append('section', section);
        }
        if (countryQuery) {
            params.append('q', countryQuery);
        }

        return `https://content.guardianapis.com/search?${params.toString()}`;
    };

    const updateNews = async (isRefresh = false) => {
        props.setProgress(10);
        setLoading(true);
        setError('');
        const nextPage = 1;
        if (isRefresh) {
            setPage(1);
        }

        try {
            const response = await fetch(buildGuardianUrl(nextPage));
            props.setProgress(40);

            if (!response.ok) {
                throw new Error(`Guardian API request failed (${response.status})`);
            }

            const parsedData = await response.json();
            if (parsedData?.response?.status !== 'ok') {
                throw new Error('Guardian API returned a non-ok response');
            }

            const parsedArticles = (parsedData.response.results || []).map(normalizeGuardianArticle);

            props.setProgress(80);
            setArticles(parsedArticles);
            setTotalResults(parsedData.response.total || parsedArticles.length);
            setLastUpdated(parsedArticles[0]?.publishedAt || '');
            setPage(1);
        } catch (fetchError) {
            setError('Unable to load latest headlines right now. Please try refresh in a moment.');
            setArticles([]);
            setTotalResults(0);
            setLastUpdated('');
        } finally {
            setLoading(false);
            props.setProgress(100);
        }
    };

    useEffect(() => {
        updateNews();
        document.title = `${capitalizeFirstLetter(props.category)} - NewsX`;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.category, props.country, props.pageSize]);

    const fetchMoreData = async () => {
        const nextPage = page + 1;
        try {
            const response = await fetch(buildGuardianUrl(nextPage));
            if (!response.ok) {
                throw new Error(`Guardian API request failed (${response.status})`);
            }
            const parsedData = await response.json();
            if (parsedData?.response?.status !== 'ok') {
                throw new Error('Guardian API returned a non-ok response');
            }
            const newArticles = (parsedData.response.results || []).map(normalizeGuardianArticle);
            setArticles((prevArticles) => prevArticles.concat(newArticles));
            setTotalResults(parsedData.response.total || totalResults);
            setPage(nextPage);
        } catch (fetchError) {
            setError('Unable to load more headlines right now. Please try refresh.');
        }
    };

    return (
        <main className="news-page">
            <section className="hero">
                <p className="hero-subtitle">Live Feed</p>
                <h1 className="hero-title">Top {capitalizeFirstLetter(props.category)} Headlines</h1>
                <p className="hero-meta">
                    {lastUpdated ? `Latest update: ${new Date(lastUpdated).toLocaleString()}` : 'Fetching latest updates...'}
                </p>
                <button className="refresh-btn" onClick={() => updateNews(true)} type="button">
                    Refresh
                </button>
            </section>

            {loading && <Spinner />}

            {error && !loading && (
                <p className="error-message" role="alert">
                    {error}
                </p>
            )}

            {!loading && !error && articles.length === 0 && (
                <p className="error-message" role="status">
                    No headlines available right now.
                </p>
            )}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length < totalResults}
                loader={<Spinner />}
            >
                <section className="news-grid">
                    {articles.map((element) => (
                        <NewsItem
                            key={element.url}
                            title={element.title}
                            description={element.description}
                            imageUrl={element.urlToImage}
                            newsUrl={element.url}
                            author={element.author}
                            date={element.publishedAt}
                            source={element.source?.name || 'Google News'}
                        />
                    ))}
                </section>
            </InfiniteScroll>
        </main>
    );
};


News.defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general',
};

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
};

export default News;
