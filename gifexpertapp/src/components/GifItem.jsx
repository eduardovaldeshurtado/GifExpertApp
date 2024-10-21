/* eslint-disable react/prop-types */


export const GifItem = ({ title, url, id }) => {

    //console.log(title, url, id);

    return (
        <div className="card">
            <img src={url} alt={title} />
            <p>{title}</p>
            <p>{id}</p>
        </div>
    )
}
