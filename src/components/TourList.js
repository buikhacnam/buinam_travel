import React from 'react';
import Tour from './Tour';

//export default function TourList({tours}) {...

export default function TourList({tours}) {
   // const tours = props.tours;
    if(tours.length === 0) {
        return (
            <div className="empty-search">
                <h3>Không tìm thấy kết quả</h3>
            </div>
        )
    }
    return (
        <section className="tourslist">
            <div className="tourslist-center">
                {tours.map(item => {
                    return <Tour key={item.id} tour={item} />
                })}
            </div>
        </section>
    )
}
