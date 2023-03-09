import React from 'react';
import PropTypes from 'prop-types';
import PageTitle from '../components/pagetitle/PageTitle';
import HotPick from '../components/hotpick/HotPick';
import dataHotpick from '../assets/fake-data/data-hotpick';

Explore.propTypes = {
    
};

function Explore(props) {
    return (
        <div className='page-explore'>
            <PageTitle none='none'  title='마켓' />

            <HotPick data={dataHotpick} />
            
        </div>
    );
}

export default Explore;