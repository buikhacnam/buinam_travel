import React from 'react';
import {useContext} from 'react';
import {TourContext} from '../context';
import TitleTwo from '../components/TitleTwo';

//get all unique values.
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
}
                                                                                               
export default function TourFilter({tours}) {
   const context = useContext(TourContext);
 
   const {
       handleChange,
       continent,
       hanoi,
       saigon,
       price,
       minPrice,
       maxPrice,
       duration
   } = context;
   
   //get Unique Continent
   let continents = getUnique(tours, "continent");
   let timeDuration = getUnique(tours, "duration");
   
   // add "tất cả" option
   continents = ["tất cả", ...continents];
   timeDuration = ["không chọn", ...timeDuration];
   
  // map to JSX
  continents = continents.map((item, index) => {
      return <option key={index} value={item}>{item}</option>
  })

  timeDuration = timeDuration.map((item, index) => {
    return <option key={index} value={item}>{item}</option>
})
  

    return (
        <section className="filter-container">
            <TitleTwo title="Chọn tours" />
            <form className="filter-form">
                {/* select continent*/}
                <div className ="form-group">
                    <label htmlFor="continent">Điểm đến: </label>
                    <select name="continent"
                            id = "continent"
                            value = {continent}
                            className = "form-control-filter"
                            onChange = {handleChange}
                    >
                        {continents}
                    </select>
                </div>

                {/*end of selecting continent */}

                  {/* select time*/}
                  <div className ="form-group">
                  <label htmlFor="duration">Số ngày lịch trình:</label>
                  <select name="duration"
                          id = "duration"
                          value = {duration}
                          className = "form-control-filter"
                          onChange = {handleChange}
                  >
                      {timeDuration}
                  </select>
              </div>

              {/*end of selecting time */}

               {/* Price Range */}
               <div className="form-group">
               <label htmlFor="price">Giá tour: ${price}</label>
               <input type = "range"
                      name = "price"
                      min = {minPrice}
                      max = {maxPrice}
                      id = {price}
                      value = {price}
                      onChange = {handleChange}
                      className = "form-control-filter" 
               />
           </div>
           {/* end of Price Range */}

                {/* departure */}
                <div className = "form-group">
                    <div className="single-extra">
                        <input 
                                type="checkbox"
                                name="hanoi"
                                id="hanoi"
                                checked={hanoi}
                                onChange={handleChange}
                        />
                        <label htmlFor="hanoi">Nội Bài Airport</label>
                    </div>

                    <div className="single-extra">
                    <input 
                            type="checkbox"
                            name="saigon"
                            id="saigon"
                            checked={saigon}
                            onChange={handleChange}
                    />
                    <label htmlFor="saigon">Tân Sơn Nhất Airport</label>
                </div>
                </div>
                {/* end of departure */}
            </form>
        </section>
    )
}
