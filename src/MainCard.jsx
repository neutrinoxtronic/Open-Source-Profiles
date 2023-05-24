import React, { useState } from 'react';

function MainCard(props) {
  const [searchCategory, setSearchCategory] = useState('');
  const [showCards, setShowCards] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  const handleSearchCategoryChange = (event) => {
    setSearchCategory(event.target.value);
  };

  const handleSearch = () => {
    

    if (searchCategory.trim() === '') {
      setShowCards(false);
      setFilteredData([]);
    } else {
      const filteredData = props.data.filter(
        (item) => item.username && item.username.toLowerCase() === searchCategory.toLowerCase()
      );

      setFilteredData(filteredData);
      setShowCards(true);
    }
  };

  const handleCategorySelection = (username) => {
    setSearchCategory(username);
    setShowCards(false); 
  };

  return (
    <>
            <h1 className="mt-5 text-center main-heading">The Open-Source Profiles</h1>

      <div style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"2rem"}}>
        <input
          type="text"
          placeholder="Enter your username"
          value={searchCategory}
          onChange={handleSearchCategoryChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      
      <hr />
      <div className="mt-5 container">
        <div className="menu-tab d-flex justify-content-around">
          <props.Categories selectedItem={handleCategorySelection} cat={props.cat} />
        </div>
      </div>
      <div className="menu-items container-fluid mt-5">
        <div className="row">
          <div className="col-11 mx-auto">
            {!showCards && (
              <div className="row my-5">
                {props.data.slice(0, 3).map((elem) => {
                  const { id, name, image, username, price, description } = elem;

                  return (
                    <props.Card
                      id={id}
                      key={id}
                      name={name}
                      image={image}
                      category={username}
                      price={price}
                      description={description}
                    />
                  );
                })}
              </div>
            )}
            {showCards && (
              <div className="row my-5">
                {filteredData.map((elem) => {
                  const { id, name, image, username, price, description } = elem;

                  return (
                    <props.Card
                      id={id}
                      key={id}
                      name={name}
                      image={image}
                      username={username}
                      price={price}
                      description={description}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default MainCard