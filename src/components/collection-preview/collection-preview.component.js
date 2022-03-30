import CollectionItem from '../collection-item/collection-item.component'
import './collection-preview.styles.scss'

const CollectionPreview = (props) => {
    const displayItems = props.items.filter((item, idx) => idx<4).map((item) => {
        return <CollectionItem key={item.id} item={item}/>
    })
    return (
        <>
            <div className='collection-preview'>
                <h1 className='title'>{props.title.toUpperCase()}</h1>
                <div className='preview'>
                    {displayItems}    
                </div>
            </div>
        </>
    )
}

export default CollectionPreview