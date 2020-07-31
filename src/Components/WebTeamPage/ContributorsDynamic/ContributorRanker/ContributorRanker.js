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
    if(data.winners)
    return(
        <div className="Contributors-Top-Weekly">
            <div className="main">
        <div className="center">
          <div className="top3">
            <a className="two item" href={data.winners[1].url} target="_blank">
              <div className="pos">
              </div>
              <div className="pic" style={{backgroundImage: `url(${data.winners[1].img})`}} />
              <div className="name">
                {data.winners[1].id};
              </div>
              <div className="score">
                {(data.winners[1].weekly.a * Math.ceil((data.winners[1].weekly.c)/data.total_c))};
              </div>
            </a>
            <a className="one item" href={data.winners[0].url} target="_blank">
              <div className="pos">
              </div>
              <div className="pic" style={{backgroundImage: `url(${data.winners[0].img})`}} />
              <div className="name">
                {data.winners[0].id};
              </div>
              <div className="score">
                {(data.winners[0].weekly.a * Math.ceil((data.winners[0].weekly.c)/data.total_c))};
              </div>
            </a>
            <a className="three item" href={data.winners[2].url} target="_blank">
              <div className="pos">
              </div>
              <div className="pic" style={{backgroundImage: `url(${data.winners[2].img})`}} />
              <div className="name">
                {data.winners[2].id};
              </div>
              <div className="score">
                {(data.winners[2].weekly.a * Math.ceil((data.winners[2].weekly.c)/data.total_c))};
              </div>
            </a>
          </div>
          <div className="list">
           {data.authors.map((author,index) =>
            <a href={author.url} target="_blank">          
              <div className="item">
                <div className="pos">
                  {index + 1};
                </div>
                <div className="pic" style={{backgroundImage: `url(${author.img})`}} />
                <div className="name">
                  {author.id};
                </div>
                <div className="score">
                  {author.total};
                </div>
              </div>
            </a>
            )}
          </div>
          <h5 style={{color: 'lightgray'}}>* If your name doesnt appear on the list please ensure your pull requests have been approved. Also ensure you have a public email id linked with your commits within github </h5>
        </div>
      </div>
        </div>
    )
    else
    return(<div></div>)
};

export default ContributorRanker;