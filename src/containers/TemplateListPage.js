import {connect} from 'react-redux'
import TemplateListPage from '../components/TemplateListPage'
import {getTemplateList} from "../api";

function mapStateToProps(state) {
    return {
      templateList: state.templateList.templateList,
    }
}

function mapDispatchToProps(dispatch) {
    return {
      getTemplateList: () => dispatch(getTemplateList()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TemplateListPage)
