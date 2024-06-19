import React from 'react'
const NewsItem=(props)=> {
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className="my-3 newsi">
                <div className="card">
                  <div style={{display:'flex',
                  justifyContent:'flex-end',
                  position:'absolute',
                  right:'0'}}>
                    <span className="badge rounded-pill " style={{backgroundColor:"#1f242d"}}> {source}
                      </span>
                  </div>
                    <img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title" style={{color:"#ffff"}}>{title}  </h5>
                        <p className="card-text"style={{color:"#ffff"}}>{description}</p>
                        <p className="card-text"style={{color:"#ffff"}}><small className="author">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm "style={{backgroundColor: '#1f242d',color:'#ffff'}}>Read More</a>
                    </div>
                </div>
            </div>
        )
}

export default NewsItem