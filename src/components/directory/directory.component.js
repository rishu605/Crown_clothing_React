import { connect } from "react-redux";
import MenuItem from "../menu-item/menu-item.component";
import './directory.styles.scss'
import {selectDirectoySections} from './../../redux/directory/directory.selectors'
import {createStructuredSelector} from 'reselect'

const Directory = ({sections}) => {

    const displaySection = sections.map(section => {
        return <MenuItem key={section.id} title={section.title} imageUrl={section.imageUrl} size={section.size}/>
    })

    return(
        <>
            <div className="directory-menu">
              {displaySection}
            </div>
        </>
    )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectoySections
})

export default connect(mapStateToProps) (Directory)