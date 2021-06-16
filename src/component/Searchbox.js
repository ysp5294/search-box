
import './Searchbox.css';

const Searchbox = props => {

    const contentChangeHandler = event => {
        props.onChangeValue(event.target.value.toLowerCase());
    }

    return <div className='search'>
        <input className='search-term' type='text' placeholder='Search by Id, Name...' onChange={contentChangeHandler}></input>
        <button type='button' className='search-button'>
            <i className='fa fa-search'></i>
        </button>
    </div>
}

export default Searchbox;