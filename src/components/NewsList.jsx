import React from 'react'
import NewsItem from './NewsItem'

const NewsList = React.forwardRef(({ news }, ref) => {
    return (
        <div>
            {
                news && news.length === 0 && <h4>There is No News</h4>
            }
            {
                news && news.map((item, index) => <NewsItem ref={ref} key={index} item={item} />)
            }

        </div>
    )
})

export default NewsList
