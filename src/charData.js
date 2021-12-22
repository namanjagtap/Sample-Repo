import React from 'react'

function charData(props){
    return(
        <form className='naman'>
            <div className="raju">
                <h2>{props.item.source.name}</h2><br/>
                <a href={props.item.url} target='_blank'><img id="one" src={props.item.urlToImage} /></a>
                <h3>{props.item.title}</h3>
                <p>{props.item.description}</p>
                <footer>
                <p>{props.item.author}</p>
                <p>{props.item.publishedAt}</p>
                </footer>
            </div>
        </form>
    )
}
export default charData