import React, {useState, useEffect} from 'react';
import Select from 'react-select';

const MySelector = ({ service, updateObjet, isMulti = false, isDisabled = false, object, refresh = true, className, ...rest }) => {
    const [apiResponse, setApiResponse] = useState({
      data: {},
      loading: true,
    });
  
    useEffect(() => {
      fetch(service)
        .then((res) => res.json())
        .then((data) => {
          if (refresh) {
            if (apiResponse !== data) updateObjet("");
          }
          console.log(data);
          setApiResponse({
            data: data,
            loading: false,
          });
        });
    }, [service]);
  
    /**
     * When the user changes the value of the input, update the state of the component with the new
     * value.
     */
    const handleChange = (event) => {
      const value = event;
      updateObjet(value);
    };
  
    /* A ternary operator. If the apiResponse.loading is true, it will return the first part of the
    ternary operator. If it is false, it will return the second part of the ternary operator. */
    if (apiResponse.loading) return <p>LOADING ...</p>;
    return (
      <>
        {isMulti ? (
          <Select isMulti onChange={handleChange} value={object} options={apiResponse.data} style={{ width: "max-content" }} isDisabled={isDisabled} {...rest} />
        ) : (
          <Select onChange={handleChange} value={object} options={apiResponse.data} style={{ width: "max-content" }} isDisabled={isDisabled} isClearable {...rest} />
        )}
      </>
    );
}



export default MySelector;