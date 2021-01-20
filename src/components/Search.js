import React from 'react';
import '../styles/Search.css';
import {FiSearch} from 'react-icons/fi';
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'

const Search = () => {
    return <React.Fragment>
        <div className='search-body'>
            <AiOutlineLeft style={{color: 'white', float: 'left', margin: '200px 3px 0px 20px'}}/>
            <div className='search-container'>
                <p className='title'>Find Great Deals Customized For Your Needs</p>
                <input className='search' placeholder='Search service or product'/>
                <FiSearch className='search-logo'/>
                <div>
                    <div className='left'>
                        <input id='tag' type='radio' name='selection'/>
                        <span className='circle'>
                            <span className='inner-circle'>
                                
                            </span>
                        </span>
                        <label for='tag' className='radio'>Product</label>

                        <input id='tag1' type='radio' name='selection'/>
                        <span className='circle1'>
                            <span className='inner-circle1'>
                                
                            </span>
                        </span>
                        <label for='tag1' className='radio'>Service</label>

                        <input id='tag2' type='radio' name='selection'/>
                        <span className='circle2'>
                            <span className='inner-circle2'>
                                
                            </span>
                        </span>
                        <label for='tag2' className='radio'>Jobs</label>
                    </div>
                    <div className='right'>
                        <a href='#' style={{color: 'white'}}>Advanced Search</a>
                    </div>
                </div>
            </div>
            <AiOutlineRight style={{color: 'white', float: 'right', margin: '-210px 20px 2px 20px'}}/>
        </div>
    </React.Fragment>
}

export default React.memo(Search);