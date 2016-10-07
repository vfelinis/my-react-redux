import React from 'react'
import CreateDoc from './CreateDoc'
import Documents from './Documents'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actions from '../redux/actions'

class NewApp extends React.Component{
	render(){
		return (
			<div>
				<h1>Ваши Документы</h1>
				<button onClick={this.props.actions.fetchDocsRequestAsync}>Send</button>
				<ul>
					{
						this.props.documents.map((doc) => {
							return 	<li key={doc.id}>{doc.text}</li>
						})
					}
				</ul>
			</div>
		)
	}
}

function mapStateToProps(state){
	return state
}

function mapDispatchToProps(dispatch){
	return{
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NewApp)