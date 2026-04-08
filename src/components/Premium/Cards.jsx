import React from 'react';
import Card from './Card';


const Cards = ({data}) => {
    // console.log(data)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 space-y-4 mt-8 w-11/12 mx-auto'>
          {
            data.map(person=> {
              return(
                <Card key={person.id} person={person}></Card>
              )
            } )
          }
        </div>
    );
};

export default Cards;