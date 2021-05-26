import React, { Fragment, useState } from 'react';
import { DetailPage } from './detailPage';
import { Pie } from 'react-chartjs-2'

export const MainPage = () => {
    const [animeList, setAnimeList] = useState([]);
    const [currAnime, setCurrAnime] = useState({});
    const [chartData, setChartData] = useState({});
    let labels = ["TV", "Movie", "Special", "OVA", "ONA", "Music", "Others"];
    let dataSet = [];
    const selectAnime = async (value) => {
        const url = 'https://api.jikan.moe/v3/search/anime?q=';
        await fetch(`${url}${value}`)
        .then(res => res.json())
        .then((data) => {
            labels.forEach(label => {
                let currlabelCount = data.results.filter(i => i.type === label).length;
                dataSet.push(currlabelCount);
            });
            setChartData({
                labels,
                datasets: [
                  {
                    data: dataSet,
                    backgroundColor: [
                        
                      'rgba(255, 99, 132, 2)',
                      'rgba(54, 162, 235, 2)',
                      'rgba(255, 206, 86, 2)',
                      'rgba(75, 192, 192, 2)',
                      'rgba(153, 102, 255, 2)',
                      'rgba(255, 159, 64, 2)',
                      'rgba(255, 179, 34, 2)',
                    ],
                   borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 179, 34, 1)',
                      'rgba(255, 179, 34, 1)'
                    ],
                    borderWidth: 1,
                  },
                ]
                
              });
            setAnimeList(data && data.results ? data.results : []);
        });
    };

    const selectCurrentAnime = anime => {
        setCurrAnime(anime || {});
    };

    return (
        <div className='layout-wrapper'>
            {Object.keys(currAnime).length > 0 ?
            <DetailPage currAnime={currAnime}/>
            :
            <Fragment>
                <div className='header'>
                    <h2>Anime Maze</h2>
                </div>
                <div className='info-section'>
                    <div className='left-container'>
                        
                        <div className='select-option'>
                        <p>Select Anime</p>
                        <select className='select-section' onChange={(e) => selectAnime(e.target.value)}>
                           <option value=' '></option>
                            <option value='naruto'>Naruto</option>
                            <option value='pokeman'>Pokeman</option>
                            <option value='botherhood'>Brotherhood</option>
                            <option value='gintama'>Gintama</option>
                            <option value='hunter'>Hunter</option>
                        </select>
                        </div>
                        <div className='images-container'>
                            {animeList.map(listItem => {
                                return (
                                    
                                    <div className='container'>
                                    <div onClick={() => selectCurrentAnime(listItem)}>
                                        <img src={listItem.image_url || ''}/>
                                    </div>
                                    </div>
                                    
                                );
                            })}
                        </div>
                    </div>
                    <div className='right-container'>
                        {Object.keys(chartData).length > 0 ? <Pie data={chartData}/> : null}
                    </div>
                </div>
            </Fragment>
            }
        </div>
    );
}

