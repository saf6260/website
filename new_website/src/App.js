import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import TopBar from './components/TopBar/TopBar';
import Main from './components/Main/Main';

import {changeEducation, changeWork, changeProjects, changeActivities, login} from './actions'

const mapStateToProps = state => {
    return {
        user: state.login.user,
        isSignedIn: state.login.isSignedIn,
        education: state.changeNumber.education,
        work: state.changeNumber.work,
        skills: state.changeNumber.skills,
        projects: state.changeNumber.projects,
        activities: state.changeNumber.activities,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onLogin: (event) => dispatch(login(event.target.value)),
        onChangeEducation: (event) => dispatch(changeEducation(event)),
        onChangeWork: (event) => dispatch(changeWork(event)),
        onChangeProjects: (event) => dispatch(changeProjects(event)),
        onChangeActivities: (event) => dispatch(changeActivities(event))
    }
}

class App extends Component {
    componentDidMount() {
        window.addEventListener('scroll', this.props.onChangeTopic);
    }

    render() {
        const {onChangeEducation, onChangeWork, onChangeProjects, onChangeActivities, education, work, skills, projects, activities} = this.props;
      return (
            <div>
                <TopBar />
                <Main 
                    changeEdu={onChangeEducation}
                    changeWork={onChangeWork}
                    changeProj={onChangeProjects}
                    changeAct={onChangeActivities}
                    edu={education}
                    work={work}
                    skill={skills}
                    proj={projects}
                    act={activities}
                    className='main'
                />
            </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
