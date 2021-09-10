import {Link} from 'react-router-dom';
import React from 'react';

import '../app.css';

export const Home = () => {
    return (
        <div className="nav">
            <Link to="/Gongshi">Gongshi</Link>
        </div>
    );
};
