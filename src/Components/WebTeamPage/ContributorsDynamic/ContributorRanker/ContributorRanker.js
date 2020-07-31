import React, { useState, useEffect } from 'react';
import './ContributorRanker.css';
import axios from 'axios';
const ContributorRanker = ({target}) => {
    const [data, setData] = useState({});
    useEffect(() => {
      axios
        // .get(`${process.env.REACT_APP_BASE_URL}/front/contributors/${target}`)
        .get(`http://localhost:5000/front/contributors/${target}`)
        .then((res) => {
          setData(res.data);
        });
    }, []);

    function scaleValue( value, r1=[0,data.winners[0].weekly.a * Math.ceil((data.winners[0].weekly.c)/data.total_c)], r2=[10,5000] ) { 
        return Math.floor(( value - r1[ 0 ] ) * ( r2[ 1 ] - r2[ 0 ] ) / ( r1[ 1 ] - r1[ 0 ] ) + r2[ 0 ]);
    }
    if(data.winners)
    return(
        <div className="Contributors-Top-Weekly">
        <div className="center">
        <div className="heading-Contributors mb-5">
            <h4>{String(target).toUpperCase()} - Top Weekly</h4>
        </div>
          <div className="top3">
            <a className="two item" href={data.winners[1].url} target="_blank">
              <div className="pos">
              </div>
              <div className="pic" style={{backgroundImage: `url(${data.winners[1].img})`}} />
              <div className="name">
                {data.winners[1].id}
              </div>
              <div className="score">
                {scaleValue(data.winners[1].weekly.a * Math.ceil((data.winners[1].weekly.c)/data.total_c))}
              </div>
            </a>
            <a className="one item" href={data.winners[0].url} target="_blank">
              <div className="pos">
              </div>
              <div className="pic" style={{backgroundImage: `url(${data.winners[0].img})`}} />
              <div className="name">
                {data.winners[0].id}
              </div>
              <div className="score">
                {scaleValue(data.winners[0].weekly.a * Math.ceil((data.winners[0].weekly.c)/data.total_c))}
              </div>
            </a>
            <a className="three item" href={data.winners[2].url} target="_blank">
              <div className="pos">
              </div>
              <div className="pic" style={{backgroundImage: `url(${data.winners[2].img})`}} />
              <div className="name">
                {data.winners[2].id}
              </div>
              <div className="score">
                {scaleValue(data.winners[2].weekly.a * Math.ceil((data.winners[2].weekly.c)/data.total_c))}
              </div>
            </a>
          </div>
          <div className="heading-Contributors mb-5">
            <h4>Hall of Fame</h4>
          </div>
          <div className="list">
           {data.authors.map((author,index) =>
            <a href={author.url} key={index} target="_blank">          
              <div className="item">
                <div className="pos">
                  {index + 1}
                </div>
                <div className="pic" style={{backgroundImage: `url(${author.img})`}} />
                <div className="name">
                  {author.id}
                </div>
                <div className="score">
                  {author.total}
                </div>
              </div>
            </a>
            )}
          </div>
        </div>
        </div>
    )
    else
    return(<div></div>)
}

export default ContributorRanker;