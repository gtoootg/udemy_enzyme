import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default function Congrats(props){
    if(props.success){
        return(
        <div data-test ="component-congrats" className="alert alert-success">
            <span data-test="congrats-message">
                congratulations!
            </span>
        </div>
        )
    } else{
        return(
            <div data-test ="component-congrats">
                <span data-test="congrats-message">
                    
                </span>
            </div>
        )
    }
   
}