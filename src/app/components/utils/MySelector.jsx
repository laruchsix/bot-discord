import React from 'react';
import Select from 'react-select';

const MySelector = ({service, updateObjet, object}) => { 
    const [apiResponse, setApiResponse] = useState({
        data: {},
        loading: true,
      });
      useEffect(() => {
        fetch(URL + service)
          .then((res) => res.json())
          .then((data) =>
            setApiResponse({
              data: data,
              loading: false,
            })
          );
      }, [service]);
      
      const handleChange = event => {
          const value = event;
          //console.log(value);
          updateObjet(value);
      }
      if (apiResponse.loading) return <p>LOADING ...</p>;  
      return (
        <div style={{ width: "max-content", minWidth: "25vw"}}>
          <ul style={{ margin: "1vw"}}>
            <Select onChange={handleChange} options={apiResponse.data}  style={{ width: "max-content"}}/>
          </ul>
        </div>
      );

   

}



export default MySelector;