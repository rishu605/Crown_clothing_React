import { connect } from 'react-redux'
import './collection.styles.scss'
import { selectCollection } from '../../redux/shop/shop.selectors'

const Collection = ({collection}) => {
    console.log(collection)
    return (
        <>
            <div className='collection-page'>
                <h2>Collection PAGE</h2>    
            </div>
        </>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        collection: selectCollection(ownProps.match.params.collectionId)(state)
    }
}

export default connect(mapStateToProps) (Collection)