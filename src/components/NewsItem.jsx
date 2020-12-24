import React from 'react'

function geDateString(dateTimeStr) {
    return new Date(dateTimeStr).toDateString()
}

function NewsItem({ item }) {
    return (
        <div className="card mb-4">
            {item.urlToImage && (
                <img className="card-img-top" src={item.urlToImage} alt={item.title} />
            )}
            <div className="card-body">
                <a href={item.url} target='_blank' rel='noopener noreferrer' style={{ color: '#424242' }}>
                    <h5 className="card-title">{item.title}</h5>
                </a>
                <p>
                    {item.content} <br/>
                   
                </p><a href={item.url} className="ms-auto" target='_blank' rel='noopener noreferrer'>See More .....</a>
                <div className="mt-2 d-flex justify-content-between">
                    <small>
                        <strong>
                            Publist at {geDateString(item.publishedAt)}
                        </strong>
                    </small>
                    <div
                        style={{
                            padding: '0.15rem 0.5rem',
                            background: '#ededed',
                            color: '#424242',
                            borderRadius: '0.25',
                            display: 'inline-block'
                        }}
                        className="ml-auto"
                    >
                        <small>{item.source.name}</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
