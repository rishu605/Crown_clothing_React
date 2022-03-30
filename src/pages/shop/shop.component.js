import { connect } from "react-redux"
import { Route } from "react-router-dom"

import CollectionsOverview from "../../components/collections-overview/collections-overview.component"
import Collection from "../collection/collection.component"

const Shop = ({match, collection}) => {
    console.log(collection)
    return(
        <>
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionsOverview}/>
                <Route path={`${match.path}/:collectionId`} component={Collection}/>
            </div>
        </>
    )
}



export default Shop