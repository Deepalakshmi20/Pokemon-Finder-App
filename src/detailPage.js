import React from 'react';

export const DetailPage = ({currAnime = {}}) => {
    return (
        <div>
            <div className='left-section'>
                <img src={currAnime.image_url || ''}/>
            </div>
            <div className='right-section'>
                <h3>{currAnime.title || ''}</h3>
                <p className='synopsis' >Synopsis: {currAnime.synopsis || ''}</p>
                <div className='anime'>
                    <span className='anime-details1'>Total episodes: {currAnime.episodes || '-'}</span>
                    <div>
                    <span className='anime-details2'>Score: {currAnime.score || '-'}</span>
                    </div>
                    <div>
                    <span className='anime-details3'>Type: {currAnime.type || '-'}</span>
                    </div>
                   
                    <div className='start-date'>
                    <span className='start'>Start Date: {`${new Date(currAnime.start_date).getDate()}/${new Date(currAnime.start_date).getMonth()}/${new Date(currAnime.start_date).getFullYear()}` || '-'}</span>
                    </div>
                    <div className='end-date'>
                    <span className='end'>End Date: {`${new Date(currAnime.end_date).getDate()}/${new Date(currAnime.end_date).getMonth()}/${new Date(currAnime.end_date).getFullYear()}`  || '-'}</span>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}