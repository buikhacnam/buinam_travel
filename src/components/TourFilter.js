import React from 'react';
import {useContext} from 'react';
import {TourContext} from '../context';
import Title from '../components/Title';

//get all unique values.
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
}
                                                                                               
export default function TourFilter({tours}) {
   const context = useContext(TourContext);
 console.log(context);
   const {
       handleChange,
       continent,
       hanoi,
       saigon,
       price,
       minPrice,
       maxPrice,
   } = context;
   
   //get Unique Continent
   let continents = getUnique(tours, "continent");
   
   
   // add "tất cả" option
   continents = ["tất cả", ...continents];
   
  // map to JSX
  continents = continents.map((item, index) => {
      return <option key={index} value={item}>{item}</option>
  })

  

    return (
        <section>
            <Title title="tìm Tours" />
            <form className="filter-form">
                {/* select continent*/}
                <div className ="form-group">
                    <label htmlFor="continent">Điểm đến</label>
                    <select name="continent"
                            id = "continent"
                            value = {continent}
                            className = "form-control"
                            onChange = {handleChange}
                    >
                        {continents}
                    </select>
                </div>

                {/*end of selecting continent */}
                {/* Price Range */}
                <div className="form=group">
                    <label htmlFor="price">Giá tour: ${price}</label>
                    <input type = "range"
                           name = "price"
                           min = {minPrice}
                           max = {maxPrice}
                           id = {price}
                           value = {price}
                           onChange = {handleChange}
                           className = "form-control" 
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
                        <label htmlFor="hanoi">Hà Nội</label>
                    </div>

                    <div className="single-extra">
                    <input 
                            type="checkbox"
                            name="saigon"
                            id="saigon"
                            checked={saigon}
                            onChange={handleChange}
                    />
                    <label htmlFor="saigon">Sài Gòn</label>
                </div>
                </div>
                {/* end of departure */}
            </form>
        </section>
    )
}
