import React from 'react';
import ApplicationCard from '../../Components/ApplicationCard';
import { MyContext } from '../../Context/ApplicationContext';

const ApplicationList = () => {

    const context = React.useContext(MyContext);
    
    return (
        <div className="">
            {context.state?.map((x,i) => 
            <ApplicationCard 
                id={i+1} 
                key={i} 
                name={x.name} 
                category={x.category} 
                context={context}
            />)}
        </div>
    );
}

export default ApplicationList;