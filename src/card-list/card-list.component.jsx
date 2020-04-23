import React from 'react';
import './card-list.style.css';
import Card from '../card/card.component';

const Cardlist = (props) => {
    return (
        <div className="card-list">{
            props.monsters.map(data => (
                <Card key={data.id} name= {data.name} email= {data.email} />
             ) )
        }
        </div>
    );
}

export default Cardlist;