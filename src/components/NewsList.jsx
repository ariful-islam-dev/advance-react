import React from 'react'
import NewsItem from './NewsItem'

function NewsList({ news }) {
    return (
        <div>
            {
                news && news.length === 0 && <h4>There is No News</h4>
            }
            {
                news && news.map((item, index) => <NewsItem key={index} item={item} />)
            }
            
        </div>
    )
}

export default NewsList
