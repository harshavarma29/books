import React from 'react';
import '../styles/Card.css';

const Cards = () => {
    return <React.Fragment>
        <div className='cards'>
            <div className='sample1'>
                <div className='content'>
                    <h3 className='tit'>Title</h3>
                    <div className='description'>A book is a medium for recording information in the form of writing or images, typically composed of many pages bound together and protected by a cover.</div>
                    <button className='btn'>Discover</button>
                </div>
                <div className='details'>
                    <div style={{float: 'right', textAlign: 'right'}}>
                        <p className='tit2'>Seller Name</p>
                        <p style={{color: 'white', fontSize: '21px', margin: '2px'}}>WestBangal, Kolkata</p>
                    </div>
                </div>
            </div>
            <div className='sample2'>
                <img className='image2' src={'/images/books.jpg'}/>
                <div className='content1'>
                    <span className='tit1'>Title</span>
                    <span className='description1'>A book is a medium for recording information in the form of writing or images.</span>
                    <button className='btn' style={{float: 'right', marginRight: '25px'}}>Discover</button>
                </div>
            </div>
        </div>
    </React.Fragment>
}

export default React.memo(Cards);