const React = require('react');
const Layout = require('./components/Layout.jsx')
class Index extends React.Component {
  render() {
    return (
        <Layout>
            <div className="body">
           <h1 className="index-title">To Do List</h1>
        
            <form className= "newForm" action="/todo" method="POST">
                <div class="form-group">
                <input type="text" className="form-control" name="item" required /><br/>
                </div>

               
                <input className="btn btn-secondary" type="submit" name="" value="ADD TO DO"/>
             </form>
             {this.props.todos.length < 1 ? <h3 className='empty-list'>there is nothing to do yet</h3> : ''}
                <ul>
                 {
                   this.props.todos.map((todo, i) => {
                    return (
                        <div className="list-item">
                       <li>{todo.item}</li>
                       <form action ={`/todo/${todo._id}?_method=DELETE`} method ="post">
                                    <input className="btn btn-danger" type="submit" value="delete"/>
                                  </form>
                                  </div>
                        )
                    })
                }
                </ul>
                </div>
        </Layout>);
  }
}

module.exports = Index