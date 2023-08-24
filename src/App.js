import React, {useEffect,useState} from 'react';

export default function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://dog.ceo/api/breeds/list/all')
            const newData = await response.json()
            setData(newData.message)
        };

        fetchData();
    }, [])

    if (data) {
        console.log('data', data);
        const results = Object.keys(data);
        console.log(results.length);


        return (
          <div>
          {results.map(function(d, idx){
             return (<li key={idx}>{d}</li>)
           })}
          </div>
        )

    } else {
        return null;
    }
}
