import React from 'react'
import './debug-panel.styles.scss';
// redux
import {connect} from 'react-redux';
import {clearDebugText} from '../../redux/global/global.action';

const DebugPanel =({debugText, clearDebugText}) => (
                <div className='debug-panel'>
                    <button onClick={clearDebugText}>Clear Log</button>
                    <div dangerouslySetInnerHTML={{__html: `${debugText}`}}></div>
                </div>
        )

const mapStatetoProps = state => ({
    debugText: state.global.debugText
});

const mapDispatchToProps = dispatch => ({
    clearDebugText:() => dispatch(clearDebugText())
})

export default connect(mapStatetoProps,mapDispatchToProps)(DebugPanel);

// Options
// - add close button
// - add pin to top, bottom or float options 
