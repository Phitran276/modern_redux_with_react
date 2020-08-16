import React from 'react';

const Loading = (props) => {
    return (
        <div class="ui segment">
           <p>{props.message || 'Loading...'}</p>
           <div class="ui active dimmer">
                <div class="ui loader"></div>
           </div>
        </div>
    );
}

export default Loading;