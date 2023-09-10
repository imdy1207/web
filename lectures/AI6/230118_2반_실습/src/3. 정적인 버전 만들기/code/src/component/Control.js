import React from 'react';
function Control(props){
    console.log('Control', props.mode);
    var update = null;
    var deleteComp = null;
    if(props.mode === 'READ'){
        update = <li><input type="button" value="update" onClick={function(){props.onChange('UPDATE')}}></input></li>;
        deleteComp = <li><input type="button" value="delete" onClick={function(){props.onChange('DELETE')}}></input></li>;
    }
    return (
        <ul>
            <li>
                <input type="button" value="create" onClick={function(){props.onChange('CREATE')}}></input>
            </li>
            {update}{deleteComp}
        </ul>
    );
}
export default React.memo(Control);
