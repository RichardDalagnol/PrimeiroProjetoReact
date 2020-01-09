import React, { Component }from 'react';
import {Link}from 'react-router-dom';

import {FaGithubAlt, FaPlus, FaSpinner} from 'react-icons/fa'
import {Container, Form, SubmitButton, List}  from './styles';

import api from '../../services/api'

export default class Main extends Component {
  state = {
    newRepo : '',
    repositories : [],

  }

  componentDidMount(){
    const repositories = localStorage.getItem('repositories');

    if (repositories) {
       this.setState({repositories: JSON.parse(repositories)})
    }
  }

  componentDidUpdate(_, prevState){
    const { repositories } = this.state

    if (prevState.repositories !== repositories) {
        localStorage.setItem('repositories', JSON.stringify(repositories))
    }
  }

  handleInputChange = e => {
    this.setState({
      newRepo: e.target.value
    });
  }

  handleSubmit = async e => {
    e.preventDefault();

    const {newRepo, repositories} = this.state;

    this.setState({ loading:true });

    const response = await api.get(`/repos/${newRepo}`);

    this.setState({ loading:false });

    const data = {
      name : response.data.full_name
    }
    this.setState({
      newRepo : '',
      repositories : [...repositories, data],
      loading: false
    })
  }

  render (){
    const { newRepo, loading, repositories } = this.state;
    return (
    <Container>
      <h1>
        <FaGithubAlt />
        Repositórios
      </h1>

      <Form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Adicionar repositório"
          value={newRepo}
          onChange={this.handleInputChange}
        />
        <SubmitButton loading={loading}>
          {loading ? <FaSpinner color="#FFF" size={14}/> : <FaPlus color="#FFF" size={14}/>}

        </SubmitButton>
      </Form>
      <List>
        {repositories.map(repo =>(
          <li key={repo.name}>
            <span>{repo.name}</span>
           <Link to={`/repository/${encodeURIComponent(repo.name)}`}>Detalhes</Link>
          </li>
        ))}
      </List>
    </Container>
    );
  }
}
