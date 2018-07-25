import React from 'react';
import Image from './Image/Image';
import Description from './Desc/Description';
import Data from './jsondescription.json';

const getData = (info, num) => {
    for(let i = 0; i < Data.length; i++){
        if(Data[i].type === info && Data[i].number === num){
            const wantedData = [Data[i].description, Data[i].image];
            return wantedData;
        }
    }
}

const Job = ({topic, num}) => {
    const data = getData(topic[0], num);

    return(
        <div className='ba bw2 mt5 ml4 mr4'>
            <br></br>
            <Image image={data[1]}/>
            <Description data={data[0]}/>
        </div>
    );
}

export default Job;
