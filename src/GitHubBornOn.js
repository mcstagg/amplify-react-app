import React
    ,{
        useState
        , useEffect
    } from 'react';

import { API } from 'aws-amplify';

export const GitHubBornOn = () => {

    const fetchBornInfo = async () => {
        try {
            const data = await API.get("cryptoapi", "/born");
            updateBornInfo(data.borninfo);
        }
        catch(err) {
            console.error(err);
        }
    };

    useEffect(
        () => {
            fetchBornInfo();
        }
        , []
    );

    const [bornInfo, updateBornInfo] = useState({});

    return(
        <h2>
            {bornInfo.login} - {bornInfo.created_at}
        </h2>
    );
};