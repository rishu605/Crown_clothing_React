import './collections-overview.styles.scss'
import {createStructuredSelector} from 'reselect'
import CollectionPreview from '../collection-preview/collection-preview.component'

import {selectShopCollections} from './../../redux/shop/shop.selectors'
import { connect } from 'react-redux'

const CollectionsOverview = ({collections}) => {

    const displayCollections = collections.map(({id, ...otherCollectionProps}) => {
        return <CollectionPreview key={id} {...otherCollectionProps}/>
    })

    return (
        <>
            <div className='collections-overview'>
                {displayCollections}
            </div>
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
})

export default connect(mapStateToProps) (CollectionsOverview)