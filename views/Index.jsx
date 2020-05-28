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
                <ul>
                 {
                   this.props.todos.map((todo, i) => {
                    return (
                       <li>{todo.item}</li>
                        )
                    })
                }
                </ul>
                </div>
        </Layout>);
  }
}

module.exports = Index