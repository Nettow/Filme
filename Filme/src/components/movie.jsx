import obj from '../App.module.css';

const Movie = (props) => {
    return(

        <div className={obj.iten}> 
          <img src={props.Poster}/>
          <h2>{props.Title}</h2>
          <h3>{props.Year}</h3>
        </div>

    )
};

export default Movie;
