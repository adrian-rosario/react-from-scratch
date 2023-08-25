import React, {useEffect,useState} from 'react';
import './styles.css';
import defaultImage from './images/js-logo-xs.png'

export default function App() {
    const [data, setData] = useState(null);
    const [imageSource, setImageSource] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://dog.ceo/api/breeds/list/all');
            const newData = await response.json();
            setData(newData.message);
        };

        fetchData();
    }, [])

    const updateImage = (breed) => {
      const imagesUrl = 'https://dog.ceo/api/breed/';

      const imageQuery = async() => {
        const response = await fetch(imagesUrl + breed + '/images/random');
        const newData = await response.json();
        setImageSource( newData.message);
      }
      imageQuery();
    }

    if (data) {
        const results = Object.keys(data);
        // console.log('data', data);
        // console.log(results.length);

        return (
          <div className='main'>
            <ul className='breedsList'>
          {results.map(function(dogName, index){
             return (
              <li key={index}>
                <button onClick={ () => updateImage(dogName)}>
                {dogName.charAt(0).toUpperCase()}{dogName.slice(1) /* capitalizing 1st char */}
                </button>
              </li>)
           })}
           </ul>
            <div className='imageDisplay'>
              <img src={defaultImage} style={{ display: !imageSource ? 'block' : 'none' }} />
              <img src={imageSource} alt='pooch image' style={{ display: imageSource ? 'block' : 'none' }} />
            </div>
          </div>
        )

    } else {
        return null;
    }
}