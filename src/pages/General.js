import React, { useEffect, useState } from 'react';
import Main from '../components/Main/main';
import newsApi from '../Services/newsApi';

const General = () => {
        const [News, setNews] = useState([]);
    
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const data = await newsApi.mainNews('general'); // 'business' burada q parametresi olarak geçirilecek
                    setNews(data);
                    
                } catch (error) {
                    console.error('Error fetching main news:', error);
                }
            };
            fetchData();
        }, []);
       
    return (
        <div>
            <Main News={News} />
        </div>
    );
}

export default General;
