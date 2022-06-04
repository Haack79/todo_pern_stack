import React from 'react';
// import faker from 'faker';

const Comment = ({author, avatar}) => { 
    const date = Date.now(); 
    return (
        <div>
            <div className='comment'>
                <a href="/" className="avatar">
                    <img alt="avatar" src={avatar} />
                </a>
                <div className='content'>
                    <a href="/" className="author">
                        {author}
                    </a>
                    <div className='metadata'>
                        <span className='date'>{date}</span>
                    </div>
                    <div className='text'>koo bro!</div>
                </div>
            </div>
        </div>
    )
};

export default Comment; 